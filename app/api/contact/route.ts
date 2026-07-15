import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { fullName, email, projectType, message } = await request.json();

    if (!fullName || !email || !message) {
      return NextResponse.json({ error: "Missing fields." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "devixot@gmail.com",
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Devixo Contact" <devixot@gmail.com>`,
      to: "devixot@gmail.com",
      replyTo: email,
      subject: `New Inquiry from ${fullName}${projectType ? ` — ${projectType}` : ""}`,
      html: `
        <div style="font-family:'Helvetica Neue',Arial,sans-serif;max-width:600px;margin:0 auto;background:#f8fafc;border-radius:12px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#6366f1,#8b5cf6);padding:32px 40px;">
            <h1 style="color:#fff;margin:0;font-size:22px;font-weight:700;">New Project Inquiry</h1>
            <p style="color:rgba(255,255,255,0.8);margin:6px 0 0;font-size:13px;">via Devixo Contact Form</p>
          </div>
          <div style="padding:32px 40px;background:#fff;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:12px 0;border-bottom:1px solid #f1f5f9;">
                <span style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#94a3b8;font-weight:600;">Full Name</span>
                <p style="margin:4px 0 0;font-size:15px;color:#1e293b;font-weight:600;">${fullName}</p>
              </td></tr>
              <tr><td style="padding:12px 0;border-bottom:1px solid #f1f5f9;">
                <span style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#94a3b8;font-weight:600;">Email (Reply To)</span>
                <p style="margin:4px 0 0;font-size:15px;color:#6366f1;font-weight:600;">${email}</p>
              </td></tr>
              ${projectType ? `<tr><td style="padding:12px 0;border-bottom:1px solid #f1f5f9;">
                <span style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#94a3b8;font-weight:600;">Project Type</span>
                <p style="margin:4px 0 0;font-size:15px;color:#1e293b;font-weight:600;">${projectType}</p>
              </td></tr>` : ""}
              <tr><td style="padding:12px 0;">
                <span style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#94a3b8;font-weight:600;">Message</span>
                <p style="margin:8px 0 0;font-size:14px;color:#475569;line-height:1.7;background:#f8fafc;padding:16px;border-radius:8px;border-left:3px solid #6366f1;">${message.replace(/\n/g, "<br/>")}</p>
              </td></tr>
            </table>
          </div>
          <div style="padding:20px 40px;background:#f8fafc;text-align:center;">
            <p style="margin:0;font-size:12px;color:#94a3b8;">Devixo — Faisalabad, Pakistan | devixot@gmail.com | +92 3424119598</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json({ error: "Failed to send." }, { status: 500 });
  }
}
