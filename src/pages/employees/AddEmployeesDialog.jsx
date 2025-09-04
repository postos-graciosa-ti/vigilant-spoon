import { useForm } from "react-hook-form"
import Dialog from "../../components/Dialog"
import Input from "../../components/Input"
import InputFile from "../../components/InputFile"
import Select from "../../components/Select"
import postRequest from "../../requests/postRequest"
import useSelectOptionsStore from "../../stores/selectOptions"
import useUserSessionStore from "../../stores/userSession"
import { createEmployeesDefaultValues } from "../../utils/createEmployeesDefaultValues"

const AddEmployeesDialog = (props) => {
  const { addEmployeesDialogOpen, setAddEmployeesDialogOpen, getEmployeeList } = props

  const joinedSubsidiarie = useUserSessionStore((state) => state.joinedSubsidiarie)

  const { control, handleSubmit, reset } = useForm({ defaultValues: createEmployeesDefaultValues() })

  const { trueFalseOptions, functionsOptions } = useSelectOptionsStore()

  const onClose = () => {
    reset()

    getEmployeeList()

    setAddEmployeesDialogOpen(false)
  }

  const onSubmit = (data) => {
    const body = {
      subsidiarie_id: joinedSubsidiarie?.id,
      ...data,
    }

    postRequest(`/subsidiaries/${joinedSubsidiarie?.id}/employees`, body)
      .then(() => onClose())
  }

  return (
    <Dialog
      dialogOpen={addEmployeesDialogOpen}
      handleCloseDialog={onClose}
      title="Adicionar funcionário"
      handleSubmitDialog={handleSubmit(onSubmit)}
    >
      <Input
        control={control}
        label="Nome"
        name="name"
        type="text"
      />

      <Select
        control={control}
        label="Função"
        name="function_id"
        options={functionsOptions}
      />

      <Input
        control={control}
        label="Complemento"
        name="street_complement"
        type="text"
      />

      <Select
        control={control}
        label="Periculosidade"
        name="has_hazard_pay"
        options={trueFalseOptions}
      />

      <InputFile
        name="military_certificate_file"
        control={control}
        label="Certificado de reservista"
      />
    </Dialog>
  )
}

export default AddEmployeesDialog
