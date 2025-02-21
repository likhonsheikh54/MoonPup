"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart2, MessageSquare, Settings, Menu, Users, Coins, ImageIcon, Gamepad2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion, AnimatePresence } from "framer-motion"

export function SidebarNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      setIsOpen(!mobile)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const routes = [
    { title: "Dashboard", icon: BarChart2, href: "/" },
    { title: "AI Chat", icon: MessageSquare, href: "/ai-chat" },
    { title: "Meme Generator", icon: ImageIcon, href: "/meme-generator" },
    { title: "Tokenomics", icon: Coins, href: "/tokenomics" },
    { title: "Community", icon: Users, href: "/community" },
    { title: "Playground", icon: Gamepad2, href: "/playground" },
    { title: "Settings", icon: Settings, href: "/settings" },
  ]

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={`bg-card/80 backdrop-blur-md border-r border-border p-4 transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      } ${isMobile ? "fixed z-50 h-full" : ""}`}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Image
            src="https://storage.moonerhive.com/mooner-tokens/mhbl-10/ktn-8865/logo-v2gy9.webp"
            alt="MoonPup Logo"
            width={40}
            height={40}
            className="rounded-full animate-float"
          />
          <AnimatePresence>
            {isOpen && (
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-lg font-semibold gradient-text"
              >
                MoonPup
              </motion.h2>
            )}
          </AnimatePresence>
        </div>
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="hover:bg-primary/20">
          <Menu className="h-4 w-4" />
        </Button>
      </div>
      <ul className="space-y-2">
        {routes.map((route) => (
          <motion.li key={route.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={route.href}
              className={`flex items-center gap-3 p-2 rounded-md hover:bg-primary/20 transition-colors ${
                pathname === route.href ? "bg-primary/20 text-primary" : ""
              }`}
            >
              <route.icon className="h-5 w-5" />
              <AnimatePresence>
                {isOpen && (
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    {route.title}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </motion.li>
        ))}
      </ul>
      <div className="mt-6 flex items-center justify-between">
        <ThemeToggle />
      </div>
    </motion.nav>
  )
}

