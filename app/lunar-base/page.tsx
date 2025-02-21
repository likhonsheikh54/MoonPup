import { MoonpupHero } from "@/components/moonpup-hero"
import { PriceTracker } from "@/components/price-tracker"
import { TokenMetrics } from "@/components/token-metrics"
import { GeckoTerminal } from "@/components/gecko-terminal"

export default function LunarBasePage() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <MoonpupHero />
      <div className="grid gap-6 md:grid-cols-2">
        <PriceTracker />
        <TokenMetrics />
      </div>
      <GeckoTerminal />
    </div>
  )
}

