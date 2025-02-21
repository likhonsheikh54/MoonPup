import type { Metadata } from "next"
import { AnalyticsOverview } from "@/components/analytics-overview"
import { EngagementMetrics } from "@/components/engagement-metrics"

export const metadata: Metadata = {
  title: "Paw Prints | MoonPup",
  description: "Track MoonPup's journey across the crypto universe",
}

export default function PawPrintsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Paw Prints 🐾</h1>
      <AnalyticsOverview />
      <EngagementMetrics />
    </div>
  )
}

