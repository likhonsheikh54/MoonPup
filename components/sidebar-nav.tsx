"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart2, MessageSquare, Home, Brain, Settings, Menu, Dog, Zap, Users, Coins } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"

export function SidebarNav() {
  const pathname = usePathname()

  const routes = [
    {
      title: "Lunar Base",
      icon: Home,
      href: "/",
    },
    {
      title: "Pup Stats",
      icon: Dog,
      href: "/pup-stats",
    },
    {
      title: "Meme Lab",
      icon: Brain,
      href: "/meme-lab",
    },
    {
      title: "Rocket Fuel",
      icon: Zap,
      href: "/rocket-fuel",
    },
    {
      title: "Paw Prints",
      icon: BarChart2,
      href: "/analytics",
    },
    {
      title: "Space Pack",
      icon: Users,
      href: "/community",
    },
    {
      title: "Bark Box",
      icon: MessageSquare,
      href: "/messages",
    },
    {
      title: "Tokenomics",
      icon: Coins,
      href: "/tokenomics",
    },
  ]

  return (
    <Sidebar>
      <SidebarHeader className="border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">MoonPup 🐶🌕</h2>
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {routes.map((route) => (
            <SidebarMenuItem key={route.href}>
              <SidebarMenuButton asChild isActive={pathname === route.href} tooltip={route.title}>
                <Link href={route.href} className="flex items-center gap-3">
                  <route.icon className="h-4 w-4" />
                  <span>{route.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t p-4">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/settings">
              <Settings className="h-4 w-4" />
            </Link>
          </Button>
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

