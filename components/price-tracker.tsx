"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const generateMockData = () => {
  const data = []
  for (let i = 0; i < 7; i++) {
    data.push({
      date: new Date(Date.now() - i * 86400000).toLocaleDateString(),
      price: Math.random() * 0.0001 + 0.00001,
    })
  }
  return data.reverse()
}

export function PriceTracker() {
  const [priceData, setPriceData] = useState(generateMockData())

  useEffect(() => {
    const interval = setInterval(() => {
      setPriceData(generateMockData())
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle className="gradient-text">MoonPup Price</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={priceData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="price" stroke="#FF3B9A" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

