import type { Metadata } from "next"
import PupStatsClient from "./pup-stats-client"

export const metadata: Metadata = {
  title: "Pup Stats | MoonPup",
  description: "View detailed statistics about MoonPup's performance",
}

export default function PupStatsPage() {
  return <PupStatsClient />
}

