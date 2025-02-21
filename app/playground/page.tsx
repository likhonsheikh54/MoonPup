import type { Metadata } from "next"
import { Playground } from "@/components/playground"

export const metadata: Metadata = {
  title: "Playground | MoonPup",
  description: "Experiment with MoonPup features in the playground",
}

export default function PlaygroundPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold neon-text">Playground 🎮</h1>
      <Playground />
    </div>
  )
}

