import { Header, ProfileCard } from "../features"
import { Template } from "../template"

export default function Home() {
  return (
    <Template>
      <Header />
      <section className="mt-9 gap-x-14 grid grid-cols-body-grid">
        <ProfileCard />
        <div className="bg-red-100">asdfsa</div>
        <div className="bg-red-100">asdfsa</div>
      </section>
    </Template>
  )
}
