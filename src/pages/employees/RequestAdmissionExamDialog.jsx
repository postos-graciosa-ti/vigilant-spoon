import { useState } from "react"
import Swal from "sweetalert2"
import Dialog from "../../components/Dialog"
import postRequest from "../../requests/postRequest"

const RequestAdmissionExamDialog = (props) => {
  const { requestAdmissionExamDialogOpen, setRequestAdmissionExamDialogOpen, selectedEmployee, setSelectedEmployee } = props

  const [isLoading, setIsLoading] = useState(false)

  const handleCloseDialog = () => {
    setSelectedEmployee()

    setRequestAdmissionExamDialogOpen(false)
  }

  const handleRequestAdmissionExam = () => {
    setIsLoading(true)

    postRequest(`/employees/${selectedEmployee?.id}/request-admissional-exam`)
      .then(() => {
        setIsLoading(false)

        handleCloseDialog()

        Swal.fire('Sucesso', 'Solicitação de exame admissional enviado com sucesso', 'success')
      })
  }

  return (
    <Dialog
      dialogOpen={requestAdmissionExamDialogOpen}
      handleCloseDialog={handleCloseDialog}
      title={"Solicitar exame admissional do SESI"}
      handleSubmitDialog={handleRequestAdmissionExam}
    >
      Deseja solicitar o exame admissional do SESI? Dica: é uma boa prática revisar os dados antes de encaminhá-los!

      {
        isLoading && (
          <div>
            Carregando... Por favor, aguarde...
          </div>
        )
      }
    </Dialog>
  )
}

export default RequestAdmissionExamDialog
