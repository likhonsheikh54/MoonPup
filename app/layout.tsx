import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/app/providers"
import { SidebarNav } from "@/components/sidebar-nav"
import { SidebarProvider } from "@/components/ui/sidebar"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MoonPup Engagement",
  description: "The 1st DeepSeek AI meme on-chain - Community engagement and analytics platform",
  manifest: "/manifest.json",
  icons: {
    apple: "/icon-512x512.png",
  },
    generator: 'v0.dev'
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <SidebarProvider defaultOpen={true}>
            <div className="flex min-h-[100dvh] overflow-hidden bg-background">
              <SidebarNav />
              <main className="flex-1 overflow-y-auto">{children}</main>
            </div>
          </SidebarProvider>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}



import './globals.css'