import { useState } from "react"
import { useFieldArray, useForm } from "react-hook-form"
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

  const { fields, append, remove } = useFieldArray({ control, name: "parents" })

  const { trueFalseOptions, functionsOptions } = useSelectOptionsStore()

  const [disabledSubmitButton, setDisabledSubmitButton] = useState(false)

  const onClose = () => {
    reset()

    getEmployeeList()

    setDisabledSubmitButton(false)

    setAddEmployeesDialogOpen(false)
  }

  const onSubmit = (data) => {
    setDisabledSubmitButton(true)

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
      disabledSubmitButton={disabledSubmitButton}
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

      <div className="mt-4 bg-light rounded p-4">
        <h5 className="text-center">Dependentes</h5>

        {
          fields.map((field, index) => (
            <div key={field.id} className="flex gap-2 items-end mb-2">
              <div >
                <button
                  type="button"
                  className="btn btn-danger mt-3 mb-3"
                  onClick={() => remove(index)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </div>

              <Input
                control={control}
                label="Nome"
                name={`parents.${index}.name`}
                type="text"
              />

              <Input
                control={control}
                label="Parentesco"
                name={`parents.${index}.relation`}
                type="text"
              />

              <InputFile
                control={control}
                label="Certidão de nascimento"
                name={`parents.${index}.birthCertificate`}
              />
            </div>
          ))
        }

        <button
          type="button"
          className="btn btn-primary w-100"
          onClick={() => append({ name: "", relation: "", birthCertificate: "" })}
        >
          Adicionar
        </button>
      </div>
    </Dialog>
  )
}

export default AddEmployeesDialog
