"use client"

import { useEffect, useState } from "react"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

interface TelegramUser {
  id: number
  first_name: string
  last_name?: string
  username?: string
  photo_url?: string
  auth_date: number
  hash: string
}

interface TelegramAuthProps {
  onAuth: (user: TelegramUser) => void
}

export function TelegramAuth({ onAuth }: TelegramAuthProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    window.onTelegramAuth = async (user: TelegramUser) => {
      setIsLoading(true)
      try {
        const response = await fetch("/api/auth/telegram", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })

        if (!response.ok) {
          throw new Error("Authentication failed")
        }

        const data = await response.json()
        onAuth(data.user)
        toast({
          title: "Authentication Successful",
          description: `Welcome to MoonPup, ${data.user.firstName}! 🚀🐶`,
        })
      } catch (error) {
        console.error("Authentication error:", error)
        toast({
          title: "Authentication Failed",
          description: "Houston, we have a problem. Please try again later.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }
  }, [onAuth, toast])

  return (
    <>
      <Script src="https://telegram.org/js/telegram-widget.js" strategy="lazyOnload" />
      <div
        className="telegram-login"
        data-telegram-login="MoonPupDeepBot"
        data-size="large"
        data-onauth="onTelegramAuth(user)"
        data-request-access="write"
      />
      {isLoading && (
        <Button disabled className="mt-4">
          Preparing for liftoff... 🚀
        </Button>
      )}
    </>
  )
}

