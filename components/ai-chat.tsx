"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function AIChat() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedModel, setSelectedModel] = useState("huggingface")

  const handleSend = async () => {
    if (!input.trim()) return

    setIsLoading(true)
    setMessages((prev) => [...prev, { role: "user", content: input }])
    setInput("")

    try {
      let response
      if (selectedModel === "huggingface") {
        response = await fetch("/api/ai-chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: input }),
        })
      } else {
        response = await fetch("/api/sambanova-chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: input, model: selectedModel }),
        })
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setMessages((prev) => [...prev, { role: "assistant", content: data.message }])
    } catch (error) {
      console.error("Error in AI chat:", error)
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I encountered an error. Please try again." },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Chat with MoonPup AI 🐶🌕</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] overflow-y-auto space-y-2 mb-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-md ${
                msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
              }`}
            >
              {msg.content}
            </div>
          ))}
        </div>
        <div className="flex gap-2 mb-2">
          <Select onValueChange={setSelectedModel} defaultValue={selectedModel}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="huggingface">Hugging Face</SelectItem>
              <SelectItem value="DeepSeek-R1">DeepSeek-R1</SelectItem>
              <SelectItem value="DeepSeek-R1-Distill-Llama-70B">DeepSeek-R1-Distill-Llama-70B</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-2">
          <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask MoonPup..." />
          <Button onClick={handleSend} disabled={isLoading}>
            {isLoading ? <Loader2 className="animate-spin" /> : "Send"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

