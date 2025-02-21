import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function EngagementMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Karma</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">5,231</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Post Karma</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">3,456</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Comment Karma</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,775</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Avg. Upvotes per Post</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">42</div>
        </CardContent>
      </Card>
    </div>
  )
}

