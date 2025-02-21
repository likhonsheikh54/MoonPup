"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Home, BarChart2, MessageSquare, ImageIcon, Users, Rocket, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/token-metrics", label: "Token Metrics", icon: BarChart2 },
  { href: "/chat", label: "AI Chat", icon: MessageSquare },
  { href: "/meme-generator", label: "Meme Generator", icon: ImageIcon },
  { href: "/community", label: "Community", icon: Users },
  { href: "/rocket-fuel", label: "Rocket Fuel", icon: Rocket },
]

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-opacity-90 bg-black backdrop-blur-lg text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-200 ease-in-out md:relative md:translate-x-0`}
      >
        <div className="p-4">
          <Image
            src="https://storage.moonerhive.com/mooner-tokens/mhbl-10/ktn-8865/logo-v2gy9.webp"
            alt="MoonPup Logo"
            width={50}
            height={50}
            className="rounded-full mx-auto animate-pulse"
          />
          <h1 className="text-2xl font-bold text-center mt-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
            MoonPup
          </h1>
        </div>
        <nav className="mt-8">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center px-4 py-2 hover:bg-white hover:bg-opacity-10 transition-colors rounded-lg m-2"
                >
                  <item.icon className="mr-2" size={20} />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 left-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-4 w-4" />
      </Button>
    </>
  )
}

