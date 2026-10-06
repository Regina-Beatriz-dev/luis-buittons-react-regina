import { useState } from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function CarrinhoPage() {

  const [carrinho, setCarrinho] = useState(() => {
    return JSON.parse(localStorage.getItem('carrinhoBuittons')) || []
  })

  function salvarCarrinho(novoCarrinho) {
    setCarrinho(novoCarrinho)
    localStorage.setItem(
      'carrinhoBuittons',
      JSON.stringify(novoCarrinho)
    )
  }

  function aumentarQuantidade(id) {
    const novoCarrinho = carrinho.map(item =>
      item.id === id
        ? { ...item, quantidade: item.quantidade + 1 }
        : item
    )

    salvarCarrinho(novoCarrinho)
  }

  function diminuirQuantidade(id) {
    const novoCarrinho = carrinho
      .map(item =>
        item.id === id
          ? { ...item, quantidade: item.quantidade - 1 }
          : item
      )
      .filter(item => item.quantidade > 0)

    salvarCarrinho(novoCarrinho)
  }

  function removerProduto(id) {
    salvarCarrinho(
      carrinho.filter(item => item.id !== id)
    )
  }

  const total = carrinho.reduce(
    (soma, item) =>
      soma + item.preco * item.quantidade,
    0
  )

  return (
    <>
      <Navbar />

      <main className="container py-5">

        <span className="nov-detalhe">
          SEU PEDIDO
        </span>

        <h1 className="h2 mb-4">
          Carrinho
        </h1>

        {carrinho.length === 0 ? (

          <div className="text-center py-5">
            <i className="fa-solid fa-cart-shopping fs-1 mb-3"></i>

            <h2 className="h4">
              Seu carrinho está vazio
            </h2>

            <p className="text-muted">
              Adicione produtos para continuar sua compra.
            </p>

            <Link to="/" className="btn-add-carrinho d-inline-block text-decoration-none">
              Voltar às compras
            </Link>
          </div>

        ) : (

          <div className="row g-4">

            <div className="col-lg-8">

              {carrinho.map(item => (

                <div className="card border-0 shadow-sm mb-3" key={item.id}>
                  <div className="card-body">

                    <div className="row align-items-center g-3">

                      <div className="col-3 col-md-2">
                        <img
                          src={item.imagem}
                          alt={item.nome}
                          className="img-fluid rounded"
                        />
                      </div>

                      <div className="col-9 col-md-4">
                        <h2 className="h6">
                          {item.nome}
                        </h2>

                        <strong>
                          {item.preco.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                          })}
                        </strong>
                      </div>

                      <div className="col-md-3">
                        <div className="d-flex align-items-center gap-2">

                          <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => diminuirQuantidade(item.id)}
                          >
                            −
                          </button>

                          <span>{item.quantidade}</span>

                          <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => aumentarQuantidade(item.id)}
                          >
                            +
                          </button>

                        </div>
                      </div>

                      <div className="col-md-3 text-md-end">
                        <button
                          className="btn btn-link text-danger text-decoration-none"
                          onClick={() => removerProduto(item.id)}
                        >
                          Remover
                        </button>
                      </div>

                    </div>

                  </div>
                </div>

              ))}

            </div>

            <div className="col-lg-4">

              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">

                  <h2 className="h4">
                    Resumo
                  </h2>

                  <hr />

                  <div className="d-flex justify-content-between mb-4">
                    <span>Total</span>

                    <strong>
                      {total.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                      })}
                    </strong>
                  </div>

                  <Link
                    to="/checkout"
                    className="btn-add-carrinho d-block text-center text-decoration-none"
                  >
                    Finalizar compra
                  </Link>

                </div>
              </div>

            </div>

          </div>

        )}

      </main>

      <Footer />
    </>
  )
}

export default CarrinhoPage