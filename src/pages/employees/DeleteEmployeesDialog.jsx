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

  const handleClose = () => {
    setSelectedEmployee()

    getEmployeeList()

    setDeleteEmployeesDialogOpen(false)
  }

  const handleSubmit = () => {
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
    >
      Tem certeza que deseja deletar funcionário {selectedEmployee?.name}?
    </Dialog>
  )
}

export default DeleteEmployeesDialog
