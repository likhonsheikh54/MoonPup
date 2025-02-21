import type { Metadata } from "next"
import LunarBaseClient from "./lunar-base-client"

export const metadata: Metadata = {
  title: "Lunar Base | MoonPup",
  description: "Explore the Lunar Base of MoonPup - your gateway to cosmic crypto adventures!",
}

export default function LunarBasePage() {
  return <LunarBaseClient />
}

