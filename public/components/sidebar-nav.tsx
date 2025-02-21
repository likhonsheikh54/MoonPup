"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart2, MessageSquare, Home, Brain, Settings, Menu, Dog, Zap, Users, Coins } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function SidebarNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const routes = [
    { title: "Lunar Base", icon: Home, href: "/" },
    { title: "Pup Stats", icon: Dog, href: "/pup-stats" },
    { title: "Meme Lab", icon: Brain, href: "/meme-lab" },
    { title: "Rocket Fuel", icon: Zap, href: "/rocket-fuel" },
    { title: "Paw Prints", icon: BarChart2, href: "/paw-prints" },
    { title: "Space Pack", icon: Users, href: "/space-pack" },
    { title: "Bark Box", icon: MessageSquare, href: "/bark-box" },
    { title: "Tokenomics", icon: Coins, href: "/tokenomics" },
  ]

  return (
    <nav
      className={`bg-background border-r p-4 transition-all duration-300 ${isOpen ? "w-64" : "w-20"} ${isMobile ? "absolute z-10 h-full" : ""}`}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Image
            src="https://storage.moonerhive.com/mooner-tokens/mhbl-10/ktn-8865/logo-v2gy9.webp"
            alt="MoonPup Logo"
            width={40}
            height={40}
          />
          {isOpen && <h2 className="text-lg font-semibold">MoonPup 🐶🌕</h2>}
        </div>
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <Menu className="h-4 w-4" />
        </Button>
      </div>
      <ul className="space-y-2">
        {routes.map((route) => (
          <li key={route.href}>
            <Link
              href={route.href}
              className={`flex items-center gap-3 p-2 rounded-md hover:bg-accent ${pathname === route.href ? "bg-accent" : ""}`}
            >
              <route.icon className="h-5 w-5" />
              {isOpen && <span>{route.title}</span>}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex items-center justify-between">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/settings">
            <Settings className="h-4 w-4" />
          </Link>
        </Button>
        <ThemeToggle />
      </div>
    </nav>
  )
}

