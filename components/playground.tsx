"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MemeGenerator } from "@/components/meme-generator"
import { AIChat } from "@/components/ai-chat"
import { TokenVisualizer } from "@/components/token-visualizer"

export function Playground() {
  return (
    <Card className="w-full mx-auto glass">
      <CardHeader>
        <CardTitle className="text-center neon-text">MoonPup Playground</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="meme">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="meme">Meme Generator</TabsTrigger>
            <TabsTrigger value="chat">AI Chat</TabsTrigger>
            <TabsTrigger value="token">Token Visualizer</TabsTrigger>
          </TabsList>
          <TabsContent value="meme">
            <MemeGenerator />
          </TabsContent>
          <TabsContent value="chat">
            <AIChat />
          </TabsContent>
          <TabsContent value="token">
            <TokenVisualizer />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

