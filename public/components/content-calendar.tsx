import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ContentCalendar() {
  const today = new Date()
  const events = [
    {
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2),
      title: "Post: Top 10 Programming Tips",
    },
    { date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5), title: "AMA: Career in Tech" },
    { date: new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7), title: "Discussion: Future of AI" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Content Calendar</CardTitle>
        <CardDescription>Plan and schedule your Reddit posts</CardDescription>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={today}
          className="rounded-md border"
          components={{
            DayContent: ({ day }) => {
              const event = events.find((e) => e.date.toDateString() === day.toDate().toDateString())
              return (
                <div className="flex flex-col h-full">
                  <div>{day.day}</div>
                  {event && (
                    <div className="text-xs mt-1 bg-primary text-primary-foreground rounded px-1 overflow-hidden text-ellipsis">
                      {event.title}
                    </div>
                  )}
                </div>
              )
            },
          }}
        />
      </CardContent>
    </Card>
  )
}

