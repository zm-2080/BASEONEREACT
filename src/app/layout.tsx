import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Your Website | Base One",
  description:
    "Professional websites for local businesses. $499 build, $30/month support. Turn visitors into calls, quotes, and booked jobs.",
  openGraph: {
    title: "Create Your Website | Base One",
    description:
      "Professional websites for local businesses. $499 build, $30/month support. Turn visitors into calls, quotes, and booked jobs.",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "Base One website preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Create Your Website | Base One",
    description:
      "Professional websites for local businesses. $499 build, $30/month support. Turn visitors into calls, quotes, and booked jobs.",
    images: ["/og_image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
