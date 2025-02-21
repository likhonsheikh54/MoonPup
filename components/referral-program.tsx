"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Share2 } from "lucide-react"

export function ReferralProgram() {
  const [referralCode, setReferralCode] = useState("MOONPUP123")

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode)
    // TODO: Show a toast notification
    console.log("Referral code copied!")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Share2 className="h-5 w-5" />
          Referral Program
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm">Invite friends and earn rewards! Share your unique referral code:</p>
          <div className="flex space-x-2">
            <Input value={referralCode} readOnly />
            <Button onClick={copyReferralCode}>Copy</Button>
          </div>
          <p className="text-sm text-muted-foreground">
            You'll earn rewards for each friend who joins using your code!
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

