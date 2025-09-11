import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ReactSelect from "react-select"
import useUserSessionStore from "../../stores/userSession"

const SelectSubsidiarie = () => {
  const userSession = useUserSessionStore((state) => state.userSession)

  let subsidiariesOptions = userSession?.user_subsidiaries?.map((subsidiarie) => ({ value: subsidiarie.id, label: subsidiarie.name }))

  const [selectedSubsidiarie, setSelectedSubsidiarie] = useState()

  const setJoinedSubsidiarie = useUserSessionStore((state) => state.setJoinedSubsidiarie)

  const navigate = useNavigate()

  const handleSelectSubsidiarie = () => {
    let subsidiarieToJoin = userSession?.user_subsidiaries?.find((subsidiarie) => subsidiarie.id == selectedSubsidiarie.value)

    setJoinedSubsidiarie(subsidiarieToJoin)

    navigate("/home", { replace: true })
  }

  return (
    <>
      <div className="container">
        <div className="mt-5">
          <h1>Quadro geral de funcionários</h1>

          <span className="text-muted">
            Entreviste candidatos, adicione ao banco de talentos ou efetive
          </span>
        </div>

        <div>
          <button className="btn btn-secondary w-100 mt-3 mb-3">
            Ver
          </button>
        </div>

        <div className="mt-3">
          <h1>Processos seletivos</h1>

          <span className="text-muted">
            Entreviste candidatos, adicione ao banco de talentos ou efetive
          </span>
        </div>

        <div>
          <Link to="/candidates" className="btn btn-secondary w-100 mt-3 mb-3 disabled">
            Ir
          </Link>
        </div>

        <div className="mt-3 mb-3">
          <h2>Entrar na filial</h2>

          <span className="text-muted">
            Selecione a filial em que deseja entrar
          </span>
        </div>

        <div>
          <ReactSelect
            options={subsidiariesOptions}
            onChange={(value) => setSelectedSubsidiarie(value)}
          />
        </div>

        <div>
          <button
            className="btn btn-primary w-100 mt-3"
            onClick={handleSelectSubsidiarie}
          >
            Selecionar
          </button>
        </div>
      </div>
    </>
  )
}

export default SelectSubsidiarie
