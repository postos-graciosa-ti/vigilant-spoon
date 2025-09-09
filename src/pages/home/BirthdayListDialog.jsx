import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import printJS from "print-js"
import { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import Dialog from "../../components/Dialog"
import Select from "../../components/Select"
import postRequest from "../../requests/postRequest"
import useSelectOptionsStore from "../../stores/selectOptions"
import useUserSessionStore from "../../stores/userSession"

dayjs.locale("pt-br")

const BirthdayListDialog = (props) => {
  const { birthdayListDialogOpen, setBirthdayListDialogOpen } = props

  const joinedSubsidiarie = useUserSessionStore((state) => state.joinedSubsidiarie)

  const { control, handleSubmit, reset, watch } = useForm()

  const { monthsOptions } = useSelectOptionsStore()

  const [birthdayList, setBirthdayList] = useState()

  const tableRef = useRef(null)

  const handleCloseDialog = () => {
    reset()

    setBirthdayList()

    setBirthdayListDialogOpen(false)
  }

  const onSubmit = (data) => {
    const body = {
      subsidiarie_id: joinedSubsidiarie?.id,
      ...data,
    }

    postRequest("/employees/birthday-list", body)
      .then((response) => setBirthdayList(response.data))
  }

  const handlePrint = () => {
    if (tableRef.current) {
      printJS({
        printable: tableRef.current.id,
        type: "html",
        targetStyles: ["*"],
        style: "table { width: 100%; border-collapse: collapse; } th, td { padding: 8px; border: 1px solid #ccc; }",
      })
    }
  }

  return (
    <Dialog
      dialogOpen={birthdayListDialogOpen}
      handleCloseDialog={handleCloseDialog}
      title={"Lista de aniversariantes da filial"}
      handleSubmitDialog={handleCloseDialog}
      hideSubmitButton={true}
    >
      <Select
        control={control}
        name="month"
        label="Mês"
        options={monthsOptions}
      />

      <div className="mb-3">
        <button
          className="btn btn-primary w-100"
          onClick={handleSubmit(onSubmit)}
        >
          Buscar lista de aniversariantes
        </button>
      </div>

      {birthdayList && (
        <>
          <div className="table-responsive" ref={tableRef} id="birthday-table">
            <div>
              <b>Aniversariantes do mês de {dayjs(watch("month")).format("MMMM")} da filial {joinedSubsidiarie?.name}</b>
            </div>

            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Data de nascimento</th>
                </tr>
              </thead>

              <tbody>
                {birthdayList.length > 0 ? (
                  birthdayList.map((employee) => (
                    <tr key={employee.id}>
                      <td>{employee.name}</td>
                      <td>{dayjs(employee.datebirth).format("DD/MM/YYYY")}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={2} className="text-center">
                      Nenhum registro disponível
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="mb-3">
            <button className="btn btn-primary w-100" onClick={handlePrint}>
              Imprimir lista de aniversariantes
            </button>
          </div>
        </>
      )}
    </Dialog>
  )
}

export default BirthdayListDialog
