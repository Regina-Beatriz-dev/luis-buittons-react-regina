import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="header sticky-top">

      <div className="header-grid">

        <a
          href="#inicio"
          style={{ textDecoration: 'none' }}
        >
          <h1>Luis Buittons</h1>
        </a>

        <nav className="nav">

          <button
            className="botao-menu"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menuPrincipal"
            aria-controls="menuPrincipal"
            aria-expanded="false"
            aria-label="Abrir menu"
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          <div
            className="nav-links collapse"
            id="menuPrincipal"
          >
            <ul>
              <li>
                <a href="#inicio">
                  Início
                </a>
              </li>
              <li>
                <a href="#destaques">
                  Destaques
                </a>
              </li>
              <li>
                <a href="#novidades">
                  Novidades
                </a>
              </li>
              <li>
                <a href="#tendencias">
                  Tendências
                </a>
              </li>
            </ul>
          </div>

          <div className="nav-actions">

            <ul>
              <li>
                <Link to="/carrinho" aria-label="Carrinho">
                    <i className="fa-solid fa-cart-shopping"></i>
                </Link>
              </li>
              <li>
                <a href="#inicio">
                  <i className="fa-solid fa-user"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar