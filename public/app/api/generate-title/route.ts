import { NextResponse } from "next/server"
import { CohereClient } from "cohere-ai"
import fs from "fs"
import path from "path"

function getConfig() {
  const configPath = path.join(process.cwd(), "config.json")
  if (fs.existsSync(configPath)) {
    const configFile = fs.readFileSync(configPath, "utf8")
    return JSON.parse(configFile)
  }
  throw new Error("config.json not found")
}

const config = getConfig()
const client = new CohereClient({ token: config.COHERE_API_KEY })

export async function POST(request: Request) {
  const { keyword } = await request.json()

  if (!keyword) {
    return NextResponse.json({ error: "Keyword is required" }, { status: 400 })
  }

  try {
    const response = await client.generate({
      model: "command-r-plus",
      prompt: `Generate an engaging Reddit post title about ${keyword}. The title should be catchy and encourage user interaction.`,
      maxTokens: 50,
      temperature: 0.7,
    })

    const title = response.generations[0].text.trim()

    return NextResponse.json({ title })
  } catch (error) {
    console.error("Title generation error:", error)
    return NextResponse.json({ error: "Failed to generate title. Please try again later." }, { status: 500 })
  }
}

