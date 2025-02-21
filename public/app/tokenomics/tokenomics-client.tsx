"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Coins } from "lucide-react"

export default function TokenomicsClient() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Tokenomics 📈</h1>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Coins className="h-5 w-5" />
            MoonPup Economic Model
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Explore MoonPup's tokenomics and economic model here.</p>
        </CardContent>
      </Card>
    </div>
  )
}

