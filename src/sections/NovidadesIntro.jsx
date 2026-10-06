import bannerNovidades from '../assets/novidades/banner-novidades.jpg'

function NovidadesIntro() {
  return (
    <section className="nov-hero" id="novidades">
      <div className="container">

        <div className="row align-items-center g-0">

          <div className="col-lg-5 nov-hero-conteudo">

            <span className="nov-detalhe">
              RECÉM-CHEGADOS
            </span>

            <h2>Novidades</h2>

            <p>As últimas peças que chegarampara renovar o seu próximo look.</p>
           
            <a href="#tendencias" className="nov-btn"> EXPLORAR</a>

          </div>

          <div className="col-lg-7">

            <img src={bannerNovidades} alt="Novidades da Luis Buittons" className="nov-hero-img img-fluid"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NovidadesIntro