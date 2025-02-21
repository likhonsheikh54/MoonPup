import type { Metadata } from "next"
import { MessageCenter } from "@/components/message-center"
import { CommunityFeed } from "@/components/community-feed"

export const metadata: Metadata = {
  title: "Bark Box | MoonPup",
  description: "Communicate with the MoonPup community in the Bark Box",
}

export default function BarkBoxPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Bark Box 💬</h1>
      <MessageCenter />
      <CommunityFeed />
    </div>
  )
}

