"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export function AIChat() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSend = async () => {
    if (!input.trim()) return

    setIsLoading(true)
    setError(null)
    setMessages((prev) => [...prev, { role: "user", content: input }])

    try {
      console.log("Sending request to AI chat API...")
      const response = await fetch("https://api.moonpopedit.vercel.app/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      })

      console.log("Received response:", response)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log("Parsed response data:", data)

      if (data.error) {
        throw new Error(data.error)
      }

      setMessages((prev) => [...prev, { role: "assistant", content: data.message }])
    } catch (error) {
      console.error("Error in AI chat:", error)
      let errorMessage = "An unexpected error occurred. Please try again later."

      if (error instanceof Error) {
        errorMessage = error.message
      }

      setError(errorMessage)
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I'm having trouble responding right now. Please try again later." },
      ])
    } finally {
      setIsLoading(false)
      setInput("")
    }
  }

  return (
    <Card className="card">
      <CardHeader>
        <CardTitle className="text-3xl font-bold secondary-gradient text-gradient">AI Chat</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 overflow-y-auto mb-4 space-y-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded ${
                msg.role === "user" ? "bg-brand-pink text-white" : "bg-accent-yellow text-black"
              }`}
            >
              {msg.content}
            </div>
          ))}
        </div>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <div className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask MoonPup AI..."
            onKeyPress={(e) => e.key === "Enter" && !isLoading && handleSend()}
          />
          <Button onClick={handleSend} disabled={isLoading}>
            {isLoading ? <Loader2 className="animate-spin" /> : "Send"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

