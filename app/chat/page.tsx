import type { Metadata } from "next"
import { ChatClient } from "./chat-client"

export const metadata: Metadata = {
  title: "AI Chat | MoonPup",
  description: "Chat with MoonPup AI and get answers to all your crypto questions!",
}

export default function ChatPage() {
  return <ChatClient />
}

