import { InferGetServerSidePropsType } from "next"
import Head from "next/head"
import { Header } from "../features"
import { CenterPanel } from "../features/CenterPanel"
import { LeftPanel } from "../features/LeftPanel/LeftPanel"
import { RightPanel } from "../features/RightPanel"
import { Template } from "../template"

export async function getServerSideProps() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
  const postsData = await posts.json()

  return {
    props: {
      postsData,
    },
  }
}

type IHome = InferGetServerSidePropsType<typeof getServerSideProps>

export default function Home({ postsData }: IHome) {
  return (
    <Template>
      <Head>
        <title>Infinitum | Home</title>
      </Head>
      <Header />
      <section className="mt-9 gap-x-14 grid grid-cols-body-grid">
        <LeftPanel />
        <CenterPanel data={postsData} />
        <RightPanel />
      </section>
    </Template>
  )
}
