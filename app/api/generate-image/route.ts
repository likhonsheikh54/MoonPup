import { NextResponse } from "next/server"
import { HfInference } from "@huggingface/inference"

export const runtime = 'edge'

if (!process.env.HUGGINGFACE_API_TOKEN) {
  throw new Error("Missing HUGGINGFACE_API_TOKEN environment variable");
}

const client = new HfInference(process.env.HUGGINGFACE_API_TOKEN)

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json()
    
    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 })
    }

    const image = await client.textToImage({
      model: "stabilityai/stable-diffusion-2",
      inputs: prompt,
      parameters: { num_inference_steps: 50 },
    })

    // Convert the Blob to a base64 string
    const buffer = await image.arrayBuffer()
    const base64 = Buffer.from(buffer).toString("base64")
    const imageUrl = `data:image/png;base64,${base64}`

    return NextResponse.json({
      imageUrl,
      success: true,
    })
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}

