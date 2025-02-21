import { TokenMetrics } from "@/components/token-metrics"
import { CommunityFeed } from "@/components/community-feed"
import { MoonpupHero } from "@/components/moonpup-hero"
import { TelegramLogin } from "@/components/telegram-login"

export default function Home() {
  return (
    <div className="space-y-8">
      <MoonpupHero />
      <div className="grid gap-8 md:grid-cols-2">
        <TokenMetrics />
        <CommunityFeed />
      </div>
      <div className="text-center bg-white bg-opacity-10 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
          Join the Cosmic Pack
        </h2>
        <TelegramLogin />
      </div>
    </div>
  )
}

