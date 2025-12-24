
import nodemailer from 'nodemailer';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();
    const to = process.env.CONTACT_EMAIL;
    if (!to) return new Response(JSON.stringify({ error: 'CONTACT_EMAIL not configured' }), { status: 500 });

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });

    const info = await transporter.sendMail({
      from: `Sky High Website <${process.env.SMTP_USER}>`,
      to,
      subject: `New Quote Request from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || ''}\n\nMessage:\n${message || ''}`
    });

    return new Response(JSON.stringify({ ok: true, id: info.messageId }), { status: 200 });
  } catch (e:any) {
    return new Response(JSON.stringify({ error: e?.message || 'Unknown error' }), { status: 500 });
  }
}
