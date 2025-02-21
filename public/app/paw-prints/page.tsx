import type { Metadata } from "next"
import PawPrintsClient from "./paw-prints-client"

export const metadata: Metadata = {
  title: "Paw Prints | MoonPup",
  description: "Track MoonPup's journey across the crypto universe",
}

export default function PawPrintsPage() {
  return <PawPrintsClient />
}

