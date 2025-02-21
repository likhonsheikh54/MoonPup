"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Rocket, Twitter, Send, AlertCircle, Moon, Dog } from "lucide-react"
import axios from "axios"
import { AITitleGenerator } from "@/components/ai-title-generator"

export default function RedditBoosterClient() {
  const [url, setUrl] = useState("")
  const [count, setCount] = useState(100)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const sendBoost = async () => {
    if (!url.includes("reddit.com")) {
      setMessage("Please enter a valid Reddit post URL.")
      return
    }

    setLoading(true)
    setMessage("")
    try {
      const response = await axios.post("/api/boost", { url, count })
      setMessage(response.data.message || "🚀 MoonPup Traffic Boost Started!")
    } catch (error) {
      setMessage(
        "❌ Error: " +
          (axios.isAxiosError(error) && error.response?.data?.error
            ? error.response.data.error
            : "Failed to boost traffic"),
      )
    }
    setLoading(false)
  }

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=🐶🌕 Check out this cosmic MoonPup post! ${url}`, "_blank")
  }

  const shareOnTelegram = () => {
    window.open(`https://t.me/share/url?url=${url}&text=🚀 MoonPup is taking off! Check this out:`, "_blank")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center flex items-center justify-center gap-2">
            <Moon className="h-8 w-8" />
            <Dog className="h-8 w-8" />
            MoonPup Reddit Booster
          </CardTitle>
          <CardDescription className="text-center">
            Boost engagement and traffic for your Reddit post ethically using MoonPup AI and cosmic proxies.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="reddit-url" className="text-sm font-medium">
              Reddit Post URL
            </label>
            <Input
              id="reddit-url"
              placeholder="Enter MoonPup Reddit Post URL..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="boost-count" className="text-sm font-medium">
              Cosmic Boost Count: {count}
            </label>
            <Slider
              id="boost-count"
              min={10}
              max={1000}
              step={10}
              value={[count]}
              onValueChange={(value) => setCount(value[0])}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button onClick={sendBoost} disabled={loading} className="flex-1">
              <Rocket className="mr-2 h-4 w-4" />
              {loading ? "Launching..." : "Launch Boost"}
            </Button>
            <Button onClick={shareOnTwitter} variant="outline" className="flex-1">
              <Twitter className="mr-2 h-4 w-4" />
              Share on Twitter
            </Button>
            <Button onClick={shareOnTelegram} variant="outline" className="flex-1">
              <Send className="mr-2 h-4 w-4" />
              Share on Telegram
            </Button>
          </div>
          {message && (
            <Alert variant={message.includes("Error") ? "destructive" : "default"}>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>{message.includes("Error") ? "Mission Failure" : "Mission Success"}</AlertTitle>
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
      <div className="mt-8 max-w-2xl mx-auto">
        <AITitleGenerator />
      </div>
      <footer className="mt-8 text-center text-sm text-muted-foreground">
        Powered by{" "}
        <a href="https://t.me/ogmpupsol" target="_blank" rel="noopener noreferrer" className="font-medium underline">
          OGMPUPSOL
        </a>{" "}
        |{" "}
        <a
          href="https://linktr.ee/moonpupsol"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline"
        >
          Linktree
        </a>{" "}
        |{" "}
        <a href="https://x.com/ogmpupsol" target="_blank" rel="noopener noreferrer" className="font-medium underline">
          Twitter
        </a>{" "}
        |{" "}
        <a href="https://ogmpupsol.com" target="_blank" rel="noopener noreferrer" className="font-medium underline">
          Website
        </a>
      </footer>
    </div>
  )
}

