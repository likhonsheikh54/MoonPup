"use client"

export function GeckoTerminal() {
  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden border">
      <iframe
        src="https://www.geckoterminal.com/solana/pools/9rsoGDwPb3XnddSU1eRNhmiX4xSUA3SNgS4Hm4GW7oyv?embed=1&info=1&swaps=1&grayscale=1&light_chart=0&chart_type=price&resolution=15m"
        title="GeckoTerminal Embed"
        className="w-full h-full"
        frameBorder="0"
        allow="clipboard-write"
        allowFullScreen
      />
    </div>
  )
}

