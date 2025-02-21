import type { Metadata } from "next"
import { TokenCustomizer } from "@/components/token-customizer"

export const metadata: Metadata = {
  title: "Settings | MoonPup",
  description: "Customize your MoonPup experience",
}

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold neon-text">Settings 🛠️</h1>
      <TokenCustomizer />
    </div>
  )
}

