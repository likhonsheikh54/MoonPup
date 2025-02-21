import { NextResponse } from "next/server"
import puppeteer from "puppeteer"
import axios from "axios"
import randomUseragent from "random-useragent"

const PROXY_SOURCES = [
  "https://github.com/dpangestuw/Free-Proxy/raw/refs/heads/main/socks4_proxies.txt",
  "https://github.com/dpangestuw/Free-Proxy/raw/refs/heads/main/http_proxies.txt",
  "https://github.com/berkay-digital/Proxy-Scraper/raw/refs/heads/main/proxies.txt",
]

async function getProxies() {
  const proxies = await Promise.all(
    PROXY_SOURCES.map(async (source) => {
      const response = await axios.get(source)
      return response.data.split("\n").filter((line: string) => line.trim() !== "")
    }),
  )
  return proxies.flat()
}

export async function POST(request: Request) {
  const { url, count } = await request.json()

  if (!url.includes("reddit.com")) {
    return NextResponse.json({ error: "Invalid Reddit URL." }, { status: 400 })
  }

  try {
    const proxies = await getProxies()

    if (proxies.length === 0) {
      return NextResponse.json({ error: "No proxies available." }, { status: 500 })
    }

    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
    })

    const page = await browser.newPage()

    for (let i = 0; i < count; i++) {
      const proxy = proxies[Math.floor(Math.random() * proxies.length)]
      await page.setRequestInterception(true)
      page.once("request", (request) => {
        const overrides: any = {}
        if (proxy) {
          overrides.proxy = proxy
        }
        request.continue(overrides)
      })

      await page.setUserAgent(randomUseragent.getRandom())
      await page.goto(url, { waitUntil: "networkidle2" })
      await new Promise((resolve) => setTimeout(resolve, Math.random() * 5000 + 2000))
    }

    await browser.close()
    return NextResponse.json({ message: "Traffic boosted successfully!" })
  } catch (error) {
    console.error("Boost error:", error)
    return NextResponse.json({ error: "Failed to boost traffic. Please try again later." }, { status: 500 })
  }
}

