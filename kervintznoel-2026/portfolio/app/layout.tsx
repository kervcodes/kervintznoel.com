// src/app/layout.tsx
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/globals.css";
import KioskProvider from "@/components/KioskProvider";

export const metadata: Metadata = {
  title: {
    default: "Kervintz Noel — Software Engineer",
    template: "%s | Kervintz Noel",
  },
  description:
    "Software engineer specializing in SRE, mobile apps, and full-stack development. Building Tidywaro and HaitiBillboard.",
  openGraph: {
    type: "website",
    url: "https://kervintznoel.com",
    siteName: "Kervintz Noel",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* PWA / kiosk support */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="KN Portfolio" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body>
        <KioskProvider />
        {children}
        <Analytics />
      </body>
    </html>
  );
}