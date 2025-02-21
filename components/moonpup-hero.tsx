import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function MoonpupHero() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0 relative">
        <Image
          src="https://moonpup.lol/assets/images/image02.jpg?v=799071c8"
          alt="MoonPup Hero"
          width={1200}
          height={600}
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h1 className="text-4xl font-bold mb-2">MoonPup $MPUP</h1>
          <p className="text-lg">The 1st DeepSeek AI meme on-chain</p>
        </div>
      </CardContent>
    </Card>
  )
}

