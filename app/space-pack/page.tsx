import type { Metadata } from "next"
import { MissionControl } from "@/components/mission-control"
import { ReferralProgram } from "@/components/referral-program"

export const metadata: Metadata = {
  title: "Space Pack | MoonPup",
  description: "Join the MoonPup community in the Space Pack",
}

export default function SpacePackPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Space Pack 👥</h1>
      <MissionControl />
      <ReferralProgram />
    </div>
  )
}

