import Head from "next/head"
import { Header, ProfileCard } from "../features"
import { CreatePost } from "../features"
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
        <div>
          <ProfileCard />
          <HomeNav />
        </div>
        <div className="flex flex-col">
          <CreatePost />
        </div>
        <div className="bg-red-100">asdfsa</div>
      </section>
    </Template>
  )
}
