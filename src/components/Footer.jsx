function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="row g-4">

          <div className="col-md-5">
            <h2 className="footer-logo">Luis Buittons</h2>

            <p>
              Elegância, estilo e personalidade em cada detalhe.
            </p>
          </div>

          <div className="col-md-3">
            <h3>Navegação</h3>

            <ul>
              <li><a href="/#inicio">Início</a></li>
              <li><a href="/#destaques">Destaques</a></li>
              <li><a href="/#novidades">Novidades</a></li>
              <li><a href="/#tendencias">Tendências</a></li>
            </ul>
          </div>

         <div className="footer-final">
          <p>
            © 2026 Luis Buittons — Todos os direitos reservados.
          </p>
         </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer