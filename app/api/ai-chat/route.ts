import { NextResponse } from "next/server"
import { HfInference } from "@huggingface/inference"

const client = new HfInference(process.env.HF_API_KEY)

export async function POST(request: Request) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    const response = await client.chatCompletion({
      model: "deepseek-ai/DeepSeek-R1",
      messages: [
        { role: "system", content: "You are a helpful assistant for MoonPup, a Solana-based meme token." },
        { role: "user", content: message },
      ],
      max_tokens: 500,
    })

    return NextResponse.json({ message: response.choices[0].message.content })
  } catch (error) {
    console.error("Error in AI chat API:", error)
    return NextResponse.json({ error: "Failed to generate AI response" }, { status: 500 })
  }
}

