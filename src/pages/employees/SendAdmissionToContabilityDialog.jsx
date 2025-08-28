import Dialog from "../../components/Dialog"
import postRequest from "../../requests/postRequest"

const SendAdmissionToContabilityDialog = (props) => {
  const {
    sendAdmissionToContabilityDialogOpen,
    setSendAdmissionToContabilityDialogOpen,
    selectedEmployee,
    setSelectedEmployee,
  } = props

  const handleCloseDialog = () => {
    setSelectedEmployee()

    setSendAdmissionToContabilityDialogOpen(false)
  }

  const handleSubmitDialog = () => {
    console.log(selectedEmployee?.id)

    postRequest(`/employees/${selectedEmployee?.id}/send-admission-to-contability`)
      .then(() => {
        handleCloseDialog()

        console.log("sucess!")
      })
  }

  return (
    <Dialog
      dialogOpen={sendAdmissionToContabilityDialogOpen}
      handleCloseDialog={handleCloseDialog}
      title={"Encaminhar dados de admissão para a contabilidade"}
      handleSubmitDialog={handleSubmitDialog}
    >
      <div>
        <span>
          Tem certeza que deseja enviar dados de admissão para a contabilidade? Lembre-se de revisar os dados antes de encaminhá-los!
        </span>
      </div>
    </Dialog>
  )
}

export default SendAdmissionToContabilityDialog
