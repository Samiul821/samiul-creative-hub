import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // ---------------- EMAIL ----------------
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    // ---------------- WHATSAPP (via API link) ----------------
    const phone = process.env.WHATSAPP_NUMBER; // 8801XXXXXXXXX
    const whatsappMessage = `New Message:%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    const whatsappURL = `https://wa.me/${phone}?text=${whatsappMessage}`;

    return NextResponse.json({
      success: true,
      whatsappURL,
    });
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}