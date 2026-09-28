import crypto from "crypto"

export interface ContactPayload {
  name: string
  company?: string
  email: string
  phone: string
  service: string
  message?: string
  honeypot?: string
  submitDurationMs?: number
  turnstileToken?: string
}

export interface ValidationResult {
  isValid: boolean
  errors: Record<string, string>
  sanitized: {
    name: string
    company: string
    email: string
    phone: string
    service: string
    message: string
  }
}

// In-memory rate limiting and abuse store (per server lifecycle)
interface RateRecord {
  timestamps: number[]
  blockedUntil?: number
  abuseCount: number
}

const rateLimitStore = new Map<string, RateRecord>()
const recentSubmissions = new Map<string, number>() // hash -> timestamp

// Clean up expired records every 10 minutes
setInterval(() => {
  const now = Date.now()
  for (const [ip, record] of rateLimitStore.entries()) {
    if (record.blockedUntil && record.blockedUntil > now) continue
    record.timestamps = record.timestamps.filter((t) => now - t < 10 * 60 * 1000)
    if (record.timestamps.length === 0 && (!record.blockedUntil || record.blockedUntil <= now)) {
      rateLimitStore.delete(ip)
    }
  }

  for (const [hash, time] of recentSubmissions.entries()) {
    if (now - time > 5 * 60 * 1000) {
      recentSubmissions.delete(hash)
    }
  }
}, 10 * 60 * 1000)

export function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for")
  if (forwarded) {
    return forwarded.split(",")[0].trim()
  }
  return req.headers.get("x-real-ip") || "127.0.0.1"
}

export function checkRateLimitAndAbuse(ip: string): {
  allowed: boolean
  isBlocked: boolean
  isSuspicious: boolean
  retryAfterSeconds?: number
} {
  const now = Date.now()
  let record = rateLimitStore.get(ip)

  if (!record) {
    record = { timestamps: [], abuseCount: 0 }
    rateLimitStore.set(ip, record)
  }

  // Check if currently blocked
  if (record.blockedUntil && record.blockedUntil > now) {
    const remainingSeconds = Math.ceil((record.blockedUntil - now) / 1000)
    return {
      allowed: false,
      isBlocked: true,
      isSuspicious: true,
      retryAfterSeconds: remainingSeconds,
    }
  }

  // Filter timestamps within last 10 minutes
  record.timestamps = record.timestamps.filter((t) => now - t < 10 * 60 * 1000)

  // Max 5 submissions per 10 minutes
  if (record.timestamps.length >= 5) {
    record.abuseCount += 1
    // Block IP for 30 minutes if repeated abuse
    const blockDurationMs = record.abuseCount >= 2 ? 30 * 60 * 1000 : 10 * 60 * 1000
    record.blockedUntil = now + blockDurationMs
    const remainingSeconds = Math.ceil(blockDurationMs / 1000)
    return {
      allowed: false,
      isBlocked: true,
      isSuspicious: true,
      retryAfterSeconds: remainingSeconds,
    }
  }

  // Suspicious if > 2 submissions in under 30 seconds
  const recent30s = record.timestamps.filter((t) => now - t < 30 * 1000).length
  const isSuspicious = recent30s >= 2

  return {
    allowed: true,
    isBlocked: false,
    isSuspicious,
  }
}

export function recordSubmission(ip: string) {
  const now = Date.now()
  let record = rateLimitStore.get(ip)
  if (!record) {
    record = { timestamps: [], abuseCount: 0 }
    rateLimitStore.set(ip, record)
  }
  record.timestamps.push(now)
}

export function checkDuplicate(ip: string, email: string, service: string, message: string): boolean {
  const hash = crypto
    .createHash("sha256")
    .update(`${ip}:${email.toLowerCase().trim()}:${service}:${message.trim().substring(0, 100)}`)
    .digest("hex")

  const now = Date.now()
  const lastTime = recentSubmissions.get(hash)

  if (lastTime && now - lastTime < 5 * 60 * 1000) {
    return true // duplicate within 5 minutes
  }

  recentSubmissions.set(hash, now)
  return false
}

export function validateContactPayload(body: any): ValidationResult {
  const errors: Record<string, string> = {}

  // 1. Honeypot check: must be empty
  if (body.honeypot && String(body.honeypot).trim() !== "") {
    errors.honeypot = "Bot activity detected."
  }

  // 2. Name validation
  const name = typeof body.name === "string" ? body.name.trim() : ""
  if (!name) {
    errors.name = "Name is required."
  } else if (name.length < 2) {
    errors.name = "Name must be at least 2 characters."
  } else if (name.length > 100) {
    errors.name = "Name must not exceed 100 characters."
  }

  // 3. Email validation
  const email = typeof body.email === "string" ? body.email.trim() : ""
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email) {
    errors.email = "Email is required."
  } else if (!emailRegex.test(email) || email.length > 120) {
    errors.email = "Please provide a valid corporate or personal email address."
  }

  // 4. Phone validation
  const phone = typeof body.phone === "string" ? body.phone.trim() : ""
  const digitsOnly = phone.replace(/\D/g, "")
  if (!phone) {
    errors.phone = "Phone number is required."
  } else if (digitsOnly.length < 7 || phone.length > 25) {
    errors.phone = "Please enter a valid phone number with country/area code."
  }

  // 5. Company validation (optional)
  const company = typeof body.company === "string" ? body.company.trim().slice(0, 120) : ""

  // 6. Service validation
  const validServices = [
    "End-to-End Recruitment",
    "Corporate Gifting",
    "HVAC & MEP Services",
    "General Inquiry",
  ]
  const service = typeof body.service === "string" && validServices.includes(body.service.trim())
    ? body.service.trim()
    : "General Inquiry"

  // 7. Message validation (optional, max 2500 chars)
  const message = typeof body.message === "string" ? body.message.trim().slice(0, 2500) : ""

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitized: {
      name,
      company,
      email,
      phone,
      service,
      message,
    },
  }
}
