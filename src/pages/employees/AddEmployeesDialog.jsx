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

  const {
    trueFalseOptions,
    functionsOptions,
    turnsOptions,
    employeeStatusOptions,
    departmentsOptions,
    sectorsOptions,
    hierarchyStructureOptions,
    gendersOptions,
    civilStatusOptions,
    citiesOptions,
    neighborhoodsOptions,
    ethnicitiesOptions,
    statesOptions,
    cnhCategoriesOptions,
    experiencesTimesOptions,
    paymentMethodsOptions,
    banksOptions,
    nationalitiesOptions,
    workdaysOptions,
    schoolLevelsOptions,
  } = useSelectOptionsStore()

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

      <Input
        control={control}
        label="Tamanho de camisa"
        name="tshirt_len"
        type="text"
      />

      <Input
        control={control}
        label="Tamanho de calça"
        name="legs_len"
        type="text"
      />

      <Input
        control={control}
        label="Tamanho de sapato"
        name="feet_len"
        type="text"
      />

      <Select
        control={control}
        label="Função"
        name="function_id"
        options={functionsOptions}
      />

      <Select
        control={control}
        label="Turno"
        name="turn_id"
        options={turnsOptions}
      />

      <Input
        control={control}
        label="Data de admissão"
        name="admission_date"
        type="date"
      />

      <Select
        control={control}
        label="Situação contratual"
        name="employee_status_id"
        options={employeeStatusOptions}
      />

      <Select
        control={control}
        label="Departamento"
        name="department_id"
        options={departmentsOptions}
      />

      <Select
        control={control}
        label="Setor"
        name="sector_id"
        options={sectorsOptions}
      />

      <Select
        control={control}
        label="Estrutura hierarquica"
        name="hierarchy_structure_id"
        options={hierarchyStructureOptions}
      />

      <Select
        control={control}
        label="Genero"
        name="gender_id"
        options={gendersOptions}
      />

      <Select
        control={control}
        label="Possui experiência anterior na função?"
        name="has_previous_experience"
        options={trueFalseOptions}
      />

      <Select
        control={control}
        label="estado civil"
        name="civil_status_id"
        options={civilStatusOptions}
      />

      <Input
        control={control}
        label="Número de emergência"
        name="emergency_number"
        type="text"
      />

      <Input
        control={control}
        label="E-social"
        name="esocial"
        type="text"
      />

      <Input
        control={control}
        label="Código de acesso"
        name="access_code"
        type="text"
      />

      <Input
        control={control}
        label="Código de ponto"
        name="time_clock_code"
        type="text"
      />

      <Input
        control={control}
        label="Logradouro"
        name="street"
        type="text"
      />

      <Input
        control={control}
        label="Número"
        name="street_number"
        type="text"
      />

      <Input
        control={control}
        label="CEP"
        name="cep"
        type="text"
      />

      <Select
        control={control}
        label="Cidade de residência"
        name="residence_city_id"
        options={citiesOptions}
      />

      <Select
        control={control}
        label="Bairro de residência"
        name="neighborhood_id"
        options={neighborhoodsOptions}
      />

      <Input
        control={control}
        label="Telefone fixo"
        name="phone"
        type="text"
      />

      <Input
        control={control}
        label="Telefone móvel"
        name="mobile"
        type="text"
      />

      <Input
        control={control}
        label="E-mail"
        name="email"
        type="email"
      />

      <Select
        control={control}
        label="Etnia"
        name="ethnicitie_id"
        options={ethnicitiesOptions}
      />

      <Input
        control={control}
        label="Data de nascimento"
        name="datebirth"
        type="date"
      />

      <Select
        control={control}
        label="estado de nascimento"
        name="birthstate_id"
        options={statesOptions}
      />

      <Select
        control={control}
        label="Cidade de nascimento"
        name="birthcity_id"
        options={citiesOptions}
      />

      <Input
        control={control}
        label="Nome da mãe"
        name="mothername"
        type="text"
      />

      <Input
        control={control}
        label="Nome do pai"
        name="fathername"
        type="text"
      />

      <Input
        control={control}
        label="CPF"
        name="cpf"
        type="text"
      />

      <Input
        control={control}
        label="RG"
        name="rg"
        type="text"
      />

      <Input
        control={control}
        label="Órgão emissor de RG"
        name="rg_issuing_agency"
        type="text"
      />

      <Select
        control={control}
        label="estado de RG"
        name="rg_state_id"
        options={statesOptions}
      />

      <Input
        control={control}
        label="Data de expedição de RG"
        name="rg_expedition_date"
        type="date"
      />

      <Input
        control={control}
        label="Certificado de reservista"
        name="military_certificate"
        type="text"
      />

      <Input
        control={control}
        label="PIS"
        name="pis"
        type="text"
      />

      <Input
        control={control}
        label="Data de registro de PIS"
        name="pis_register_date"
        type="date"
      />

      <Input
        control={control}
        label="Título de eleitor"
        name="votant_title"
        type="text"
      />

      <Input
        control={control}
        label="Zona eleitoral"
        name="votant_zone"
        type="text"
      />

      <Input
        control={control}
        label="Sessão eleitoral"
        name="votant_session"
        type="text"
      />

      <Input
        control={control}
        label="CTPS"
        name="ctps"
        type="text"
      />

      <Input
        control={control}
        label="Série de CTPS"
        name="ctps_serie"
        type="text"
      />

      <Select
        control={control}
        label="estado de CTPS"
        name="ctps_state"
        options={statesOptions}
      />

      <Input
        control={control}
        label="Data de emissão de CTPS"
        name="ctps_emission_date"
        type="date"
      />

      <Input
        control={control}
        label="CNH"
        name="cnh"
        type="text"
      />

      <Select
        control={control}
        label="Categoria de CNH"
        name="cnh_category_id"
        options={cnhCategoriesOptions}
      />

      <Input
        control={control}
        label="Data de emissão de CNH"
        name="cnh_emission_date"
        type="date"
      />

      <Input
        control={control}
        label="Data de validade de CNH"
        name="cnh_validity_date"
        type="date"
      />

      <Select
        control={control}
        label="Primeiro emprego?"
        name="is_first_job"
        options={trueFalseOptions}
      />

      <Select
        control={control}
        label="Já foi empregado da empresa?"
        name="already_has_been_employee"
        options={trueFalseOptions}
      />

      <Select
        control={control}
        label="Contribuição sindical nesse ano?"
        name="trade_union_contribution_this_year"
        options={trueFalseOptions}
      />

      <Select
        control={control}
        label="Recebendo seguro desemprego?"
        name="receiving_unemployment_insurance"
        options={trueFalseOptions}
      />

      <Input
        control={control}
        label="Mensalista"
        name="monthly_wage"
        type="text"
      />

      <Input
        control={control}
        label="Valor/horista"
        name="hourly_wage"
        type="text"
      />

      <Input
        control={control}
        label="Proporcional à jornada"
        name="pro_rated_hours"
        type="text"
      />

      <Select
        control={control}
        label="Precisa de vale-transporte?"
        name="has_transport_voucher"
        options={trueFalseOptions}
      />

      <Select
        control={control}
        label="Tempo de experiência"
        name="experience_time_id"
        options={experiencesTimesOptions}
      />

      <Select
        control={control}
        label="Periculosidade"
        name="has_hazard_pay"
        options={trueFalseOptions}
      />

      <Select
        control={control}
        label="Insalubridade"
        name="has_unhealthy_pay"
        options={trueFalseOptions}
      />

      <Select
        control={control}
        label="Método de pagamento"
        name="payment_method_id"
        options={paymentMethodsOptions}
      />

      <Select
        control={control}
        label="Banco"
        name="bank_id"
        options={banksOptions}
      />

      <Input
        control={control}
        label="Agência do banco"
        name="bank_agency"
        type="text"
      />

      <Input
        control={control}
        label="Conta do banco"
        name="bank_account"
        type="text"
      />

      <Input
        control={control}
        label="Salário"
        name="wage"
        type="text"
      />

      <Input
        control={control}
        label="Adiantamento salarial"
        name="wage_advance"
        type="text"
      />

      <Input
        control={control}
        label="Plano de saúde"
        name="health_insurance"
        type="text"
      />

      <Input
        control={control}
        label="Seguro de vida"
        name="life_insurance"
        type="text"
      />

      <Input
        control={control}
        label="AG"
        name="ag"
        type="text"
      />

      <Input
        control={control}
        label="CC"
        name="cc"
        type="text"
      />

      <Select
        control={control}
        label="Exposição à agente nocivo"
        name="has_harmfull_exposition"
        options={trueFalseOptions}
      />

      <Select
        control={control}
        label="Nacionalidade"
        name="nationalitie_id"
        options={nationalitiesOptions}
      />

      <Input
        control={control}
        label="Complemento"
        name="street_complement"
        type="text"
      />

      <Select
        control={control}
        label="Estado de residência"
        name="residence_state_id"
        options={statesOptions}
      />

      <Select
        control={control}
        label="Semana de trabalho"
        name="workdays_id"
        options={workdaysOptions}
      />

      <Select
        control={control}
        label="Escolaridade"
        name="school_level_id"
        options={schoolLevelsOptions}
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

              <Input
                control={control}
                label="Data de nascimento"
                name={`parents.${index}.datebirth`}
                type="date"
              />

              <Input
                control={control}
                label="Cidade/estado"
                name={`parents.${index}.cityState`}
                type="text"
              />

              <Input
                control={control}
                label="CPF"
                name={`parents.${index}.cpf`}
                type="text"
              />

              <Input
                control={control}
                label="Livro"
                name={`parents.${index}.book`}
                type="text"
              />

              <Input
                control={control}
                label="Folha"
                name={`parents.${index}.paper`}
                type="text"
              />

              <InputFile
                control={control}
                label="Certidão de nascimento"
                name={`parents.${index}.birthCertificate`}
              />

              <InputFile
                control={control}
                label="Carteira de vacinação"
                name={`parents.${index}.vaccinationCard`}
              />

              <InputFile
                control={control}
                label="Comprovante de frequência escolar"
                name={`parents.${index}.schoolingProof`}
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

      <InputFile
        control={control}
        label="Arquivo de CTPS"
        name="ctps_file"
      />

      <InputFile
        control={control}
        label="Arquivo de exame médico admissional"
        name="admission_health_exam_file"
      />

      <InputFile
        control={control}
        label="Arquivo de identidade"
        name="identity_file"
      />

      <InputFile
        control={control}
        label="Arquivo de CPF"
        name="cpf_file"
      />

      <InputFile
        control={control}
        label="Arquivo de título de eleitor"
        name="votant_title_file"
      />

      <InputFile
        control={control}
        label="Comprovante de residência"
        name="residence_proof"
      />

      <InputFile
        control={control}
        label="Arquivo de CNH"
        name="cnh_file"
      />

      <InputFile
        control={control}
        label="Arquivo de certidão de casamento"
        name="marriage_certificate_file"
      />

      <InputFile
        control={control}
        label="Arquivo de certificado de reservista"
        name="military_certificate_file"
      />

      {/* <Input
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
      </div> */}
    </Dialog>
  )
}

export default AddEmployeesDialog
