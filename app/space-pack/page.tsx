import { CommunityFeed } from "@/components/community-feed"
import { ReferralProgram } from "@/components/referral-program"

export default function SpacePackPage() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Space Pack 👥</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <CommunityFeed />
        <ReferralProgram />
      </div>
    </div>
  )
}

