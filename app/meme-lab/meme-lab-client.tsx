"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain } from "lucide-react"

export default function MemeLabClient() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Meme Lab 🎨</h1>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            Cosmic Meme Generator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Create and share cosmic MoonPup memes here.</p>
        </CardContent>
      </Card>
    </div>
  )
}

