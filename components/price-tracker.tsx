"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { ArrowUp, ArrowDown, DollarSign } from "lucide-react"

// Generate mock price data
const generateMockPriceData = (dataPoints = 24) => {
  const data = []
  const basePrice = 0.00001234
  const now = Date.now()

  for (let i = 0; i < dataPoints; i++) {
    data.push({
      timestamp: now - (dataPoints - 1 - i) * 3600000,
      price: basePrice * (1 + Math.sin(i / 4) * 0.1 + Math.random() * 0.05),
    })
  }
  return data
}

export function PriceTracker() {
  const [priceData, setPriceData] = useState(generateMockPriceData())
  const [currentPrice, setCurrentPrice] = useState(0.00001234)
  const [priceChange, setPriceChange] = useState(5.67)

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = generateMockPriceData()
      setPriceData(newData)
      setCurrentPrice(newData[newData.length - 1].price)
      setPriceChange(((newData[newData.length - 1].price - newData[0].price) / newData[0].price) * 100)
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            MoonPup Price
          </CardTitle>
          <Badge variant={priceChange >= 0 ? "default" : "destructive"}>
            {priceChange >= 0 ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
            {Math.abs(priceChange).toFixed(2)}%
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold mb-4">${currentPrice.toFixed(8)}</div>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={priceData}>
              <XAxis dataKey="timestamp" tickFormatter={(timestamp) => new Date(timestamp).toLocaleTimeString()} />
              <YAxis tickFormatter={(value) => value.toFixed(8)} domain={["auto", "auto"]} />
              <Tooltip
                labelFormatter={(timestamp) => new Date(timestamp).toLocaleString()}
                formatter={(value: number) => [`$${value.toFixed(8)}`, "Price"]}
              />
              <Line type="monotone" dataKey="price" stroke="var(--primary)" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

