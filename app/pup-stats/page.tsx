import { TokenMetrics } from "@/components/token-metrics"
import { Tokenomics } from "@/components/tokenomics"

export default function PupStatsPage() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Pup Stats 📊</h1>
      <TokenMetrics />
      <Tokenomics />
    </div>
  )
}

