import type { Metadata } from "next"
import { AIChat } from "@/components/ai-chat"

export const metadata: Metadata = {
  title: "AI Chat | MoonPup",
  description: "Chat with MoonPup AI - Get answers to all your crypto questions!",
}

export default function AIChatPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold neon-text">MoonPup AI Chat 🐶🌕</h1>
      <AIChat />
    </div>
  )
}

