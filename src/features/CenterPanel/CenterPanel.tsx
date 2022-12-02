import { Post } from "../../components"
import { IPost } from "../../interfaces/posts"
import { CreatePost } from "../CreatePost"
import { HomeColumn } from "../HomeColumn"

export interface ICenterPanel {
  data: IPost[]
}

export function CenterPanel({ data }: ICenterPanel) {
  return (
    <HomeColumn>
      <CreatePost />
      {data.map((post, key) => {
        return <Post {...post} key={key} />
      })}
    </HomeColumn>
  )
}
