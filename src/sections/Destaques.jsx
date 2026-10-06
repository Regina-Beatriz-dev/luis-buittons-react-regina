function Destaques() {

  const produtos = [
    {
      id: 'fem-01',
      categoria: 'Feminino',
      nome: 'Vestido Midi em Seda',
      preco: 'R$ 890,00',
      imagem: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },

    {
      id: 'mas-01',
      categoria: 'Masculino',
      nome: 'Camisa Social Oxford',
      preco: 'R$ 350,00',
      imagem: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },

    {
      id: 'fem-05',
      categoria: 'Feminino',
      nome: 'Casaco em Tweed',
      preco: 'R$ 1.150,00',
      imagem: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },

    {
      id: 'mas-03',
      categoria: 'Masculino',
      nome: 'Blazer Lã Fria',
      preco: 'R$ 1.250,00',
      imagem: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },

    {
      id: 'fem-04',
      categoria: 'Feminino',
      nome: 'Saia Plissada Clássica',
      preco: 'R$ 280,00',
      imagem: 'https://images.unsplash.com/photo-1582142306909-195724d33ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },

    {
      id: 'mas-06',
      categoria: 'Masculino',
      nome: 'Jaqueta de Couro Biker',
      preco: 'R$ 1.800,00',
      imagem: 'https://images.unsplash.com/photo-1559551409-dadc959f76b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ]

  return (
    <section
      className="destaque-section"
      id="destaques"
    >

      <div className="container">

        <div className="section-heading">

          <span className="sub-title">
            Seleção Especial
          </span>

          <h2>
            Produtos em Destaque
          </h2>

          <p>
            Uma seleção das nossas peças mais desejadas,
            das coleções masculina e feminina.
          </p>

        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">

          {produtos.map((produto) => (

            <div
              className="col"
              key={produto.id}
            >

              <div className="card h-100 product-card">

                <img
                  src={produto.imagem}
                  className="card-img-top"
                  alt={produto.nome}
                  style={{
                    height: '350px',
                    objectFit: 'cover'
                  }}
                />

                <div className="card-body text-center d-flex flex-column">

                  <span className="text-muted small mb-1 text-uppercase">
                    {produto.categoria}
                  </span>

                  <h3 className="card-title fs-6">
                    {produto.nome}
                  </h3>

                  <p className="fw-bold mb-3 mt-auto">
                    {produto.preco}
                  </p>

                  <button
                    className="btn w-100 btn-add-carrinho"
                  >
                    <i className="fa-solid fa-cart-shopping me-2"></i>
                    Adicionar
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Destaques