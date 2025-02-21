import type { Metadata } from "next"
import { MemeGenerator } from "@/components/meme-generator"
import { CreativeCanvas } from "@/components/creative-canvas"

export const metadata: Metadata = {
  title: "Meme Lab | MoonPup",
  description: "Create and share cosmic memes with MoonPup's Meme Lab",
}

export default function MemeLabPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Meme Lab 🎨</h1>
      <MemeGenerator />
      <CreativeCanvas />
    </div>
  )
}

