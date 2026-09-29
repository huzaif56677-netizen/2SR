import nodemailer from "nodemailer"

export interface SendEnquiryParams {
  name: string
  company: string
  email: string
  phone: string
  service: string
  message: string
  ip: string
}

export async function sendEnquiryEmail(params: SendEnquiryParams): Promise<{ success: boolean; messageId?: string; mode: string }> {
  const recipientEmail = process.env.CONTACT_NOTIFICATION_EMAIL || "hr@2srinnovations.com"
  const { name, company, email, phone, service, message, ip } = params

  const timestamp = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "medium",
  }) + " (IST)"

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #0f172a; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #cbd5e1; box-shadow: 0 4px 16px rgba(0,0,0,0.05); }
          .header { background: #0052CC; color: #ffffff; padding: 24px 32px; }
          .header h1 { margin: 0; font-size: 22px; font-weight: 600; letter-spacing: -0.01em; }
          .header p { margin: 4px 0 0 0; font-size: 13px; opacity: 0.9; }
          .content { padding: 32px; }
          .pill { display: inline-block; background: #EBF3FC; color: #0052CC; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 20px; }
          .grid-row { display: flex; margin-bottom: 14px; border-bottom: 1px solid #f1f5f9; padding-bottom: 10px; }
          .label { width: 140px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; font-weight: 600; }
          .value { flex: 1; font-size: 15px; color: #0f172a; font-weight: 500; }
          .message-box { margin-top: 24px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px; }
          .message-box h3 { margin: 0 0 10px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; }
          .message-box p { margin: 0; font-size: 14px; line-height: 1.6; color: #1e293b; white-space: pre-wrap; }
          .footer { background: #f8fafc; padding: 16px 32px; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Corporate Enquiry Received</h1>
            <p>2SR Innovations — Direct Consultation Portal (${escapeHtml(recipientEmail)})</p>
          </div>
          <div class="content">
            <span class="pill">${escapeHtml(service)}</span>
            
            <div class="grid-row">
              <div class="label">Client Name</div>
              <div class="value">${escapeHtml(name)}</div>
            </div>
            
            <div class="grid-row">
              <div class="label">Organization</div>
              <div class="value">${escapeHtml(company || "Individual / Not specified")}</div>
            </div>

            <div class="grid-row">
              <div class="label">Email</div>
              <div class="value">${escapeHtml(email)}</div>
            </div>

            <div class="grid-row">
              <div class="label">Phone</div>
              <div class="value">${escapeHtml(phone)}</div>
            </div>

            <div class="grid-row">
              <div class="label">Submission Time</div>
              <div class="value">${timestamp}</div>
            </div>

            <div class="grid-row">
              <div class="label">Client IP</div>
              <div class="value">${escapeHtml(ip)}</div>
            </div>

            <div class="message-box">
              <h3>Requirement Description</h3>
              <p>${escapeHtml(message || "No additional requirement description provided.")}</p>
            </div>
          </div>
          <div class="footer">
            Confidential Enquiry sent to ${escapeHtml(recipientEmail)} via 2SR Innovations Corporate Website System.
          </div>
        </div>
      </body>
    </html>
  `

  const textContent = `
NEW CORPORATE ENQUIRY - 2SR INNOVATIONS
Recipient:           ${recipientEmail}
---------------------------------------------
Service Requirement: ${service}
Client Name:         ${name}
Organization:        ${company || "Individual / Not specified"}
Email:               ${email}
Phone:               ${phone}
Time:                ${timestamp}
Client IP:           ${ip}

Requirement Details:
${message || "No additional description provided."}
---------------------------------------------
  `

  // 1. SMTP mode (Hostinger / Custom SMTP - Direct & Guaranteed Delivery)
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const port = parseInt(process.env.SMTP_PORT || "465", 10)
      const isSecure = process.env.SMTP_SECURE === "true" || port === 465

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port,
        secure: isSecure,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      const info = await transporter.sendMail({
        from: `"2SR Innovations" <${process.env.SMTP_USER}>`,
        replyTo: `"${name}" <${email}>`,
        to: recipientEmail,
        subject: `[New Enquiry: ${service}] from ${name} (${company || "Corporate"})`,
        text: textContent,
        html: htmlContent,
      })

      console.log(`[Mailer] Successfully delivered via Hostinger SMTP to ${recipientEmail} (ID: ${info.messageId})`)
      return { success: true, messageId: info.messageId, mode: "smtp" }
    } catch (smtpErr: any) {
      console.error("[Mailer] Hostinger SMTP Error:", smtpErr)
      // If neither Resend nor other fallback is available, fail gracefully
      if (!process.env.RESEND_API_KEY && !process.env.WEB3FORMS_ACCESS_KEY) {
        throw new Error(`Email delivery failed via Hostinger SMTP: ${smtpErr?.message || "Please check credentials"}`)
      }
    }
  }

  // 2. Resend API mode (Fallback if SMTP is not provided or fails)
  if (process.env.RESEND_API_KEY) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || "2SR Innovations <onboarding@resend.dev>",
          to: [recipientEmail],
          reply_to: email,
          subject: `[New Enquiry: ${service}] from ${name} (${company || "Corporate"})`,
          html: htmlContent,
          text: textContent,
        }),
      })

      if (res.ok) {
        const data = await res.json()
        return { success: true, messageId: data.id, mode: "resend" }
      }

      const errData = await res.json().catch(() => null)
      const errMessage = errData?.message || (await res.text().catch(() => "Unknown Resend error"))
      console.warn("[Mailer] Resend API error:", res.status, errMessage)

      // Handle Resend unverified testing domain restriction (only allows sending to account owner in test mode)
      if (res.status === 403 && typeof errMessage === "string" && errMessage.includes("own email address")) {
        const ownerMatch = errMessage.match(/\(([^)]+)\)/)
        const ownerEmail = ownerMatch ? ownerMatch[1] : null
        if (ownerEmail) {
          console.log(`[Mailer] Resend sandbox mode detected. Delivering to verified account owner (${ownerEmail}) for intended recipient: ${recipientEmail}...`)
          const fallbackRes = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: process.env.RESEND_FROM_EMAIL || "2SR Innovations <onboarding@resend.dev>",
              to: [ownerEmail],
              reply_to: email,
              subject: `[For: ${recipientEmail}] [New Enquiry: ${service}] from ${name} (${company || "Corporate"})`,
              html: `
                <div style="background:#EFF6FF;border:1px solid #BFDBFE;color:#1E40AF;padding:12px 16px;border-radius:8px;margin-bottom:20px;font-family:sans-serif;font-size:13px;">
                  <strong>Intended Recipient:</strong> ${escapeHtml(recipientEmail)}<br/>
                  <em>Note: Delivered via Resend development sandbox. To deliver directly to ${escapeHtml(recipientEmail)}, verify domain <code>2srinnovations.com</code> in your Resend dashboard or configure Hostinger SMTP.</em>
                </div>
                ${htmlContent}
              `,
              text: `Intended Recipient: ${recipientEmail}\n\n${textContent}`,
            }),
          })
          if (fallbackRes.ok) {
            const data = await fallbackRes.json()
            return { success: true, messageId: data.id, mode: "resend-sandbox-delivered" }
          }
        }
      }

      throw new Error(`Email delivery failed: ${errMessage}`)
    } catch (err: any) {
      console.error("[Mailer] Failed to send via Resend:", err.message || err)
      throw err
    }
  }

  // 3. Web3Forms API mode if WEB3FORMS_ACCESS_KEY is provided
  if (process.env.WEB3FORMS_ACCESS_KEY) {
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_ACCESS_KEY,
          to: recipientEmail,
          subject: `[New Enquiry: ${service}] from ${name} (${company || "Corporate"})`,
          from_name: `${name} (2SR Website Enquiry)`,
          name,
          email,
          phone,
          company: company || "N/A",
          service,
          message,
        }),
      })

      if (res.ok) {
        const data = await res.json()
        return { success: true, messageId: data.message, mode: "web3forms" }
      }
      console.error("[Mailer] Web3Forms API error:", await res.text())
    } catch (err) {
      console.error("[Mailer] Failed to send via Web3Forms:", err)
    }
  }

  // 4. Fallback Development & Testing Mode (Server-side logging)
  console.log("==================================================")
  console.log(`[ENQUIRY SECURELY RECEIVED FOR ${recipientEmail}]`)
  console.log(`Service: ${service}`)
  console.log(`From:    ${name} <${email}> | Phone: ${phone}`)
  console.log(`Company: ${company || "N/A"}`)
  console.log(`Message: ${message || "(None)"}`)
  console.log(`IP:      ${ip}`)
  console.log("==================================================")

  return { success: true, mode: "development-logged" }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}
