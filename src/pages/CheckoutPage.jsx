import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function CheckoutPage() {

  const navigate = useNavigate()

  const [pagamento, setPagamento] = useState('cartao')

  const carrinho =
    JSON.parse(localStorage.getItem('carrinhoBuittons')) || []


  /* =========================================
     MÁSCARAS
  ========================================= */

  function aplicarMascara(valor, modelo) {

    const numeros = valor.replace(/\D/g, '')

    let i = 0

    return modelo
      .replace(/0/g, () => numeros[i++] ?? '')
      .replace(/\D+$/, '')
  }


  function mascaraCPF(valor) {
    return aplicarMascara(valor, '000.000.000-00')
  }


  function mascaraTelefone(valor) {

    const numeros = valor.replace(/\D/g, '')

    if (numeros.length > 10) {
      return aplicarMascara(valor, '(00) 00000-0000')
    }

    return aplicarMascara(valor, '(00) 0000-0000')
  }


  function mascaraCEP(valor) {
    return aplicarMascara(valor, '00000-000')
  }


  function mascaraCartao(valor) {
    return aplicarMascara(valor, '0000 0000 0000 0000')
  }


  function mascaraValidade(valor) {
    return aplicarMascara(valor, '00/00')
  }


  function mascaraCVV(valor) {
    return aplicarMascara(valor, '0000')
  }


  /* =========================================
     VALORES DO PEDIDO
  ========================================= */

  const subtotal = carrinho.reduce(
    (total, item) =>
      total + Number(item.preco) * item.quantidade,
    0
  )

  const frete = subtotal >= 299 || subtotal === 0
    ? 0
    : 15

  const total = subtotal + frete


  function formatarPreco(valor) {

    return valor.toLocaleString(
      'pt-BR',
      {
        style: 'currency',
        currency: 'BRL'
      }
    )

  }


  /* =========================================
     FINALIZAR PEDIDO
  ========================================= */

  function finalizarCompra(evento) {

    evento.preventDefault()

    const form = evento.currentTarget

    if (!form.checkValidity()) {

      evento.stopPropagation()

      form.classList.add('was-validated')

      return
    }

    if (carrinho.length === 0) {

      alert('Seu carrinho está vazio!')

      return
    }

    form.classList.add('was-validated')

    alert('Pedido finalizado com sucesso!')

    localStorage.removeItem('carrinhoBuittons')
    navigate('/')

  }


  return (
    <>
      <Navbar />

      <main className="checkout-page container my-5">

        {/* TÍTULO */}

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">

          <div>

            <span className="nov-detalhe">
              FINALIZAÇÃO DO PEDIDO
            </span>

            <h1 className="h2 mb-1">
              Finalizar compra
            </h1>

            <p className="text-body-secondary mb-0">
              Preencha seus dados para concluir seu pedido com segurança.
            </p>

          </div>


          <div className="d-flex gap-2 flex-wrap">

            <span className="badge text-bg-light border text-secondary">
              1 Carrinho
            </span>

            <span className="badge checkout-etapa-ativa">
              2 Checkout
            </span>

            <span className="badge text-bg-light border text-secondary">
              3 Confirmação
            </span>

          </div>

        </div>


        <div className="row g-4">

          {/* =========================================
              FORMULÁRIO
          ========================================= */}

          <div className="col-lg-8">

            <form
              className="needs-validation"
              noValidate
              onSubmit={finalizarCompra}
            >

              {/* 1. DADOS PESSOAIS */}

              <section className="card checkout-card shadow-sm mb-4">

                <div className="card-body p-4">

                  <h2 className="h4">
                    1. Dados pessoais
                  </h2>

                  <p className="text-body-secondary">
                    Informações para identificação do pedido.
                  </p>


                  <div className="row g-3">

                    <div className="col-12">

                      <label
                        htmlFor="nome"
                        className="form-label"
                      >
                        Nome completo *
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id="nome"
                        name="nome"
                        placeholder="Digite seu nome completo"
                        autoComplete="name"
                        required
                      />

                      <div className="invalid-feedback">
                        Informe seu nome completo.
                      </div>

                    </div>


                    <div className="col-12">

                      <label
                        htmlFor="email"
                        className="form-label"
                      >
                        E-mail *
                      </label>

                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="exemplo@email.com"
                        autoComplete="email"
                        required
                      />

                      <div className="invalid-feedback">
                        Informe um e-mail válido.
                      </div>

                    </div>


                    <div className="col-md-6">

                      <label
                        htmlFor="cpf"
                        className="form-label"
                      >
                        CPF *
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id="cpf"
                        name="cpf"
                        placeholder="000.000.000-00"
                        inputMode="numeric"
                        pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                        maxLength="14"
                        required

                        onInput={(event) => {
                          event.currentTarget.value =
                            mascaraCPF(event.currentTarget.value)
                        }}
                      />

                      <div className="invalid-feedback">
                        Informe um CPF válido.
                      </div>

                    </div>


                    <div className="col-md-6">

                      <label
                        htmlFor="telefone"
                        className="form-label"
                      >
                        Telefone *
                      </label>

                      <input
                        type="tel"
                        className="form-control"
                        id="telefone"
                        name="telefone"
                        placeholder="(00) 00000-0000"
                        autoComplete="tel"
                        inputMode="numeric"
                        required

                        onInput={(event) => {
                          event.currentTarget.value =
                            mascaraTelefone(event.currentTarget.value)
                        }}
                      />

                      <div className="invalid-feedback">
                        Informe um telefone com DDD.
                      </div>

                    </div>

                  </div>

                </div>

              </section>


              {/* 2. ENDEREÇO */}

              <section className="card checkout-card shadow-sm mb-4">

                <div className="card-body p-4">

                  <h2 className="h4">
                    2. Endereço de entrega
                  </h2>

                  <p className="text-body-secondary">
                    Informe o endereço onde deseja receber seu pedido.
                  </p>


                  <div className="row g-3">

                    <div className="col-md-4">

                      <label
                        htmlFor="cep"
                        className="form-label"
                      >
                        CEP *
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id="cep"
                        name="cep"
                        placeholder="00000-000"
                        inputMode="numeric"
                        autoComplete="postal-code"
                        maxLength="9"
                        required

                        onInput={(event) => {
                          event.currentTarget.value =
                            mascaraCEP(event.currentTarget.value)
                        }}
                      />

                      <div className="invalid-feedback">
                        Informe um CEP válido.
                      </div>

                    </div>


                    <div className="col-12">

                      <label
                        htmlFor="rua"
                        className="form-label"
                      >
                        Rua *
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id="rua"
                        name="rua"
                        placeholder="Digite o nome da rua"
                        autoComplete="address-line1"
                        required
                      />

                      <div className="invalid-feedback">
                        Informe a rua.
                      </div>

                    </div>


                    <div className="col-md-4">

                      <label
                        htmlFor="numero"
                        className="form-label"
                      >
                        Número *
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id="numero"
                        name="numero"
                        placeholder="Ex: 123"
                        required
                      />

                      <div className="invalid-feedback">
                        Informe o número.
                      </div>

                    </div>


                    <div className="col-md-8">

                      <label
                        htmlFor="complemento"
                        className="form-label"
                      >
                        Complemento
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id="complemento"
                        name="complemento"
                        placeholder="Apto, bloco, etc."
                        autoComplete="address-line2"
                      />

                    </div>


                    <div className="col-md-8">

                      <label
                        htmlFor="cidade"
                        className="form-label"
                      >
                        Cidade *
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        id="cidade"
                        name="cidade"
                        placeholder="Digite sua cidade"
                        autoComplete="address-level2"
                        required
                      />

                      <div className="invalid-feedback">
                        Informe a cidade.
                      </div>

                    </div>


                    <div className="col-md-4">

                      <label
                        htmlFor="estado"
                        className="form-label"
                      >
                        Estado *
                      </label>

                      <select
                        className="form-select"
                        id="estado"
                        name="estado"
                        autoComplete="address-level1"
                        required
                        defaultValue=""
                      >

                        <option value="">
                          Selecione
                        </option>

                        <option>AC</option>
                        <option>AL</option>
                        <option>AP</option>
                        <option>AM</option>
                        <option>BA</option>
                        <option>CE</option>
                        <option>DF</option>
                        <option>ES</option>
                        <option>GO</option>
                        <option>MA</option>
                        <option>MT</option>
                        <option>MS</option>
                        <option>MG</option>
                        <option>PA</option>
                        <option>PB</option>
                        <option>PR</option>
                        <option>PE</option>
                        <option>PI</option>
                        <option>RJ</option>
                        <option>RN</option>
                        <option>RS</option>
                        <option>RO</option>
                        <option>RR</option>
                        <option>SC</option>
                        <option>SP</option>
                        <option>SE</option>
                        <option>TO</option>

                      </select>

                      <div className="invalid-feedback">
                        Selecione o estado.
                      </div>

                    </div>

                  </div>

                </div>

              </section>


              {/* 3. PAGAMENTO */}

              <section className="card checkout-card shadow-sm">

                <div className="card-body p-4">

                  <h2 className="h4">
                    3. Forma de pagamento
                  </h2>

                  <p className="text-body-secondary">
                    Escolha a melhor forma de pagamento.
                  </p>


                  <div className="row g-2 mb-4">

                    <div className="col-4">

                      <input
                        type="radio"
                        className="btn-check"
                        name="pagamento"
                        id="pgCartao"
                        value="cartao"
                        checked={pagamento === 'cartao'}
                        onChange={(event) =>
                          setPagamento(event.target.value)
                        }
                      />

                      <label
                        className="btn btn-outline-dark w-100"
                        htmlFor="pgCartao"
                      >
                        <i className="fa-solid fa-credit-card me-1"></i>
                        Cartão
                      </label>

                    </div>


                    <div className="col-4">

                      <input
                        type="radio"
                        className="btn-check"
                        name="pagamento"
                        id="pgPix"
                        value="pix"
                        checked={pagamento === 'pix'}
                        onChange={(event) =>
                          setPagamento(event.target.value)
                        }
                      />

                      <label
                        className="btn btn-outline-dark w-100"
                        htmlFor="pgPix"
                      >
                        PIX
                      </label>

                    </div>


                    <div className="col-4">

                      <input
                        type="radio"
                        className="btn-check"
                        name="pagamento"
                        id="pgBoleto"
                        value="boleto"
                        checked={pagamento === 'boleto'}
                        onChange={(event) =>
                          setPagamento(event.target.value)
                        }
                      />

                      <label
                        className="btn btn-outline-dark w-100"
                        htmlFor="pgBoleto"
                      >
                        Boleto
                      </label>

                    </div>

                  </div>


                  {/* CAMPOS DO CARTÃO */}

                  {pagamento === 'cartao' && (

                    <div className="row g-3">

                      <div className="col-12">

                        <label
                          htmlFor="cartao"
                          className="form-label"
                        >
                          Número do cartão *
                        </label>

                        <input
                          type="text"
                          className="form-control"
                          id="cartao"
                          name="cartao"
                          placeholder="0000 0000 0000 0000"
                          inputMode="numeric"
                          autoComplete="cc-number"
                          maxLength="19"
                          required

                          onInput={(event) => {
                            event.currentTarget.value =
                              mascaraCartao(
                                event.currentTarget.value
                              )
                          }}
                        />

                        <div className="invalid-feedback">
                          Informe o número do cartão.
                        </div>

                      </div>


                      <div className="col-md-6">

                        <label
                          htmlFor="nomeCartao"
                          className="form-label"
                        >
                          Nome no cartão *
                        </label>

                        <input
                          type="text"
                          className="form-control"
                          id="nomeCartao"
                          name="nomeCartao"
                          placeholder="Como está no cartão"
                          autoComplete="cc-name"
                          required
                        />

                      </div>


                      <div className="col-6 col-md-3">

                        <label
                          htmlFor="validade"
                          className="form-label"
                        >
                          Validade *
                        </label>

                        <input
                          type="text"
                          className="form-control"
                          id="validade"
                          name="validade"
                          placeholder="MM/AA"
                          maxLength="5"
                          required

                          onInput={(event) => {
                            event.currentTarget.value =
                              mascaraValidade(
                                event.currentTarget.value
                              )
                          }}
                        />

                      </div>


                      <div className="col-6 col-md-3">

                        <label
                          htmlFor="cvv"
                          className="form-label"
                        >
                          CVV *
                        </label>

                        <input
                          type="text"
                          className="form-control"
                          id="cvv"
                          name="cvv"
                          placeholder="123"
                          maxLength="4"
                          required

                          onInput={(event) => {
                            event.currentTarget.value =
                              mascaraCVV(
                                event.currentTarget.value
                              )
                          }}
                        />

                      </div>

                    </div>

                  )}


                  {pagamento === 'pix' && (

                    <div className="checkout-aviso">

                      <i className="fa-solid fa-qrcode"></i>

                      <div>
                        <strong>Pagamento via PIX</strong>

                        <p className="mb-0">
                          O código PIX será gerado após a confirmação do pedido.
                        </p>
                      </div>

                    </div>

                  )}


                  {pagamento === 'boleto' && (

                    <div className="checkout-aviso">

                      <i className="fa-solid fa-barcode"></i>

                      <div>
                        <strong>Pagamento via boleto</strong>

                        <p className="mb-0">
                          O boleto será gerado após a confirmação do pedido.
                        </p>
                      </div>

                    </div>

                  )}


                  <button
                    type="submit"
                    className="checkout-finalizar w-100 mt-4"
                  >
                    <i className="fa-solid fa-lock me-2"></i>

                    Finalizar compra
                  </button>


                  <p className="text-center text-body-secondary small mt-2 mb-0">
                    <i className="fa-solid fa-lock me-1"></i>
                    Seus dados estão seguros e protegidos.
                  </p>

                </div>

              </section>

            </form>

          </div>


          {/* =========================================
              RESUMO DO PEDIDO
          ========================================= */}

          <div className="col-lg-4">

            <aside className="card checkout-card shadow-sm checkout-resumo">

              <div className="card-body p-4">

                <h2 className="h4">
                  Resumo do pedido
                </h2>

                <p className="text-body-secondary">
                  Confira os itens do seu carrinho.
                </p>


                {carrinho.length === 0 ? (

                  <p className="text-muted">
                    Nenhum produto no carrinho.
                  </p>

                ) : (

                  carrinho.map(item => (

                    <div
                      className="checkout-produto"
                      key={item.id}
                    >

                      <img
                        src={item.imagem}
                        alt={item.nome}
                      />

                      <div className="flex-grow-1">

                        <strong className="d-block">
                          {item.nome}
                        </strong>

                        <small className="text-body-secondary">
                          Quantidade: {item.quantidade}
                        </small>

                      </div>

                      <strong>
                        {formatarPreco(
                          Number(item.preco) *
                          item.quantidade
                        )}
                      </strong>

                    </div>

                  ))

                )}


                <hr />


                <label
                  htmlFor="cupom"
                  className="form-label"
                >
                  Cupom de desconto
                </label>

                <div className="input-group mb-4">

                  <input
                    type="text"
                    className="form-control"
                    id="cupom"
                    placeholder="Digite seu cupom"
                  />

                  <button
                    className="btn btn-outline-dark"
                    type="button"
                  >
                    Aplicar
                  </button>

                </div>


                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal</span>
                  <span>{formatarPreco(subtotal)}</span>
                </div>


                <div className="d-flex justify-content-between mb-3">
                  <span>Frete</span>

                  <span>
                    {frete === 0
                      ? 'Grátis'
                      : formatarPreco(frete)}
                  </span>
                </div>


                <div className="d-flex justify-content-between fs-5 border-top pt-3">

                  <strong>Total</strong>

                  <strong>
                    {formatarPreco(total)}
                  </strong>

                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default CheckoutPage