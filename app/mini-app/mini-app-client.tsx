"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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

export function MiniAppClient() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready()
      window.Telegram.WebApp.expand()
      setIsReady(true)
    }
  }, [])

  const handleMainButtonClick = () => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.MainButton.setText("Thanks for using MoonPup!")
    }
  }

  if (!isReady) {
    return <div>Loading Telegram Web App...</div>
  }

  return (
    <Card className="bg-opacity-20 bg-black backdrop-blur-lg text-white">
      <CardHeader>
        <CardTitle className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
          MoonPup Mini App
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Button
          onClick={() => {
            if (window.Telegram?.WebApp) {
              window.Telegram.WebApp.MainButton.setText("Click me!")
              window.Telegram.WebApp.MainButton.show()
              window.Telegram.WebApp.MainButton.onClick(handleMainButtonClick)
            }
          }}
          className="bg-gradient-to-r from-pink-500 to-yellow-500"
        >
          Show Main Button
        </Button>
      </CardContent>
    </Card>
  )
}

