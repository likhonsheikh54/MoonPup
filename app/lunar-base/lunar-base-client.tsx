"use client"

import { MoonpupHero } from "@/components/moonpup-hero"
import { PriceTracker } from "@/components/price-tracker"
import { TokenMetrics } from "@/components/token-metrics"
import { GeckoTerminal } from "@/components/gecko-terminal"
import { SliderSection } from "@/components/slider-section"

export default function LunarBaseClient() {
  return (
    <div className="container mx-auto p-4 space-y-6">
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

