import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import Beneficios from '../sections/Beneficios'
import Destaques from '../sections/Destaques'

function LandingPage() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <Beneficios />

        <Destaques />

      </main>
    </>
  )
}

export default LandingPage