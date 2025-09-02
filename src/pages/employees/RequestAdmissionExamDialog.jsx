import Dialog from "../../components/Dialog"
import postRequest from "../../requests/postRequest"

const RequestAdmissionExamDialog = (props) => {
  const { requestAdmissionExamDialogOpen, setRequestAdmissionExamDialogOpen, selectedEmployee } = props

  const handleCloseDialog = () => {
    setRequestAdmissionExamDialogOpen(false)
  }

  const handleRequestAdmissionExam = () => {
    postRequest(`/employees/${selectedEmployee?.id}/request-admissional-exam`)
      .then((response) => console.log(response))
  }

  return (
    <Dialog
      dialogOpen={requestAdmissionExamDialogOpen}
      handleCloseDialog={handleCloseDialog}
      title={"Solicitar exame admissional do SESI"}
      handleSubmitDialog={handleRequestAdmissionExam}
    >
      Deseja solicitar o exame admissional do SESI? Dica: é uma boa prática revisar os dados antes de encaminhá-los!
    </Dialog>
  )
}

export default RequestAdmissionExamDialog
