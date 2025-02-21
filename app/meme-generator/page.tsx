import type { Metadata } from "next"
import { MemeGeneratorClient } from "./meme-generator-client"

export const metadata: Metadata = {
  title: "Meme Generator | MoonPup",
  description: "Create cosmic memes with MoonPup's AI-powered Meme Generator!",
}

export default function MemeGeneratorPage() {
  return <MemeGeneratorClient />
}

