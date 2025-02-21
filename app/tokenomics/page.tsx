import { Tokenomics } from "@/components/tokenomics"
import { TokenMetrics } from "@/components/token-metrics"
import { PriceTracker } from "@/components/price-tracker"

export default function TokenomicsPage() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Tokenomics 📈</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <PriceTracker />
        <TokenMetrics />
      </div>
      <Tokenomics />
    </div>
  )
}

