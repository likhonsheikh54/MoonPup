import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "Mon", posts: 4, comments: 24, upvotes: 120 },
  { name: "Tue", posts: 3, comments: 18, upvotes: 80 },
  { name: "Wed", posts: 5, comments: 30, upvotes: 150 },
  { name: "Thu", posts: 2, comments: 15, upvotes: 60 },
  { name: "Fri", posts: 6, comments: 36, upvotes: 180 },
  { name: "Sat", posts: 4, comments: 24, upvotes: 120 },
  { name: "Sun", posts: 3, comments: 18, upvotes: 90 },
]

export function AnalyticsOverview() {
  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>Analytics Overview</CardTitle>
        <CardDescription>Your Reddit engagement for the past week</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="posts" fill="#8884d8" />
            <Bar dataKey="comments" fill="#82ca9d" />
            <Bar dataKey="upvotes" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

