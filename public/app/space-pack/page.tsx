import type { Metadata } from "next"
import SpacePackClient from "./space-pack-client"

export const metadata: Metadata = {
  title: "Space Pack | MoonPup",
  description: "Join the MoonPup community in the Space Pack",
}

export default function SpacePackPage() {
  return <SpacePackClient />
}

