import type { Metadata } from "next"
import { MiniAppClient } from "./mini-app-client"

export const metadata: Metadata = {
  title: "MoonPup Mini App",
  description: "MoonPup Telegram Mini App",
}

export default function MiniAppPage() {
  return <MiniAppClient />
}

