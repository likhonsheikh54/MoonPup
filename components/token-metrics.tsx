"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Coins } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

// Mock data
const MOCK_METRICS = {
  totalSupply: 1_000_000_000,
  circulatingSupply: 950_000_000,
  holders: 15000,
  transactions24h: 2450,
  marketCap: 12000000,
}

export function TokenMetrics() {
  const [metrics, setMetrics] = useState(MOCK_METRICS)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    const fetchMetrics = async () => {
      setLoading(true)
      // In a real scenario, you'd fetch data from an API here
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate network delay
      setMetrics(MOCK_METRICS)
      setLoading(false)
    }

    fetchMetrics()
  }, [])

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Supply</CardTitle>
          <Coins className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          {loading ? (
            <Skeleton className="h-8 w-[100px]" />
          ) : (
            <>
              <div className="text-2xl font-bold">{metrics.totalSupply.toLocaleString()}</div>
              <Progress value={(metrics.circulatingSupply / metrics.totalSupply) * 100} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">
                {((metrics.circulatingSupply / metrics.totalSupply) * 100).toFixed(2)}% Circulating
              </p>
            </>
          )}
        </CardContent>
      </Card>

      {/* Repeat similar structure for Holders, 24h Transactions, and Market Cap */}
    </div>
  )
}

