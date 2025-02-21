import type { Metadata } from "next"
import { RocketFuelClient } from "./rocket-fuel-client"

export const metadata: Metadata = {
  title: "Rocket Fuel | MoonPup",
  description: "Boost your MoonPup posts with Rocket Fuel",
}

export default function RocketFuelPage() {
  return <RocketFuelClient />
}

