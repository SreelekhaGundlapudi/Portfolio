import React from "react"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Sreelekha Gundlapudi - Frontend Developer",
  description:
    "Frontend Developer with 3+ years of experience in React.js, Next.js, and modern web technologies. Based in Hyderabad, India.",
  keywords: "Frontend Developer, React.js, Next.js, JavaScript, Web Development, Hyderabad",
  authors: [{ name: "Sreelekha Gundlapudi" }],
  openGraph: {
    title: "Sreelekha Gundlapudi - Frontend Developer",
    description: "Frontend Developer with 3+ years of experience in React.js, Next.js, and modern web technologies.",
    type: "website",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
