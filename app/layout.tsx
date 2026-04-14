import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Archana Sondur — Backend Engineer",
  description:
    "MS CS graduate from USC (May 2026) focused on backend systems, platform engineering, and security tooling. Building things close to the metal.",
  keywords: [
    "backend engineer",
    "systems programmer",
    "platform engineer",
    "eBPF",
    "C++",
    "Rust",
    "USC",
    "Archana Sondur",
  ],
  authors: [{ name: "Archana Sondur" }],
  openGraph: {
    title: "Archana Sondur — Backend Engineer",
    description:
      "MS CS graduate from USC (May 2026) focused on backend systems, platform engineering, and security tooling.",
    // TODO: replace with actual deployed URL
    url: "https://archanasondur.dev",
    siteName: "Archana Sondur",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Archana Sondur — Backend Engineer",
    description:
      "MS CS graduate from USC (May 2026) focused on backend systems, platform engineering, and security tooling.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
