import type { Metadata } from "next"
import { MoonpupHero } from "@/components/moonpup-hero"
import { PriceTracker } from "@/components/price-tracker"
import { TokenMetrics } from "@/components/token-metrics"
import { GeckoTerminal } from "@/components/gecko-terminal"
import { SliderSection } from "@/components/slider-section"

export const metadata: Metadata = {
  title: "Lunar Base | MoonPup",
  description: "Explore the Lunar Base of MoonPup - your gateway to cosmic crypto adventures!",
}

export default function LunarBasePage() {
  return (
    <div className="space-y-6">
      <MoonpupHero />
      <SliderSection title="Price & Metrics" defaultOpen={true}>
        <div className="grid gap-6 md:grid-cols-2">
          <PriceTracker />
          <TokenMetrics />
        </div>
      </SliderSection>
      <SliderSection title="Market Data" defaultOpen={true}>
        <GeckoTerminal />
      </SliderSection>
    </div>
  )
}

