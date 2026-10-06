import Navbar from '../components/Navbar'

import Hero from '../sections/Hero'
import Beneficios from '../sections/Beneficios'
import Destaques from '../sections/Destaques'
import NovidadesIntro from '../sections/NovidadesIntro'
import CategoriasNovidades from '../sections/CategoriasNovidades'
import Tendencias from '../sections/Tendencias'
import Newsletter from '../sections/Newsletter'

function LandingPage() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <Beneficios />

        <Destaques />

        <NovidadesIntro />

        <CategoriasNovidades />

        <Tendencias />

        <Newsletter />

      </main>
    </>
  )
}

export default LandingPage