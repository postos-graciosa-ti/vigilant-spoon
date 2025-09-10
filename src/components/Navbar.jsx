import { Link } from "react-router-dom"
import useUserSessionStore from "../stores/userSession"

const Navbar = () => {
  const joinedSubsidiarie = useUserSessionStore((state) => state.joinedSubsidiarie)

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{joinedSubsidiarie?.name}</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Início</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/daily-sales">Vendas diárias</Link>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Cadastros
              </a>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/employees">
                    Funcionários
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">Sair</Link>
            </li>
          </ul>

          <span className="navbar-text">
            {joinedSubsidiarie?.cnpj}
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
