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

