import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header"
import { Inter } from "next/font/google"

export const metadata: Metadata = {
  title: "Sua Nuvem - Infraestrutura sob seu comando",
  description: "Consultoria DevOps, integrações com N8N, servidores dedicados e migração de sistemas.",
    generator: 'v0.dev'
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="dark">
        <Header />
        {children}
      </body>
    </html>
  )
}
