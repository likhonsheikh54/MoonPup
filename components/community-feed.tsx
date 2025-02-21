import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { MessageSquare, Heart, Share2 } from "lucide-react"

const posts = [
  {
    id: 1,
    author: "CryptoEnthusiast",
    content:
      "Just learned about MoonPup! Excited to see how this meme coin develops on Solana. Any thoughts from the community?",
    likes: 24,
    comments: 7,
    shares: 3,
  },
  {
    id: 2,
    author: "SolanaExpert",
    content:
      "MoonPup's approach to ethical growth is refreshing. It's great to see a project focused on real engagement rather than hype.",
    likes: 42,
    comments: 12,
    shares: 8,
  },
]

export function CommunityFeed() {
  return (
    <Card className="card">
      <CardHeader>
        <CardTitle className="text-3xl font-bold secondary-gradient text-gradient">Community Feed</CardTitle>
      </CardHeader>
      <CardContent>
        {posts.map((post) => (
          <div key={post.id} className="mb-6 pb-6 border-b border-white/10 last:border-b-0">
            <div className="flex items-center mb-2">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${post.author}`} />
                <AvatarFallback>{post.author[0]}</AvatarFallback>
              </Avatar>
              <span className="font-semibold">{post.author}</span>
            </div>
            <p className="mb-4">{post.content}</p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="hover:text-brand-pink">
                <Heart className="h-4 w-4 mr-2" />
                {post.likes}
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-accent-yellow">
                <MessageSquare className="h-4 w-4 mr-2" />
                {post.comments}
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-brand-pink">
                <Share2 className="h-4 w-4 mr-2" />
                {post.shares}
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

