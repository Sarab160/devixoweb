import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Ensure this route runs on the Node.js runtime (Nodemailer is not compatible with Edge runtime)
export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    console.log("Request received for contact form.");
    const body = await request.json();
    const { name, email, whatsapp, subject, message } = body;

    // Validate all required fields
    if (!name || !email || !message) {
      console.log("Validation failed: Missing required fields.");
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }
    console.log("Validation passed.");

    // Validate environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Server Error: Missing EMAIL_USER or EMAIL_PASS environment variables.");
      return NextResponse.json(
        { success: false, error: "Server misconfiguration. Please try again later." },
        { status: 500 }
      );
    }

    // Configure the email transporter with explicit SMTP settings for production
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Email to the company (devixot@gmail.com)
    const companyMailOptions = {
      from: process.env.EMAIL_USER,
      to: "devixot@gmail.com", // You can also change this to process.env.COMPANY_EMAIL if needed
      replyTo: email,
      subject: `New Contact Form Submission - Devixo Solutions`,
      text: `Name: ${name}\nEmail: ${email}\nWhatsApp: ${whatsapp || "N/A"}\nSubject: ${subject || "N/A"}\n\nMessage:\n${message}`,
    };

    // 2. Automatic confirmation email to the user
    const userMailOptions = {
      from: `"Devixo Solutions" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank You for Contacting Devixo Solutions`,
      text: `Hello ${name},\n\nThank you for contacting Devixo Solutions. We have received your message and our team will get back to you as soon as possible.\n\nBest Regards,\nDevixo Solutions`,
    };

    // Send both emails concurrently
    console.log("Sending emails...");
    const results = await Promise.all([
      transporter.sendMail(companyMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    console.log("SMTP responses received:", results.map(res => res.response));

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Caught error while sending email:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to send the message. Please try again later." },
      { status: 500 }
    );
  }
}
