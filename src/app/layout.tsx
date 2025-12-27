import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  title: "ZIED FATNASSI | Autonomous Tunisian Builder & GDSC Leader",
  description: "Portfolio of a 21-year-old Tunisian developer from Ksar Hellal. Expert in Next.js, React, Supabase, Arduino, and AI Agents. GDSC leader with a passion for SaaS and innovation.",
  keywords: ["Next.js", "React", "Supabase", "Arduino", "AI Agents", "GDSC", "Tunisia", "Developer", "Portfolio", "IoT"],
  authors: [{ name: "ZIED FATNASSI" }],
  icons: {
    icon: "/avatar.png",
    shortcut: "/avatar.png",
    apple: "/avatar.png",
  },
  openGraph: {
    title: "ZIED FATNASSI | Autonomous Tunisian Builder & GDSC Leader",
    description: "21-year-old Tunisian developer building the future with Next.js, React, Supabase, and AI Agents",
    type: "website",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
