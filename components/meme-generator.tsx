"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { AIImageGenerator } from "@/components/ai-image-generator"

export function MemeGenerator() {
  const [topText, setTopText] = useState("")
  const [bottomText, setBottomText] = useState("")
  const [memePrompt, setMemePrompt] = useState("")

  const generateMeme = () => {
    setMemePrompt(`Generate a meme image with the following text:
Top: ${topText}
Bottom: ${bottomText}
Theme: Space dogs, cryptocurrency, moon`)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">🎨</span> Meme Generator
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input placeholder="Top Text" value={topText} onChange={(e) => setTopText(e.target.value)} />
          <Input placeholder="Bottom Text" value={bottomText} onChange={(e) => setBottomText(e.target.value)} />
          <Button onClick={generateMeme} className="w-full">
            Generate Meme
          </Button>
          <AIImageGenerator prompt={memePrompt} />
        </div>
      </CardContent>
    </Card>
  )
}

