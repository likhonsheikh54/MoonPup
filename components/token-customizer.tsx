"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export function TokenCustomizer() {
  const [tokenName, setTokenName] = useState("MoonPup")
  const [tokenSymbol, setTokenSymbol] = useState("MPUP")
  const [tokenSupply, setTokenSupply] = useState("1000000000")

  const handleSave = () => {
    // Here you would typically save these settings to a backend or local storage
    console.log("Saving token settings:", { tokenName, tokenSymbol, tokenSupply })
    // You could also show a toast notification here to confirm the save
  }

  return (
    <Card className="w-full max-w-md mx-auto glass">
      <CardHeader>
        <CardTitle className="text-center neon-text">Customize Your Token</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="tokenName">Token Name</Label>
          <Input
            id="tokenName"
            value={tokenName}
            onChange={(e) => setTokenName(e.target.value)}
            className="bg-background/50 border-primary/50"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="tokenSymbol">Token Symbol</Label>
          <Input
            id="tokenSymbol"
            value={tokenSymbol}
            onChange={(e) => setTokenSymbol(e.target.value)}
            className="bg-background/50 border-primary/50"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="tokenSupply">Total Supply</Label>
          <Input
            id="tokenSupply"
            type="number"
            value={tokenSupply}
            onChange={(e) => setTokenSupply(e.target.value)}
            className="bg-background/50 border-primary/50"
          />
        </div>
        <Button onClick={handleSave} className="w-full bg-primary hover:bg-primary/80">
          Save Settings
        </Button>
      </CardContent>
    </Card>
  )
}

