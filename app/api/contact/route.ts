import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate all required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // Configure the email transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Email to the company (devixot@gmail.com)
    const companyMailOptions = {
      from: `"${name}" <${email}>`,
      to: "devixot@gmail.com",
      replyTo: email,
      subject: `New Contact Form Submission - Devixo Solutions`,
      text: `Name: ${name}
Email: ${email}
Subject: ${subject || "N/A"}

Message:
${message}`,
    };

    // 2. Automatic confirmation email to the user
    const userMailOptions = {
      from: `"Devixo Solutions" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thank You for Contacting Devixo Solutions`,
      text: `Hello ${name},

Thank you for contacting Devixo Solutions. We have received your message and our team will get back to you as soon as possible.

Best Regards,
Devixo Solutions`,
    };

    // Send both emails concurrently
    await Promise.all([
      transporter.sendMail(companyMailOptions),
      transporter.sendMail(userMailOptions),
    ]);

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send the message. Please try again later." },
      { status: 500 }
    );
  }
}
