import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [url, setUrl] = useState("");
  const [count, setCount] = useState(100);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const startBoosting = async () => {
    if (!url.includes("reddit.com")) {
      alert("Please enter a valid Reddit post URL.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("/api/boost", { url, count });
      setMessage(response.data.message || "Boosting started!");
    } catch (error) {
      setMessage("❌ Error: " + error.response?.data?.error || "Failed");
    }

    setLoading(false);
  };

  return (
    <div style={{ textAlign: "center", padding: "40px", fontFamily: "Arial" }}>
      <h1>🚀 Ethical Reddit Engagement</h1>
      <p>Boost your Reddit post visibility in an ethical way using AI and proxies.</p>

      <input 
        type="text" 
        placeholder="Enter Reddit Post URL..." 
        value={url} 
        onChange={(e) => setUrl(e.target.value)} 
        style={{ width: "80%", padding: "10px", marginBottom: "10px" }} 
      />

      <input 
        type="number" 
        value={count} 
        onChange={(e) => setCount(e.target.value)} 
        style={{ width: "80px", padding: "5px", marginBottom: "10px" }} 
      />
import puppeteer from "puppeteer";
import axios from "axios";
import randomUseragent from "random-useragent";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { url, count } = req.body;

  if (!url.includes("reddit.com")) {
    return res.status(400).json({ error: "Invalid Reddit URL." });
  }

  try {
    // Fetching fresh proxies dynamically
    const proxySources = [
      "https://github.com/dpangestuw/Free-Proxy/raw/refs/heads/main/socks4_proxies.txt",
      "https://github.com/dpangestuw/Free-Proxy/raw/refs/heads/main/http_proxies.txt",
      "https://github.com/berkay-digital/Proxy-Scraper/raw/refs/heads/main/proxies.txt"
    ];
    
    const proxies = (
      await Promise.all(proxySources.map((source) => axios.get(source)))
    ).flatMap((res) => res.data.split("\n").filter((p) => p.trim()));

    if (!proxies.length) {
      return res.status(500).json({ error: "No proxies available." });
    }

    const browser = await puppeteer.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        `--proxy-server=${proxies[Math.floor(Math.random() * proxies.length)]}`
      ],
    });

    const page = await browser.newPage();
    
    for (let i = 0; i < count; i++) {
      await page.setUserAgent(randomUseragent.getRandom());
      await page.goto(url, { waitUntil: "networkidle2" });
      await new Promise((resolve) => setTimeout(resolve, Math.random() * 5000 + 2000));
    }

    await browser.close();
    res.status(200).json({ message: "Traffic boosted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

      <br />
      <button onClick={startBoosting} disabled={loading} style={{ margin: "10px", padding: "10px 20px" }}>
        {loading ? "Boosting..." : "🚀 Start Boost"}
      </button>

      {message && <p style={{ marginTop: "20px", fontWeight: "bold" }}>{message}</p>}

      <footer style={{ marginTop: "50px", fontSize: "14px" }}>
        Powered by <a href="https://t.me/ogmpupsol" target="_blank">OGMPUPSOL</a> |
        <a href="https://linktr.ee/moonpupsol" target="_blank"> Linktree</a> |
        <a href="https://x.com/ogmpupsol" target="_blank"> Twitter</a> |
        <a href="https://ogmpupsol.com" target="_blank"> Website</a>
      </footer>
    </div>
  );
}

