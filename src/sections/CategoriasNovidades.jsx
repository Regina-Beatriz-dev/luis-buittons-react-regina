import feminino from '../assets/novidades/feminino.png'
import masculino from '../assets/novidades/masculino.png'
import acessorio from '../assets/novidades/acessorio.png'

function CategoriasNovidades() {

  const categorias = [
    {
      nome: 'Feminino',
      imagem: feminino,
      alt: 'Moda feminina'
    },

    {
      nome: 'Masculino',
      imagem: masculino,
      alt: 'Moda masculina'
    },

    {
      nome: 'Acessórios',
      imagem: acessorio,
      alt: 'Acessórios de moda'
    }
  ]

  return (
    <section className="nov-categorias">

      <div className="container">

        <div className="row g-3">

          {categorias.map((categoria) => (

            <div
              className="col-md-4"
              key={categoria.nome}
            >

              <a
                href="#destaques"
                className="nov-categoria"
              >

                <img
                  src={categoria.imagem}
                  alt={categoria.alt}
                  className="img-fluid"
                />

                <div className="nov-categoria-texto">

                  <h3>
                    {categoria.nome}
                  </h3>

                  <span>
                    Explorar →
                  </span>

                </div>
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default CategoriasNovidades