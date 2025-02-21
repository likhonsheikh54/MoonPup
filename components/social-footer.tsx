import { Button } from "@/components/ui/button"
import { ExternalLink, MessageCircle, Rocket, Twitter } from "lucide-react"

export function SocialFooter() {
  const links = [
    { title: "Mission Control", href: "https://moonpup.lol/", icon: Rocket },
    { title: "Communication Hub", href: "https://t.me/s/ogmpupsol", icon: MessageCircle },
    { title: "Space Updates", href: "https://x.com/ogmpupsol?s=21", icon: Twitter },
    { title: "Space Station", href: "https://discord.gg/moonpup", icon: ExternalLink },
  ]

  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {links.map((link) => (
            <Button key={link.href} variant="ghost" asChild className="hover:text-accent-yellow">
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <link.icon className="h-4 w-4" />
                {link.title}
              </a>
            </Button>
          ))}
        </div>
        <p className="text-center text-sm text-white/60 mt-8">© 2024 MoonPup. All rights reserved. To the moon! 🚀</p>
      </div>
    </footer>
  )
}

