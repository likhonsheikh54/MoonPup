import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Satellite, Bot, Users, BracketsIcon as Bridge, Brain } from "lucide-react"

export function MissionControl() {
  const currentMissions = [
    {
      title: "AI Lunar Navigation",
      description: "Real-time price alerts and tracking",
      icon: Satellite,
      status: "active",
    },
    {
      title: "Interstellar AI Communication",
      description: "Telegram & X bot integration",
      icon: Bot,
      status: "active",
    },
    {
      title: "Diamond Paw Control Center",
      description: "Holder dashboard and analytics",
      icon: Users,
      status: "active",
    },
    {
      title: "Space Station Development",
      description: "Community tools and engagement",
      icon: Rocket,
      status: "active",
    },
  ]

  const futureMissions = [
    {
      title: "Orbital Tracking Systems",
      description: "Advanced market analysis",
      icon: Satellite,
      status: "planned",
    },
    {
      title: "Space Governance",
      description: "Decentralized community voting",
      icon: Users,
      status: "planned",
    },
    {
      title: "Cross-chain Bridges",
      description: "Multi-chain integration",
      icon: Bridge,
      status: "planned",
    },
    {
      title: "Enhanced AI Tools",
      description: "Advanced AI exploration features",
      icon: Brain,
      status: "planned",
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Rocket className="h-5 w-5" />
            Current Missions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {currentMissions.map((mission) => (
              <div key={mission.title} className="flex items-start space-x-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <mission.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">{mission.title}</h4>
                    <Badge variant="default">Active</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{mission.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Satellite className="h-5 w-5" />
            Future Missions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {futureMissions.map((mission) => (
              <div key={mission.title} className="flex items-start space-x-4">
                <div className="rounded-full bg-secondary/10 p-2">
                  <mission.icon className="h-4 w-4 text-secondary" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium">{mission.title}</h4>
                    <Badge variant="secondary">Planned</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{mission.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

