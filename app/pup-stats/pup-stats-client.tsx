"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dog } from "lucide-react"

export default function PupStatsClient() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Pup Stats 📊</h1>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Dog className="h-5 w-5" />
            MoonPup Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Detailed MoonPup statistics will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  )
}

