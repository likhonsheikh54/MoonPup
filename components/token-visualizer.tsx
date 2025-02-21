"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function TokenVisualizer() {
  const [tokenSupply, setTokenSupply] = useState(1000000000)
  const [circulatingSupply, setCirculatingSupply] = useState(750000000)

  const percentage = (circulatingSupply / tokenSupply) * 100

  return (
    <Card className="w-full max-w-md mx-auto glass">
      <CardContent className="space-y-4 pt-6">
        <div className="space-y-2">
          <Label htmlFor="totalSupply">Total Supply</Label>
          <Input
            id="totalSupply"
            type="number"
            value={tokenSupply}
            onChange={(e) => setTokenSupply(Number(e.target.value))}
            className="bg-background/50 border-primary/50"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="circulatingSupply">Circulating Supply</Label>
          <Input
            id="circulatingSupply"
            type="number"
            value={circulatingSupply}
            onChange={(e) => setCirculatingSupply(Number(e.target.value))}
            className="bg-background/50 border-primary/50"
          />
        </div>
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary bg-primary/20">
                Circulating Supply
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-primary">{percentage.toFixed(2)}%</span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-primary/20">
            <div
              style={{ width: `${percentage}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
            ></div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

