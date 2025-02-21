"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Rocket, AlertCircle } from "lucide-react"

export function RocketFuelClient() {
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
      const response = await fetch("/api/boost", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, count }),
      })
      const data = await response.json()
      setMessage(data.message || "🚀 MoonPup Traffic Boost Started!")
    } catch (error) {
      setMessage("❌ Error: Failed to boost traffic")
    }
    setLoading(false)
  }

  return (
    <Card className="bg-opacity-20 bg-black backdrop-blur-lg text-white">
      <CardHeader>
        <CardTitle className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
          <Rocket className="inline-block mr-2" />
          Rocket Fuel
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input
            placeholder="Enter Reddit Post URL..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="bg-white bg-opacity-10"
          />
          <div>
            <label className="block text-sm font-medium mb-1">Boost Count: {count}</label>
            <Slider min={10} max={1000} step={10} value={[count]} onValueChange={(value) => setCount(value[0])} />
          </div>
          <Button
            onClick={sendBoost}
            disabled={loading}
            className="w-full bg-gradient-to-r from-pink-500 to-yellow-500"
          >
            {loading ? "Launching..." : "🚀 Launch Boost"}
          </Button>
          {message && (
            <Alert variant={message.includes("Error") ? "destructive" : "default"}>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>{message.includes("Error") ? "Mission Failure" : "Mission Success"}</AlertTitle>
              <AlertDescription>{message}</AlertDescription>
            </Alert>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

