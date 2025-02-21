import { NextResponse } from "next/server"
import { CohereClient } from "cohere-ai"

const COHERE_API_KEY = "brAX2r8rdDQaFxpx0u2PjWOXd8LKO8n9b1MNB0BQ"

const cohere = new CohereClient({ token: COHERE_API_KEY })

export async function POST(request: Request) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    const response = await cohere.generate({
      model: "command",
      prompt: `You are MoonPup, an AI assistant for a Solana-based meme token. Answer the following question: ${message}`,
      maxTokens: 150,
      temperature: 0.7,
    })

    return NextResponse.json({ message: response.generations[0].text })
  } catch (error) {
    console.error("Error in AI chat API:", error)
    return NextResponse.json({ error: "Failed to generate AI response" }, { status: 500 })
  }
}

