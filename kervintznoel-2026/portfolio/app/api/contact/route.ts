// src/app/api/contact/route.ts
import type { ContactPayload } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// ---------------------------------------------------------------------------
// In-memory rate limiter: max 5 submissions per IP per 10 minutes
// ---------------------------------------------------------------------------
const RATE_LIMIT_MAX      = 5;
const RATE_LIMIT_WINDOW   = 10 * 60 * 1000; // 10 minutes in ms

const ipHits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now  = Date.now();
  const entry = ipHits.get(ip);

  if (!entry || now > entry.resetAt) {
    ipHits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) return true;

  entry.count++;
  return false;
}

// ---------------------------------------------------------------------------

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(str: string): string {
  return str.trim().slice(0, 2000);
}

function escapeHtml(str: string): string {
  return str.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case "&":  return "&amp;";
      case "<":  return "&lt;";
      case ">": return "&gt;";
      case '"': return "&quot;";
      default:   return "&#39;";
    }
  });
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait before trying again." },
        { status: 429 }
      );
    }

    const body = (await req.json()) as ContactPayload;

    // Honeypot check — bots fill hidden fields, humans leave them empty
    if (body.website) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const { name, email, subject, message } = body;

    // Type-check all fields before sanitizing to avoid runtime throws
    if (
      typeof name    !== "string" ||
      typeof email   !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json(
        { error: "Invalid request payload." },
        { status: 400 }
      );
    }

    // Sanitize first, then validate against the cleaned values
    const cleanName    = sanitize(name);
    const cleanEmail   = sanitize(email);
    const cleanSubject = sanitize(subject);
    const cleanMessage = sanitize(message);

    if (!cleanName || !cleanEmail || !cleanSubject || !cleanMessage) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(cleanEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const safeName    = escapeHtml(cleanName);
    const safeEmail   = escapeHtml(cleanEmail);
    const safeSubject = escapeHtml(cleanSubject);
    const safeMessage = escapeHtml(cleanMessage);

    // Send to you
    await resend.emails.send({
      from:    "Portfolio Contact <onboarding@resend.dev>",
      to:      process.env.CONTACT_EMAIL!,
      subject: `[kervintznoel.com] ${safeSubject} — from ${safeName}`,
      html: `
        <div style="font-family:monospace;max-width:600px;margin:0 auto;padding:32px;background:#0f0f0f;color:#f5f5f5;border-radius:12px">
          <p style="color:#6EE7B7;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:24px">
            New message from kervintznoel.com
          </p>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="color:#555;font-size:12px;padding:8px 0;border-bottom:1px solid #1a1a1a;width:100px">Name</td>
                <td style="color:#ccc;font-size:14px;padding:8px 0;border-bottom:1px solid #1a1a1a">${safeName}</td></tr>
            <tr><td style="color:#555;font-size:12px;padding:8px 0;border-bottom:1px solid #1a1a1a">Email</td>
                <td style="color:#ccc;font-size:14px;padding:8px 0;border-bottom:1px solid #1a1a1a">${safeEmail}</td></tr>
            <tr><td style="color:#555;font-size:12px;padding:8px 0;border-bottom:1px solid #1a1a1a">Subject</td>
                <td style="color:#ccc;font-size:14px;padding:8px 0;border-bottom:1px solid #1a1a1a">${safeSubject}</td></tr>
          </table>
          <div style="margin-top:24px;padding:20px;background:#111;border-radius:8px;border:1px solid #1e1e1e">
            <p style="color:#555;font-size:12px;margin-bottom:12px">Message</p>
            <p style="color:#ccc;font-size:14px;line-height:1.7;white-space:pre-wrap">${safeMessage}</p>
          </div>
          <p style="color:#333;font-size:11px;margin-top:24px">
            Reply directly to this email to respond to ${safeName}.
          </p>
        </div>
      `,
      replyTo: cleanEmail,
    });

    // Send confirmation to sender
    await resend.emails.send({
      from:    "Kervintz Noel <onboarding@resend.dev>",
      to:      cleanEmail,
      subject: "Got your message — I'll be in touch soon",
      html: `
        <div style="font-family:monospace;max-width:600px;margin:0 auto;padding:32px;background:#0f0f0f;color:#f5f5f5;border-radius:12px">
          <p style="color:#6EE7B7;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:24px">
            kervintznoel.com
          </p>
          <p style="color:#ccc;font-size:16px;font-family:'Georgia',serif;margin-bottom:16px">
            Hey ${safeName},
          </p>
          <p style="color:#888;font-size:14px;line-height:1.7;margin-bottom:24px">
            Thanks for reaching out. I got your message and will reply within 48 hours.
          </p>
          <p style="color:#555;font-size:13px;line-height:1.7">
            — Kervintz
          </p>
          <hr style="border:none;border-top:1px solid #1a1a1a;margin:32px 0"/>
          <p style="color:#333;font-size:11px">
            You're receiving this because you submitted the contact form at kervintznoel.com
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (err) {
    console.error("[contact] send error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try emailing me directly." },
      { status: 500 }
    );
  }
}