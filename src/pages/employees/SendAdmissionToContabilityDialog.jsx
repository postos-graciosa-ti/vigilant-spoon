import { useState } from "react"
import Swal from "sweetalert2"
import Dialog from "../../components/Dialog"
import postRequest from "../../requests/postRequest"

const SendAdmissionToContabilityDialog = (props) => {
  const {
    sendAdmissionToContabilityDialogOpen,
    setSendAdmissionToContabilityDialogOpen,
    selectedEmployee,
    setSelectedEmployee,
  } = props

  const [isLoading, setIsLoading] = useState(false)

  const handleCloseDialog = () => {
    setSelectedEmployee()

    setSendAdmissionToContabilityDialogOpen(false)
  }

  const handleSubmitDialog = () => {
    setIsLoading(true)

    postRequest(`/employees/${selectedEmployee?.id}/send-admission-to-contability`)
      .then(() => {
        setIsLoading(false)

        handleCloseDialog()

        Swal.fire('Sucesso', 'Ficha da contabilidade enviada com sucesso', 'success')
      })
  }

  return (
    <Dialog
      dialogOpen={sendAdmissionToContabilityDialogOpen}
      handleCloseDialog={handleCloseDialog}
      title={"Encaminhar dados de admissão para a contabilidade"}
      handleSubmitDialog={handleSubmitDialog}
      disabledSubmitButton={isLoading}
    >
      <div>
        <span>
          Tem certeza que deseja enviar dados de admissão para a contabilidade? Lembre-se de revisar os dados antes de encaminhá-los!
        </span>
      </div>

      {
        isLoading && (
          <div>
            <span>Carregando... Por favor, aguarde...</span>
          </div>
        )
      }
    </Dialog>
  )
}

export default SendAdmissionToContabilityDialog
