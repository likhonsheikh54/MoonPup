import { NextResponse } from "next/server"
import { HfInference } from "@huggingface/inference"

const HF_API_KEY = "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"
const client = new HfInference(HF_API_KEY)

export async function POST(request: Request) {
  try {
    const { prompt } = await request.json()

    const image = await client.textToImage({
      model: "black-forest-labs/FLUX.1-dev",
      inputs: prompt,
      parameters: { num_inference_steps: 50 },
      provider: "nebius",
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

