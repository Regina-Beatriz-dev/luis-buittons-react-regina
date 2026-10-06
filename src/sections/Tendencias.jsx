import artigoPrincipal from '../assets/novidades/artigo-principal.png'
import artigoTons from '../assets/novidades/artigo-tons.png'
import artigoVersatil from '../assets/novidades/artigo-versatil.png'

function Tendencias() {
  return (
    <section className="nov-blog" id="tendencias">
      <div className="container">

        <div className="nov-blog-header">
          <span className="nov-detalhe">
            INSPIRAÇÃO
          </span>

          <h2>
            Novidades & Tendências
          </h2>

          <p>
            Dicas, inspirações e conteúdos para você ficar
            por dentro do que está em alta no mundo da moda.
          </p>
        </div>

        <div className="row g-5">

          <div className="col-lg-7">
            <article className="nov-artigo-principal">

              <img
                src={artigoPrincipal}
                alt="Looks essenciais"
                className="img-fluid"
              />

              <div className="nov-artigo-info">
                <span>ESTILO</span>
                <time dateTime="2026-09-24">
                  24 SET 2026
                </time>
              </div>

              <h3>
                5 peças essenciais para renovar seus looks
              </h3>

              <p>
                Algumas peças conseguem transformar completamente
                um guarda-roupa. Selecionamos cinco opções versáteis
                que podem ser combinadas de diferentes formas e
                usadas em diversas ocasiões.
              </p>

            </article>
          </div>


          <div className="col-lg-5">

            <article className="nov-artigo-menor">
              <div className="row g-3 align-items-center">

                <div className="col-sm-5">
                  <img
                    src={artigoTons}
                    alt="Roupas em tons neutros"
                    className="img-fluid"
                  />
                </div>

                <div className="col-sm-7">

                  <div className="nov-artigo-info">
                    <span>DICAS</span>

                    <time dateTime="2026-09-18">
                      18 SET 2026
                    </time>
                  </div>

                  <h3>
                    Como combinar tons neutros no dia a dia
                  </h3>

                  <p>
                    Descubra como criar combinações elegantes
                    usando cores simples e fáceis de harmonizar.
                  </p>

                  <a href="#destaques" className="nov-ler-mais">
                    LER MAIS →
                  </a>

                </div>

              </div>
            </article>


            <article className="nov-artigo-menor">
              <div className="row g-3 align-items-center">

                <div className="col-sm-5">
                  <img
                    src={artigoVersatil}
                    alt="Look versátil"
                    className="img-fluid"
                  />
                </div>

                <div className="col-sm-7">

                  <div className="nov-artigo-info">
                    <span>INSPIRAÇÃO</span>

                    <time dateTime="2026-09-10">
                      10 SET 2026
                    </time>
                  </div>

                  <h3>
                    Do trabalho ao fim de semana
                  </h3>

                  <p>
                    Veja como montar looks versáteis que
                    funcionam em diferentes momentos do dia.
                  </p>

                  <a href="#destaques" className="nov-ler-mais">
                    LER MAIS →
                  </a>

                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tendencias