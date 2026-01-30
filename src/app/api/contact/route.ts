import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const { name, phone, email, service, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: 'info@jakelplumbing.com',
      subject: `New Contact Form: ${service || 'General Inquiry'}`,
      text: `
Name: ${name}
Phone: ${phone}
Email: ${email}
Service: ${service}
Message:
${message}
      `,
    })

    return NextResponse.json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
