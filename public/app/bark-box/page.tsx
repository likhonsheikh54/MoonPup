import type { Metadata } from "next"
import BarkBoxClient from "./bark-box-client"

export const metadata: Metadata = {
  title: "Bark Box | MoonPup",
  description: "Communicate with the MoonPup community in the Bark Box",
}

export default function BarkBoxPage() {
  return <BarkBoxClient />
}

