import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function Tokenomics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="text-2xl">🚀</span> Tokenomics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Total Supply</span>
              <span className="text-sm font-medium">1,000,000,000 $MPUP</span>
            </div>
            <Progress value={100} className="h-2" />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Liquidity</span>
              <span className="text-sm font-medium">100% Burnt 🔥</span>
            </div>
            <Progress value={100} className="h-2" />
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Key Points:</h3>
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

