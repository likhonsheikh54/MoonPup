"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CohereClient } from "cohere-ai"

const client = new CohereClient({ token: "brAX2r8rdDQaFxpx0u2PjWOXd8LKO8n9b1MNB0BQ" })

export function MoonPupChat() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([])

  const sendMessage = async () => {
    if (!input.trim()) return

    setMessages([...messages, { role: "user", content: input }])
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

      setMessages((prevMessages) => [...prevMessages, { role: "assistant", content: assistantMessage }])
    } catch (error) {
      console.error("Error in chat:", error)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Chat with MoonPup 🐶🌕</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="h-[300px] overflow-y-auto space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-md ${msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
              >
                {msg.content}
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask MoonPup..." />
            <Button onClick={sendMessage}>Send</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

