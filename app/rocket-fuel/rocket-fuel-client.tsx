"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap } from "lucide-react"

export default function RocketFuelClient() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Rocket Fuel 🚀</h1>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Boost Your Posts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Use Rocket Fuel to boost your MoonPup posts here.</p>
        </CardContent>
      </Card>
    </div>
  )
}

