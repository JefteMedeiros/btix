import { HomeColumn } from "../HomeColumn"
import { HomeNav } from "../HomeNav"
import { ProfileCard } from "../ProfileCard"

export function LeftPanel() {
  return (
    <HomeColumn>
      <ProfileCard />
      <HomeNav />
    </HomeColumn>
  )
}
