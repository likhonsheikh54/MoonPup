"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

export default function BarkBoxPage() {
  const [message, setMessage] = useState("")

  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Bark Box 💬</h1>
      <Card>
        <CardHeader>
          <CardTitle>Community Chat</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="h-[400px] border rounded-lg p-4 overflow-y-auto">{/* Chat messages will go here */}</div>
            <div className="flex gap-2">
              <Input placeholder="Type your message..." value={message} onChange={(e) => setMessage(e.target.value)} />
              <Button>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

