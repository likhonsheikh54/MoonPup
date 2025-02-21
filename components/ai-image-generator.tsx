"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ImageIcon, Loader2 } from "lucide-react"

export function AIImageGenerator() {
  const [prompt, setPrompt] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const generateImage = async () => {
    setLoading(true)
    setError("")
    try {
      const response = await fetch("/api/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      })

      if (!response.ok) {
        throw new Error("Failed to generate image")
      }

      const data = await response.json()
      setImageUrl(data.imageUrl)
    } catch (error) {
      console.error("Failed to generate image:", error)
      setError("Failed to generate image. Please try again.")
    }
    setLoading(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ImageIcon className="h-5 w-5" />
          AI Image Generator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input placeholder="Enter image description" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
          <Button className="w-full" onClick={generateImage} disabled={loading}>
            {loading ? <Loader2 className="animate-spin mr-2" /> : <ImageIcon className="mr-2" />}
            {loading ? "Generating..." : "Generate Image"}
          </Button>
          {error && <p className="text-red-500">{error}</p>}
          {imageUrl && (
            <div className="mt-4">
              <img src={imageUrl || "/placeholder.svg"} alt="Generated content" className="w-full rounded-lg" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

