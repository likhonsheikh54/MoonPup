"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { HfInference } from "@huggingface/inference"

const client = new HfInference("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")

export function MemeGenerator() {
  const [prompt, setPrompt] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [loading, setLoading] = useState(false)

  const generateMeme = async () => {
    setLoading(true)
    try {
      const response = await client.textToImage({
        model: "black-forest-labs/FLUX.1-dev",
        inputs: `MoonPup meme: ${prompt}`,
        parameters: { num_inference_steps: 50, guidance_scale: 7.5 },
        provider: "fal-ai",
      })
      const url = URL.createObjectURL(response)
      setImageUrl(url)
    } catch (error) {
      console.error("Failed to generate meme:", error)
    }
    setLoading(false)
  }

  return (
    <Card className="w-full max-w-md mx-auto glass">
      <CardHeader>
        <CardTitle className="text-center neon-text">Cosmic Meme Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          placeholder="Enter your meme idea..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="bg-background/50 border-primary/50"
        />
        <Button onClick={generateMeme} disabled={loading} className="w-full bg-primary hover:bg-primary/80">
          {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Generate Cosmic Meme"}
        </Button>
        {imageUrl && (
          <div className="mt-4">
            <img
              src={imageUrl || "/placeholder.svg"}
              alt="Generated meme"
              className="w-full rounded-lg shadow-lg animate-float"
            />
          </div>
        )}
      </CardContent>
    </Card>
  )
}

