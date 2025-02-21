import { NextResponse } from "next/server"
import OpenAI from "openai"
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
const openai = new OpenAI({ apiKey: config.OPENAI_API_KEY })

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json()

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    })

    const imageUrl = response.data[0].url

    return NextResponse.json({
      imageUrl,
      success: true,
    })
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}

