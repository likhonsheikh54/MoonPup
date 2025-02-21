import { MoonpupHero } from "@/components/moonpup-hero"
import { PriceTracker } from "@/components/price-tracker"
import { TokenMetrics } from "@/components/token-metrics"
import { Tokenomics } from "@/components/tokenomics"
import { MemeGenerator } from "@/components/meme-generator"
import { CommunityFeed } from "@/components/community-feed"
import { SocialFooter } from "@/components/social-footer"
import { GeckoTerminal } from "@/components/gecko-terminal"
import { SliderSection } from "@/components/slider-section"

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background">
      <div className="container mx-auto p-4 lg:p-8 space-y-8">
        <MoonpupHero />

        <SliderSection title="Price & Metrics">
          <div className="grid gap-6 md:grid-cols-2">
            <PriceTracker />
            <TokenMetrics />
          </div>
        </SliderSection>

        <SliderSection title="Market Data">
          <GeckoTerminal />
        </SliderSection>

        <SliderSection title="Tokenomics & Memes">
          <div className="grid gap-6 md:grid-cols-2">
            <Tokenomics />
            <MemeGenerator />
          </div>
        </SliderSection>

        <SliderSection title="Community">
          <CommunityFeed />
        </SliderSection>
      </div>
      <SocialFooter />
    </div>
  )
}

