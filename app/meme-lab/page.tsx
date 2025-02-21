import { MemeGenerator } from "@/components/meme-generator"
import { CreativeCanvas } from "@/components/creative-canvas"

export default function MemeLabPage() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Meme Lab 🎨</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <MemeGenerator />
        <CreativeCanvas />
      </div>
    </div>
  )
}

