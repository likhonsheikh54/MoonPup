"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users } from "lucide-react"

export default function SpacePackClient() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Space Pack 👥</h1>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            MoonPup Community
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Connect with the MoonPup community in the Space Pack here.</p>
        </CardContent>
      </Card>
    </div>
  )
}

