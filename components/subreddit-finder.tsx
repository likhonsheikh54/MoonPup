import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SubredditFinder() {
  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Subreddit Finder</h2>
      <div className="flex space-x-2">
        <Input placeholder="Enter keywords" />
        <Button>Search</Button>
      </div>
      {/* We'll add the list of found subreddits here later */}
    </div>
  )
}

