import { NextResponse } from "next/server"
import {
  getClientIp,
  checkRateLimitAndAbuse,
  recordSubmission,
  checkDuplicate,
  validateContactPayload,
} from "@/lib/security"
import { sendEnquiryEmail } from "@/lib/mailer"

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req)

    // 1. Rate limiting & Abuse protection
    const rateCheck = checkRateLimitAndAbuse(ip)
    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: `Rate limit reached. Please wait ${rateCheck.retryAfterSeconds || 60} seconds before submitting again.`,
        },
        { status: 429 }
      )
    }

    const body = await req.json()

    // 2. Honeypot check: reject bot submissions immediately
    if (body.website || body.honeypot) {
      // Return 200 to confuse bots and prevent automated retry loops
      return NextResponse.json({
        success: true,
        message: "Thank you. Your enquiry has been received.",
      })
    }

    // 3. Server-side validation
    const validation = validateContactPayload(body)
    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          errors: validation.errors,
          error: "Please check the required fields and try again.",
        },
        { status: 400 }
      )
    }

    // 4. Suspicious activity check: inhuman typing speed (< 1.5s) or rate threshold
    const duration = Number(body.submitDurationMs) || 0
    const isSuspiciousSpeed = duration > 0 && duration < 1400

    if (rateCheck.isSuspicious || isSuspiciousSpeed) {
      // If Cloudflare Turnstile is configured in environment, verify token
      const turnstileSecret = process.env.TURNSTILE_SECRET_KEY
      if (turnstileSecret) {
        const token = body.turnstileToken
        if (!token) {
          return NextResponse.json(
            {
              success: false,
              requiresChallenge: true,
              error: "Security verification required. Please complete the quick challenge below.",
            },
            { status: 403 }
          )
        }

        // Verify with Cloudflare API
        const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            secret: turnstileSecret,
            response: token,
            remoteip: ip,
          }),
        })
        const verifyData = await verifyRes.json()
        if (!verifyData.success) {
          return NextResponse.json(
            {
              success: false,
              requiresChallenge: true,
              error: "Security check failed. Please retry the challenge.",
            },
            { status: 403 }
          )
        }
      }
    }

    const { name, company, email, phone, service, message } = validation.sanitized

    // 5. Duplicate submission detection (5-minute sliding window per IP + Email + Message)
    const isDuplicate = checkDuplicate(ip, email, service, message)
    if (isDuplicate) {
      return NextResponse.json({
        success: true,
        message:
          "Thank you. Your enquiry has been received. Our team will review your requirements and get back to you shortly.",
      })
    }

    // 6. Secure Server-side dispatch to roohi.salar@2srinnovations.com
    await sendEnquiryEmail({
      name,
      company,
      email,
      phone,
      service,
      message,
      ip,
    })

    // 7. Record timestamp in rate limiter
    recordSubmission(ip)

    return NextResponse.json({
      success: true,
      message:
        "Thank you. Your enquiry has been received. Our team will review your requirements and get back to you shortly.",
    })
  } catch (error: any) {
    console.error("[API Contact Error]:", error)
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Unable to process your request at this time. Please reach out to roohi.salar@2srinnovations.com directly.",
      },
      { status: 500 }
    )
  }
}
