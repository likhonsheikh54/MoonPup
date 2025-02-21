import { AnalyticsOverview } from "@/components/analytics-overview"
import { TokenMetrics } from "@/components/token-metrics"

export default function PawPrintsPage() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Paw Prints 🐾</h1>
      <TokenMetrics />
      <AnalyticsOverview />
    </div>
  )
}

