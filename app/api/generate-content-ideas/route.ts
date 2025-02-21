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
const cohere = new CohereClient({
  token: config.COHERE_API_KEY,
})

export async function POST(request: Request) {
  try {
    const { platform, contentType } = await request.json()

    const prompt = `Generate 5 engaging and ethical content ideas for MoonPup ($MPUP), a meme-based cryptocurrency on Solana inspired by space dogs. The content should be for ${platform} and focus on ${contentType}. Each idea should be informative, encourage genuine discussion, and align with ethical growth strategies. Format the response as a numbered list.`

    const response = await cohere.generate({
      model: "command",
      prompt: prompt,
      maxTokens: 300,
      temperature: 0.7,
    })

    const contentIdeas = response.generations[0].text.trim()

    return NextResponse.json({
      contentIdeas,
      success: true,
    })
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}

