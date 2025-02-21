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

// Use the config
const config = getConfig()
const cohere = new CohereClient({
  token: config.COHERE_API_KEY,
})

export async function POST(request: Request) {
  try {
    const { subreddit } = await request.json()

    if (!subreddit) {
      return NextResponse.json({ error: "Subreddit name is required" }, { status: 400 })
    }

    const response = await cohere.generate({
      model: "command",
      prompt: `Generate an engaging and ethical post idea for the subreddit r/${subreddit}. The post should be interesting, relevant to the subreddit's theme, and encourage genuine discussion. Do not include any misleading or false information. Format the response as a post title.`,
      maxTokens: 50,
      temperature: 0.7,
    })

    const postIdea = response.generations[0].text.trim()

    return NextResponse.json({
      postIdea,
      success: true,
    })
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}

