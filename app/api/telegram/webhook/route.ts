import { NextResponse } from "next/server"
import { Telegraf, Markup } from "telegraf"
import { CohereClient } from "cohere-ai"

const bot = new Telegraf("7238782071:AAFIwNdvZcoKqMdtxJRz6hcin7amIqhYLhg")
const cohereClient = new CohereClient({ token: "brAX2r8rdDQaFxpx0u2PjWOXd8LKO8n9b1MNB0BQ" })

bot.command("start", (ctx) => {
  ctx.reply(
    "Welcome to MoonPup! 🐶🌕\n\nI'm here to assist you on your cosmic journey. Here are some things I can help you with:",
    Markup.keyboard([
      ["💰 Price", "📊 Market Cap"],
      ["🤖 Ask AI", "🚀 Launch App"],
    ]).resize(),
  )
})

bot.hears("💰 Price", async (ctx) => {
  const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=moonpup&vs_currencies=usd")
  const data = await response.json()
  const price = data.moonpup.usd
  ctx.reply(`The current price of MoonPup is $${price} 🚀`)
})

bot.hears("📊 Market Cap", async (ctx) => {
  const response = await fetch("https://api.coingecko.com/api/v3/coins/moonpup")
  const data = await response.json()
  const marketCap = data.market_data.market_cap.usd
  ctx.reply(`MoonPup's current market cap is $${marketCap.toLocaleString()} 📈`)
})

bot.hears("🤖 Ask AI", (ctx) => {
  ctx.reply("What would you like to ask about MoonPup or crypto? (Start your message with /ask)")
})

bot.command("ask", async (ctx) => {
  const question = ctx.message.text.split("/ask ")[1]
  if (!question) {
    return ctx.reply("Please ask a question after /ask. For example: /ask What is MoonPup?")
  }

  try {
    const response = await cohereClient.generate({
      model: "command",
      prompt: `You are MoonPup, an AI assistant for a Solana-based meme token. Answer the following question: ${question}`,
      maxTokens: 150,
      temperature: 0.7,
    })

    ctx.reply(response.generations[0].text)
  } catch (error) {
    console.error("Error generating response:", error)
    ctx.reply("Oops! Something went wrong while fetching your answer. Please try again later.")
  }
})

bot.hears("🚀 Launch App", (ctx) => {
  ctx.reply(
    "Launch the MoonPup Web App",
    Markup.inlineKeyboard([Markup.button.webApp("Open Web App", "https://moonpopedit.vercel.app/mini-app")]),
  )
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    await bot.handleUpdate(body)
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Error processing update:", error)
    return NextResponse.json({ ok: false })
  }
}

// Set webhook
const WEBHOOK_URL = "https://moonpopedit.vercel.app/api/telegram/webhook"
bot.telegram
  .setWebhook(WEBHOOK_URL)
  .then(() => console.log("Webhook set successfully"))
  .catch((error) => console.error("Error setting webhook:", error))

