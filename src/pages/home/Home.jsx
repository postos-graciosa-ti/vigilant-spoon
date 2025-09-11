import { useState } from "react"
import Navbar from "../../components/Navbar"
import useUserSessionStore from "../../stores/userSession"
import handleOpenDialog from "../../utils/handleOpenDialog"
import BirthdayListDialog from "./BirthdayListDialog"
import SubsidiarieEmployeesTableDialog from "./SubsidiarieEmployeesTableDialog"

const Home = () => {
  const userSession = useUserSessionStore((state) => state.userSession)

  const joinedSubsidiarie = useUserSessionStore((state) => state.joinedSubsidiarie)

  const [subsidiarieEmployeesTableDialogOpen, setSubsidiarieEmployeesTableDialogOpen] = useState(false)

  const [birthdayListDialogOpen, setBirthdayListDialogOpen] = useState(false)

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="d-inline-flex justify-content-between w-100 mt-4">
          <div>
            <h1>Página inicial</h1>

            <span className="text-muted">
              Abaixo seguem os dados principais da filial em que você está e de seu usuário
            </span>
          </div>
        </div>

        <div className="mt-3">
          <h2>Dados de usuário</h2>
        </div>

        <div>
          <span><b>Nome</b>: {userSession?.name}</span>
        </div>

        <div>
          <span><b>Tipo de usuário</b>: {userSession?.is_admin && "Administrador" || "Comum"}</span>
        </div>

        <div>
          <span><b>Acesso</b>: {userSession?.login}</span>
        </div>

        <div>
          <span><b>E-mail</b>: {userSession?.email}</span>
        </div>

        <div>
          <span><b>Postos</b>: {userSession?.user_subsidiaries?.map((subsidiarie) => subsidiarie.name).join(", ")}</span>
        </div>

        <div className="mt-3">
          <h3>Dados de filial</h3>
        </div>

        <div>
          <button className="btn btn-link p-0" onClick={() => handleOpenDialog(setSubsidiarieEmployeesTableDialogOpen)}>
            Quadro de funcionários da filial
          </button>
        </div>

        <div>
          <button className="btn btn-link p-0" onClick={() => handleOpenDialog(setBirthdayListDialogOpen)}>
            Lista de aniversariantes da filial
          </button>
        </div>

        <div>
          <span><b>Nome</b>: {joinedSubsidiarie?.name}</span>
        </div>

        <div>
          <span><b>CNPJ</b>: {joinedSubsidiarie?.cnpj}</span>
        </div>

        <div>
          <span><b>Endereço</b>: {joinedSubsidiarie?.address}</span>
        </div>

        <div>
          <span><b>Inscrição estadual</b>: {joinedSubsidiarie?.ie}</span>
        </div>

        <div>
          <span><b>Telefone</b>: {joinedSubsidiarie?.phone}</span>
        </div>
      </div>

      <SubsidiarieEmployeesTableDialog
        subsidiarieEmployeesTableDialogOpen={subsidiarieEmployeesTableDialogOpen}
        setSubsidiarieEmployeesTableDialogOpen={setSubsidiarieEmployeesTableDialogOpen}
      />

      <BirthdayListDialog
        birthdayListDialogOpen={birthdayListDialogOpen}
        setBirthdayListDialogOpen={setBirthdayListDialogOpen}
      />
    </>
  )
}

export default Home
