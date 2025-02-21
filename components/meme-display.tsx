"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"

const memes = [
  { id: 1, url: "/meme1.jpg", alt: "Funny MoonPup meme 1" },
  { id: 2, url: "/meme2.jpg", alt: "Hilarious MoonPup meme 2" },
  { id: 3, url: "/meme3.jpg", alt: "Epic MoonPup meme 3" },
  // Add more memes as needed
]

export function MemeDisplay() {
  const [currentMeme, setCurrentMeme] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMeme((prev) => (prev + 1) % memes.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={memes[currentMeme].id}
            src={memes[currentMeme].url}
            alt={memes[currentMeme].alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-[300px] object-cover"
          />
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}

