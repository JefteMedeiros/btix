import Head from "next/head"
import { Post } from "../components/Post/Post"
import { Header, ProfileCard } from "../features"
import { CreatePost } from "../features"
import { Friends } from "../features/Friends/Friends"
import { HomeColumn } from "../features/HomeColumn"
import { HomeNav } from "../features/HomeNav/HomeNav"
import { Template } from "../template"

export default function Home() {
  return (
    <Template>
      <Head>
        <title>Infinitum | Home</title>
      </Head>
      <Header />
      <section className="mt-9 gap-x-14 grid grid-cols-body-grid">
        <HomeColumn>
          <ProfileCard />
          <HomeNav />
        </HomeColumn>
        <HomeColumn>
          <CreatePost />
          <Post />
        </HomeColumn>
        <HomeColumn>
          <Friends />
        </HomeColumn>
      </section>
    </Template>
  )
}
