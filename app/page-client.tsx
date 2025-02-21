"use client"

import Image from "next/image"
import { MoonpupHero } from "@/components/moonpup-hero"
import { PriceTracker } from "@/components/price-tracker"
import { TokenMetrics } from "@/components/token-metrics"
import { Tokenomics } from "@/components/tokenomics"
import { MemeGenerator } from "@/components/meme-generator"
import { CommunityFeed } from "@/components/community-feed"
import { SocialFooter } from "@/components/social-footer"
import { GeckoTerminal } from "@/components/gecko-terminal"
import { SliderSection } from "@/components/slider-section"

export default function HomeClient() {
  return (
    <div className="min-h-[100dvh] bg-background">
      <div className="container mx-auto p-4 lg:p-8 space-y-8">
        <div className="flex items-center justify-between mb-8">
          <Image
            src="https://storage.moonerhive.com/mooner-tokens/mhbl-10/ktn-8865/logo-v2gy9.webp"
            alt="MoonPup Logo"
            width={100}
            height={100}
            className="rounded-full"
          />
          <h1 className="text-4xl font-bold">MoonPup Dashboard</h1>
        </div>

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
      </div>
      <SocialFooter />
    </div>
  )
}

