import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import { Sidebar } from "@/components/sidebar"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MoonPup - The 1st DeepSeek AI meme on Solana",
  description: "Join the cosmic journey with MoonPup, the innovative AI-powered meme token on Solana.",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#8B5CF6",
  manifest: "/manifest.json",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/icon-192x192.png" },
  ],
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="https://telegram.org/js/telegram-web-app.js" async></script>
      </head>
      <body className={inter.className}>
        <Providers>
          <div className="flex h-screen overflow-hidden bg-gradient-to-br from-purple-900 to-indigo-900">
            <Sidebar />
            <main className="flex-1 overflow-y-auto p-4 md:p-8">{children}</main>
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}



import './globals.css'