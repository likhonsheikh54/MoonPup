import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function Tokenomics() {
  return (
    <Card className="card">
      <CardHeader>
        <CardTitle className="text-3xl font-bold secondary-gradient text-gradient">Tokenomics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Total Supply</span>
              <span className="text-sm font-medium">1,000,000,000 $MPUP</span>
            </div>
            <Progress value={100} className="h-2 primary-gradient" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Liquidity</span>
              <span className="text-sm font-medium">100% Burnt 🔥</span>
            </div>
            <Progress value={100} className="h-2 primary-gradient" />
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-accent-yellow">Key Points:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>0% Tax</li>
              <li>Contract Revoked</li>
              <li>100% Community Owned</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

