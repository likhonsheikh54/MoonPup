import type { Metadata } from "next"
import { MoonpupHero } from "@/components/moonpup-hero"
import { PriceTracker } from "@/components/price-tracker"
import { TokenMetrics } from "@/components/token-metrics"
import { MoonPupChat } from "@/components/moonpup-chat"
import { SEO } from "@/components/seo"
import { SliderSection } from "@/components/slider-section"
import { Tokenomics } from "@/components/tokenomics"
import { MemeGenerator } from "@/components/meme-generator"
import { CommunityFeed } from "@/components/community-feed"
import { GeckoTerminal } from "@/components/gecko-terminal"

export const metadata: Metadata = {
  title: "Lunar Base | MoonPup",
  description: "Welcome to the Lunar Base of MoonPup - your gateway to cosmic crypto adventures!",
}

export default function LunarBasePage() {
  return (
    <>
      <SEO
        title="Lunar Base | MoonPup"
        description="Welcome to the Lunar Base of MoonPup - your gateway to cosmic crypto adventures!"
        canonicalUrl="https://moonpup.com/"
      />
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
        <SliderSection title="Tokenomics & Memes" defaultOpen={true}>
          <div className="grid gap-6 md:grid-cols-2">
            <Tokenomics />
            <MemeGenerator />
          </div>
        </SliderSection>
        <SliderSection title="Community" defaultOpen={true}>
          <CommunityFeed />
        </SliderSection>
        <MoonPupChat />
      </div>
    </>
  )
}

