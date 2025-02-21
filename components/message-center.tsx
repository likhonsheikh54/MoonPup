import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function MessageCenter() {
  return (
    <div className="border rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Message Center</h2>
      <div className="space-y-4">
        <div className="flex space-x-2">
          <Input placeholder="Search messages" />
          <Button>Search</Button>
        </div>
        {/* We'll add the list of messages and a compose feature here later */}
      </div>
    </div>
  )
}

