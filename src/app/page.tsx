
import Hero from "../../components/hero"
import HomeSection2 from "../../components/homeSection2"
import HomeSection3 from "../../components/homeSection3"
import HomeSection4 from "../../components/homeSection4"
import Reviews from "../../components/reviews"
import ToDo from "../../components/toDo"
export default function Home() {
  return (
    <main>
      <Hero />
      <HomeSection2 />
      <HomeSection3 />
      <Reviews />
      <ToDo />
      <HomeSection4 />
    </main>
  )
}
