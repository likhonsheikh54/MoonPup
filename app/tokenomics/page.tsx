import type { Metadata } from "next"
import { Tokenomics } from "@/components/tokenomics"
import { GeckoTerminal } from "@/components/gecko-terminal"

export const metadata: Metadata = {
  title: "Tokenomics | MoonPup",
  description: "Explore MoonPup's tokenomics and economic model",
}

export default function TokenomicsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Tokenomics 📈</h1>
      <Tokenomics />
      <GeckoTerminal />
    </div>
  )
}

