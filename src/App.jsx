import { useState } from "react"
import { useNavigate } from "react-router-dom"
import postRequest from "./requests/postRequest"
import useUserSessionStore from "./stores/userSession"

const App = () => {
  const [login, setLogin] = useState()

  const [password, setPassword] = useState()

  const setBearerToken = useUserSessionStore((state) => state.setBearerToken)

  const setUserSession = useUserSessionStore((state) => state.setUserSession)

  const navigate = useNavigate()

  const handleLogin = () => {
    let body = {
      "login": login,
      "password": password,
    }

    postRequest("/users/login", body)
      .then((response) => {
        console.log(response)

        setBearerToken(response.data.access_token)

        setUserSession(response.data.user_data)

        navigate("/select-subsidiarie", { replace: true })
      })
  }

  return (
    <>
      <div className="container">
        <div className="text-center mb-3 mt-3">
          <h1>SGI</h1>

          <span className="text-muted">Sistema de Gestão Integrado</span>
        </div>

        <div className="mb-3">
          <h2>Entrar</h2>
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">
            Acesso
          </label>

          <input
            type="text"
            className="form-control"
            onChange={(e) => setLogin(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">
            Senha
          </label>

          <input
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <button
            className="btn btn-primary w-100"
            onClick={handleLogin}
          >
            Entrar
          </button>
        </div>
      </div>
    </>
  )
}

export default App
