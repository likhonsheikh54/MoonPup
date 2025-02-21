"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface TokenMetrics {
  price: number
  marketCap: number
  volume24h: number
  circulatingSupply: number
  totalSupply: number
}

export function TokenMetrics() {
  const [metrics, setMetrics] = useState<TokenMetrics | null>(null)

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/moonpup")
      .then((response) => response.json())
      .then((data) => {
        setMetrics({
          price: data.market_data.current_price.usd,
          marketCap: data.market_data.market_cap.usd,
          volume24h: data.market_data.total_volume.usd,
          circulatingSupply: data.market_data.circulating_supply,
          totalSupply: data.market_data.total_supply,
        })
      })
      .catch((error) => console.error("Error fetching token metrics:", error))
  }, [])

  if (!metrics) return <div>Loading token metrics...</div>

  return (
    <Card className="bg-opacity-20 bg-black backdrop-blur-lg text-white">
      <CardHeader>
        <CardTitle className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
          Token Metrics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div>
            <p className="text-sm font-medium text-gray-400">Price</p>
            <p className="text-2xl font-bold">${metrics.price.toFixed(6)}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-400">Market Cap</p>
            <p className="text-2xl font-bold">${metrics.marketCap.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-400">24h Volume</p>
            <p className="text-2xl font-bold">${metrics.volume24h.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-400">Circulating Supply</p>
            <Progress value={(metrics.circulatingSupply / metrics.totalSupply) * 100} className="mt-2" />
            <p className="text-sm mt-1">
              {metrics.circulatingSupply.toLocaleString()} / {metrics.totalSupply.toLocaleString()}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

