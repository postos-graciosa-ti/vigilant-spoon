import { useState } from "react"
import Dialog from "../../components/Dialog"
import deleteRequest from "../../requests/deleteRequest"

const DeleteEmployeesDialog = (props) => {
  const {
    deleteEmployeesDialogOpen,
    setDeleteEmployeesDialogOpen,
    getEmployeeList,
    selectedEmployee,
    setSelectedEmployee,
  } = props

  const [disabledSubmitButton, setDisabledSubmitButton] = useState(false)

  const handleClose = () => {
    setSelectedEmployee()

    getEmployeeList()

    setDisabledSubmitButton(false)

    setDeleteEmployeesDialogOpen(false)
  }

  const handleSubmit = () => {
    setDisabledSubmitButton(true)

    deleteRequest(`/employees/${selectedEmployee?.id}`)
      .then(() => handleClose())
  }

  return (
    <Dialog
      dialogOpen={deleteEmployeesDialogOpen}
      handleCloseDialog={handleClose}
      title={"Deletar funcionário"}
      type={"delete"}
      handleSubmitDialog={handleSubmit}
      disabledSubmitButton={disabledSubmitButton}
    >
      Tem certeza que deseja deletar funcionário {selectedEmployee?.name}?
    </Dialog>
  )
}

export default DeleteEmployeesDialog
