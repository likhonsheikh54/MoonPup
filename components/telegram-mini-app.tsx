"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        ready: () => void
        sendData: (data: string) => void
      }
    }
  }
}

export function TelegramMiniApp() {
  const [isWebAppReady, setIsWebAppReady] = useState(false)

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready()
      setIsWebAppReady(true)
    }
  }, [])

  const handleMainButtonClick = () => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.sendData("User clicked the main button")
    }
  }

  if (!isWebAppReady) {
    return <div>Loading Telegram Web App...</div>
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">MoonPup Mini App</h2>
      <Button onClick={handleMainButtonClick}>Send Data to Bot</Button>
    </div>
  )
}

