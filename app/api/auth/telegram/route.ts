import { NextResponse } from "next/server"
import crypto from "crypto"

const BOT_TOKEN = "7238782071:AAFIwNdvZcoKqMdtxJRz6hcin7amIqhYLhg"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const checkString = Object.keys(data)
      .filter((key) => key !== "hash")
      .sort()
      .map((key) => `${key}=${data[key]}`)
      .join("\n")

    const secretKey = crypto.createHash("sha256").update(BOT_TOKEN).digest()
    const hash = crypto.createHmac("sha256", secretKey).update(checkString).digest("hex")

    if (hash !== data.hash) {
      return NextResponse.json({ error: "Invalid authentication" }, { status: 401 })
    }

    const authDate = Number.parseInt(data.auth_date)
    const now = Math.floor(Date.now() / 1000)
    if (now - authDate > 86400) {
      return NextResponse.json({ error: "Authentication expired" }, { status: 401 })
    }

    return NextResponse.json({
      success: true,
      user: {
        id: data.id,
        username: data.username,
        firstName: data.first_name,
        lastName: data.last_name,
        photoUrl: data.photo_url,
      },
    })
  } catch (error) {
    console.error("Authentication error:", error)
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 })
  }
}

