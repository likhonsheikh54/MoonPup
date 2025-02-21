"use client"

import { useState } from "react"
import { HfInference } from "@huggingface/inference"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const client = new HfInference("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")

export function MemeGeneratorClient() {
  const [prompt, setPrompt] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  const generateMeme = async () => {
    try {
      const response = await client.textToImage({
        model: "stabilityai/stable-diffusion-2",
        inputs: prompt,
      })
      setImageUrl(URL.createObjectURL(response))
    } catch (error) {
      console.error("Error generating meme:", error)
    }
  }

  return (
    <Card className="bg-opacity-20 bg-black backdrop-blur-lg text-white">
      <CardHeader>
        <CardTitle className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
          Cosmic Meme Generator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your cosmic meme..."
            className="bg-white bg-opacity-10"
          />
          <Button onClick={generateMeme} className="bg-gradient-to-r from-pink-500 to-yellow-500">
            Generate Meme
          </Button>
          {imageUrl && (
            <img src={imageUrl || "/placeholder.svg"} alt="Generated meme" className="mt-4 rounded-lg w-full" />
          )}
        </div>
      </CardContent>
    </Card>
  )
}

