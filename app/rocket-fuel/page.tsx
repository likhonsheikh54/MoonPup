import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Rocket, Zap } from "lucide-react"

export default function RocketFuelPage() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Rocket Fuel 🚀</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Buy $MPUP</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button className="w-full" size="lg">
                <Rocket className="mr-2 h-4 w-4" />
                Buy on Jupiter
              </Button>
              <Button className="w-full" size="lg">
                <Zap className="mr-2 h-4 w-4" />
                Buy on Raydium
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

