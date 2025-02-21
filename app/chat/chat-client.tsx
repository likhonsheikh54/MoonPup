"use client"

import { useState } from "react"
import { CohereClient } from "cohere-ai"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const client = new CohereClient({ token: "brAX2r8rdDQaFxpx0u2PjWOXd8LKO8n9b1MNB0BQ" })

export function ChatClient() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([])

  const handleSend = async () => {
    if (!input.trim()) return

    setMessages((prev) => [...prev, { role: "user", content: input }])
    setInput("")

    try {
      const stream = await client.chatStream({
        message: input,
        model: "command-r-plus",
        preamble:
          "You are MoonPup 🐶🌕. You are trained to assist users by providing thorough and helpful responses to their queries about MoonPup and ethical Reddit engagement.",
      })

      let assistantMessage = ""
      for await (const chunk of stream) {
        if (chunk.eventType === "text-generation") {
          assistantMessage += chunk.text
        }
      }

      setMessages((prev) => [...prev, { role: "assistant", content: assistantMessage }])
    } catch (error) {
      console.error("Error in chat:", error)
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I encountered an error. Please try again." },
      ])
    }
  }

  return (
    <Card className="h-full flex flex-col bg-opacity-20 bg-black backdrop-blur-lg text-white">
      <CardHeader>
        <CardTitle className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
          Chat with MoonPup AI 🐶🌕
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg ${msg.role === "user" ? "bg-pink-500 bg-opacity-50" : "bg-yellow-500 bg-opacity-50"}`}
            >
              {msg.content}
            </div>
          ))}
        </div>
      </CardContent>
      <div className="p-4 border-t border-gray-700">
        <div className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask MoonPup..."
            className="bg-white bg-opacity-10"
          />
          <Button onClick={handleSend} className="bg-gradient-to-r from-pink-500 to-yellow-500">
            Send
          </Button>
        </div>
      </div>
    </Card>
  )
}

