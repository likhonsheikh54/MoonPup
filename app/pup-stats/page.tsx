import type { Metadata } from "next"
import { TokenMetrics } from "@/components/token-metrics"
import { ContentCalendar } from "@/components/content-calendar"

export const metadata: Metadata = {
  title: "Pup Stats | MoonPup",
  description: "View detailed statistics about MoonPup's performance",
}

export default function PupStatsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Pup Stats 📊</h1>
      <TokenMetrics />
      <ContentCalendar />
    </div>
  )
}

