import type { Metadata } from "next"
import TokenomicsClient from "./tokenomics-client"

export const metadata: Metadata = {
  title: "Tokenomics | MoonPup",
  description: "Explore MoonPup's tokenomics and economic model",
}

export default function TokenomicsPage() {
  return <TokenomicsClient />
}

