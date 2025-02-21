"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare } from "lucide-react"

export default function BarkBoxClient() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Bark Box 💬</h1>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Community Chat
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Communicate with the MoonPup community in the Bark Box here.</p>
        </CardContent>
      </Card>
    </div>
  )
}

