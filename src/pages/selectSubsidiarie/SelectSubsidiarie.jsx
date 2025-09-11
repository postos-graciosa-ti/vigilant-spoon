import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ReactSelect from "react-select"
import useUserSessionStore from "../../stores/userSession"
import handleOpenDialog from "../../utils/handleOpenDialog"
import AllEmployeesTableDialog from "./AllEmployeesTableDialog"

const SelectSubsidiarie = () => {
  const userSession = useUserSessionStore((state) => state.userSession)

  const [allEmployeesTableDialogOpen, setAllEmployeesTableDialogOpen] = useState(false)

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
        {/* <div className="mt-5">
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
        </div> */}

        <div className="mt-3">
          <h3>Outros</h3>
        </div>

        {
          userSession?.is_admin && (
            <div>
              <button className="btn btn-link p-0" onClick={() => handleOpenDialog(setAllEmployeesTableDialogOpen)}>
                Quadro geral de funcionários
              </button>
            </div>
          )
        }

        <div>
          <button className="btn btn-link p-0 disabled">
            Processos seletivos
          </button>
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

      <AllEmployeesTableDialog
        allEmployeesTableDialogOpen={allEmployeesTableDialogOpen}
        setAllEmployeesTableDialogOpen={setAllEmployeesTableDialogOpen}
      />
    </>
  )
}

export default SelectSubsidiarie
