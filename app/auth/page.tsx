import type { Metadata } from "next"
import { TelegramAuth } from "@/components/auth/telegram-auth"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Authentication | MoonPup",
  description: "Connect with MoonPup using Telegram",
}

export default function AuthPage() {
  return (
    <div className="container mx-auto max-w-md py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-center gradient-text">Connect with MoonPup</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <TelegramAuth
            botUsername="MoonPupDeepBot"
            onAuth={(user) => {
              console.log("Authenticated user:", user)
              // Here you would typically:
              // 1. Verify the authentication on your backend
              // 2. Create a session
              // 3. Redirect to dashboard
            }}
          />
        </CardContent>
      </Card>
    </div>
  )
}

