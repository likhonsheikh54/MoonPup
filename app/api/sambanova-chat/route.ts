import { NextResponse } from "next/server"

const SAMBANOVA_API_URL = "https://api.sambanova.ai/v1/chat/completions"

export async function POST(request: Request) {
  try {
    const { message, model } = await request.json()

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    const response = await fetch(SAMBANOVA_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.SAMBANOVA_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stream: true,
        model: model || "DeepSeek-R1",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant for MoonPup, a Solana-based meme token.",
          },
          {
            role: "user",
            content: message,
          },
        ],
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const reader = response.body?.getReader()
    const decoder = new TextDecoder()
    let result = ""

    while (true) {
      const { done, value } = await reader!.read()
      if (done) break
      result += decoder.decode(value)
    }

    // Parse the result and extract the actual message content
    const lines = result.split("\n").filter((line) => line.trim() !== "")
    const lastLine = lines[lines.length - 1]
    const jsonResponse = JSON.parse(lastLine.replace("data: ", ""))
    const content = jsonResponse.choices[0].delta.content || ""

    return NextResponse.json({ message: content })
  } catch (error) {
    console.error("Error in SambaNova chat API:", error)
    return NextResponse.json({ error: "Failed to generate AI response" }, { status: 500 })
  }
}

