import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Samrat - Web Developer Portfolio",
  description:
    "Web developer specializing in Next.js, React, and modern frontend technologies. Building with precision, purpose, and people in mind.",
  keywords: ["web developer", "Next.js", "React", "TypeScript", "frontend developer", "full stack developer"],
  authors: [{ name: "Samrat" }],
  openGraph: {
    title: "Samrat - Web Developer Portfolio",
    description: "Web developer specializing in Next.js, React, and modern frontend technologies.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
