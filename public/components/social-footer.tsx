import { Button } from "@/components/ui/button"
import { ExternalLink, MessageCircle, Rocket, Twitter } from "lucide-react"

export function SocialFooter() {
  const links = [
    {
      title: "Mission Control",
      href: "https://moonpup.lol/",
      icon: Rocket,
    },
    {
      title: "Communication Hub",
      href: "https://t.me/s/ogmpupsol",
      icon: MessageCircle,
    },
    {
      title: "Space Updates",
      href: "https://x.com/ogmpupsol?s=21",
      icon: Twitter,
    },
    {
      title: "Space Station",
      href: "https://discord.gg/moonpup",
      icon: ExternalLink,
    },
  ]

  return (
    <footer className="border-t mt-8">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-center gap-4">
          {links.map((link) => (
            <Button key={link.href} variant="ghost" asChild className="gap-2">
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <link.icon className="h-4 w-4" />
                {link.title}
              </a>
            </Button>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4">
          © 2024 MoonPup. All rights reserved. To the moon! 🚀
        </p>
      </div>
    </footer>
  )
}

