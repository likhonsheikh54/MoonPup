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

const config = getConfig()
const cohere = new CohereClient({
  token: config.COHERE_API_KEY,
})

export async function POST(request: Request) {
  try {
    const { url, engagementType } = await request.json()

    if (!url.includes("reddit.com")) {
      return NextResponse.json({ error: "Invalid Reddit URL" }, { status: 400 })
    }

    // Generate an ethical engagement suggestion
    const response = await cohere.generate({
      model: "command",
      prompt: `Generate an ethical way to engage with the Reddit post at ${url}. The engagement type is ${engagementType}. Focus on genuine interaction and community building. Do not suggest any form of manipulation or artificial boosting.`,
      maxTokens: 150,
      temperature: 0.7,
    })

    const suggestion = response.generations[0].text.trim()

    return NextResponse.json({
      message: "Ethical engagement suggestion generated successfully",
      suggestion,
      success: true,
    })
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 })
  }
}

import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [url, setUrl] = useState("");
  const [count, setCount] = useState(100);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const startBoosting = async () => {
    if (!url.includes("reddit.com")) {
      alert("Enter a valid Reddit post URL.");
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

  const generateComment = async () => {
    setMessage("Generating AI comment...");
    try {
      const response = await axios.post("/api/comment", { url });
      setComment(response.data.comment);
      setMessage("✅ AI comment generated!");
    } catch (error) {
      setMessage("❌ AI Error: " + error.message);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "40px", fontFamily: "Arial" }}>

