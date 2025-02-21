"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart2 } from "lucide-react"

export default function PawPrintsClient() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Paw Prints 🐾</h1>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart2 className="h-5 w-5" />
            MoonPup Journey Tracker
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Track MoonPup's journey across the crypto universe here.</p>
        </CardContent>
      </Card>
    </div>
  )
}

