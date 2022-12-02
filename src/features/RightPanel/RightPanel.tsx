import { Friends } from "../Friends"
import { HomeColumn } from "../HomeColumn"

export function RightPanel() {
  return (
    <HomeColumn className="hidden md:block">
      <Friends />
    </HomeColumn>
  )
}
