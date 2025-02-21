"use client"

import { useEffect, useState } from "react"
import Script from "next/script"
import { Button } from "@/components/ui/button"

declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        ready: () => void
        expand: () => void
        MainButton: {
          setText: (text: string) => void
          show: () => void
          onClick: (callback: () => void) => void
        }
      }
    }
  }
}

export function TelegramLogin() {
  const [isWebAppReady, setIsWebAppReady] = useState(false)

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready()
      window.Telegram.WebApp.expand()
      setIsWebAppReady(true)
    }
  }, [])

  const handleTelegramLogin = () => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.MainButton.setText("Login with Telegram")
      window.Telegram.WebApp.MainButton.show()
      window.Telegram.WebApp.MainButton.onClick(() => {
        // Here you would typically send the user data to your server for verification
        console.log("Logged in via Telegram WebApp")
      })
    } else {
      console.log("Telegram WebApp not available")
    }
  }

  if (!isWebAppReady) {
    return <Button disabled>Loading Telegram Login...</Button>
  }

  return (
    <>
      <Script src="https://telegram.org/js/telegram-widget.js" strategy="lazyOnload" />
      <Button onClick={handleTelegramLogin} className="bg-[#0088cc] hover:bg-[#0077b5]">
        Login with Telegram
      </Button>
    </>
  )
}

