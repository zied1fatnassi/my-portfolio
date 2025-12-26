import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zied | Full-Stack Developer & GDSC Leader",
  description: "Portfolio of Zied, a 21-year-old Tunisian developer from Ksar Hellal. Expert in Next.js, React, Supabase, and Arduino. GDSC leader with a passion for SaaS.",
  keywords: ["Next.js", "React", "Supabase", "Arduino", "GDSC", "Tunisia", "Developer", "Portfolio"],
  authors: [{ name: "Zied" }],
  openGraph: {
    title: "Zied | Full-Stack Developer & GDSC Leader",
    description: "21-year-old Tunisian developer building the future with Next.js, React, and Supabase",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
