"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2, Moon, Dog } from "lucide-react"
import axios from "axios"

export function AITitleGenerator() {
  const [keyword, setKeyword] = useState("")
  const [generatedTitle, setGeneratedTitle] = useState("")
  const [loading, setLoading] = useState(false)

  const generateTitle = async () => {
    setLoading(true)
    try {
      const response = await axios.post("/api/generate-title", { keyword })
      setGeneratedTitle(response.data.title)
    } catch (error) {
      console.error("Failed to generate title:", error)
      setGeneratedTitle("Failed to generate title. Please try again.")
    }
    setLoading(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Moon className="h-5 w-5" />
          <Dog className="h-5 w-5" />
          MoonPup AI Title Generator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          placeholder="Enter a keyword for your MoonPup post..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Button onClick={generateTitle} disabled={loading || !keyword}>
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Generate Cosmic Title
        </Button>
        {generatedTitle && (
          <div className="p-4 bg-muted rounded-md">
            <p className="font-medium">{generatedTitle}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

