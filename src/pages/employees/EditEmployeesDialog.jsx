import { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import Dialog from "../../components/Dialog"
import FormCreatableSelect from "../../components/FormCreatableSelect"
import FormInput from "../../components/FormInput"
import FormInputLink from "../../components/FormInputLink"
import FormSelect from "../../components/FormSelect"
import patchRequest from "../../requests/patchRequest"
import useUserSessionStore from "../../stores/userSession"
import loadSelectOptions from "../../utils/loadSelectOptions"

const EditEmployeesDialog = (props) => {
  const {
    editEmployeesDialogOpen,
    setEditEmployeesDialogOpen,
    getEmployeeList,
    selectedEmployee,
    setSelectedEmployee,
  } = props

  const joinedSubsidiarie = useUserSessionStore((state) => state.joinedSubsidiarie)

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    watch
  } = useForm({
    defaultValues: {
      name: "",
      tshirt_len: "",
      legs_len: "",
      feet_len: "",
      function_id: null,
      turn_id: null,
      admission_date: "",
      employee_status_id: null,
      department_id: null,
      sector_id: null,
      hierarchy_structure_id: null,
      gender_id: null,
      has_previous_experience: null,
      civil_status_id: null,
      emergency_number: "",
      esocial: "",
      access_code: "",
      time_clock_code: "",
      street: "",
      street_number: "",
      cep: "",
      residence_city_id: null,
      neighborhood_id: null,
      phone: "",
      mobile: "",
      email: "",
      ethnicitie_id: null,
      datebirth: "",
      birthstate_id: null,
      birthcity_id: null,
      mothername: "",
      fathername: "",
      cpf: "",
      rg: "",
      rg_issuing_agency: "",
      rg_state_id: null,
      rg_expedition_date: "",
      military_certificate: "",
      pis: "",
      pis_register_date: "",
      votant_title: "",
      votant_zone: "",
      votant_session: "",
      ctps: "",
      ctps_serie: "",
      ctps_state: null,
      ctps_emission_date: "",
      cnh: "",
      cnh_category_id: null,
      cnh_emission_date: "",
      cnh_validity_date: "",
      is_first_job: null,
      already_has_been_employee: null,
      trade_union_contribution_this_year: null,
      receiving_unemployment_insurance: null,
      monthly_wage: "",
      hourly_wage: "",
      pro_rated_hours: "",
      has_transport_voucher: null,
      daily_transport_units: "",
      weekly_transport_units: "",
      monthly_transport_units: "",
      experience_time_id: null,
      has_hazard_pay: null,
      has_unhealthy_pay: null,
      payment_method_id: null,
      bank_id: null,
      bank_agency: "",
      bank_account: "",
      wage: "",
      wage_advance: "",
      health_insurance: "",
      life_insurance: "",
      ag: "",
      cc: "",
      has_harmfull_exposition: null,
      nationalitie_id: null,
      drive_files_url: "",
      street_complement: "",
      residence_state_id: null,
      workdays_id: null,
      school_level_id: null,
    }
  })

  const trueFalseOptions = [
    { value: true, label: "Sim" },
    { value: false, label: "Não" },
  ]

  const [functionsOptions, setFunctionsOptions] = useState()
  const [turnsOptions, setTurnsOptions] = useState()
  const [employeeStatusOptions, setEmployeeStatusOptions] = useState()
  const [departmentsOptions, setDepartmentsOptions] = useState()
  const [sectorsOptions, setSectorsOptions] = useState()
  const [hierarchyStructureOptions, setHierarchyStructureOptions] = useState()
  const [gendersOptions, setGendersOptions] = useState()
  const [civilStatusOptions, setCivilStatusOptions] = useState()
  const [citiesOptions, setCitiesOptions] = useState()
  const [neighborhoodsOptions, setNeighborhoodsOptions] = useState()
  const [ethnicitiesOptions, setEthnicitiesOptions] = useState()
  const [statesOptions, setStatesOptions] = useState()
  const [cnhCategoriesOptions, setCnhCategoriesOptions] = useState()
  const [experiencesTimesOptions, setExperiencesTimesOptions] = useState()
  const [paymentMethodsOptions, setPaymentMethodsOptions] = useState()
  const [banksOptions, setBanksOptions] = useState()
  const [nationalitiesOptions, setNationalitiesOptions] = useState()
  const [workdaysOptions, setWorkdaysOptions] = useState()
  const [schoolLevelsOptions, setSchoolLevelsOptions] = useState()

  // Função para encontrar a opção correspondente pelo valor
  const findOptionByValue = (options, value) => {
    return options?.find(option => option.value === value) || null
  }

  // Preencher o formulário quando o funcionário selecionado mudar
  useEffect(() => {
    if (selectedEmployee) {
      // Preencher todos os campos do formulário com os dados do funcionário
      Object.keys(selectedEmployee).forEach(key => {
        if (selectedEmployee[key] !== null && selectedEmployee[key] !== undefined) {
          // Para campos que são seleções (IDs), precisamos encontrar a opção correspondente
          if (key.endsWith('_id') || key === 'ctps_state' || key === 'rg_state_id' ||
            key === 'birthstate_id' || key === 'birthcity_id' || key === 'residence_state_id' ||
            key === 'residence_city_id' || key === 'neighborhood_id') {
            // Encontrar a opção correspondente nas opções carregadas
            const optionValue = selectedEmployee[key]
            let options

            switch (key) {
              case 'function_id': options = functionsOptions; break
              case 'turn_id': options = turnsOptions; break
              case 'employee_status_id': options = employeeStatusOptions; break
              case 'department_id': options = departmentsOptions; break
              case 'sector_id': options = sectorsOptions; break
              case 'hierarchy_structure_id': options = hierarchyStructureOptions; break
              case 'gender_id': options = gendersOptions; break
              case 'civil_status_id': options = civilStatusOptions; break
              case 'residence_city_id': options = citiesOptions; break
              case 'neighborhood_id': options = neighborhoodsOptions; break
              case 'ethnicitie_id': options = ethnicitiesOptions; break
              case 'birthstate_id': options = statesOptions; break
              case 'birthcity_id': options = citiesOptions; break
              case 'rg_state_id': options = statesOptions; break
              case 'cnh_category_id': options = cnhCategoriesOptions; break
              case 'experience_time_id': options = experiencesTimesOptions; break
              case 'payment_method_id': options = paymentMethodsOptions; break
              case 'bank_id': options = banksOptions; break
              case 'nationalitie_id': options = nationalitiesOptions; break
              case 'ctps_state': options = statesOptions; break
              case 'residence_state_id': options = statesOptions; break
              case 'workdays_id': options = workdaysOptions; break
              case 'school_level_id': options = schoolLevelsOptions; break
              default: options = null
            }

            if (options) {
              const option = findOptionByValue(options, optionValue)
              setValue(key, option)
            }
          } else if (key === 'has_previous_experience' || key === 'is_first_job' ||
            key === 'already_has_been_employee' || key === 'trade_union_contribution_this_year' ||
            key === 'receiving_unemployment_insurance' || key === 'has_transport_voucher' ||
            key === 'has_hazard_pay' || key === 'has_unhealthy_pay' || key === 'has_harmfull_exposition') {
            // Campos booleanos
            const option = trueFalseOptions.find(opt => opt.value === selectedEmployee[key])
            setValue(key, option)
          } else {
            // Campos de texto normais
            setValue(key, selectedEmployee[key])
          }
        }
      })
    }
  }, [selectedEmployee, functionsOptions, turnsOptions, employeeStatusOptions,
    departmentsOptions, sectorsOptions, hierarchyStructureOptions, gendersOptions,
    civilStatusOptions, citiesOptions, neighborhoodsOptions, ethnicitiesOptions,
    statesOptions, cnhCategoriesOptions, experiencesTimesOptions, paymentMethodsOptions,
    banksOptions, nationalitiesOptions, setValue])

  useEffect(() => {
    if (editEmployeesDialogOpen) {
      Promise.all([
        loadSelectOptions("/functions"),
        loadSelectOptions("turns"),
        loadSelectOptions("/employee-status"),
        loadSelectOptions("/departments"),
        loadSelectOptions("/sectors"),
        loadSelectOptions("/hierarchy-structure"),
        loadSelectOptions("/genders"),
        loadSelectOptions("civil-status"),
        loadSelectOptions("/cities"),
        loadSelectOptions("/neighborhoods"),
        loadSelectOptions("/ethnicities"),
        loadSelectOptions("/states"),
        loadSelectOptions("/cnh-categories"),
        loadSelectOptions("/experiences-times"),
        loadSelectOptions("/payment-methods"),
        loadSelectOptions("/banks"),
        loadSelectOptions("/nationalities"),
        loadSelectOptions("/workdays"),
        loadSelectOptions("/school-levels"),
      ]).then((options) => {
        const [
          _functionsOptions,
          _turnsOptions,
          _employeeStatusOptions,
          _departmentsOptions,
          _sectorsOptions,
          _hierarchyStructureOptions,
          _gendersOptions,
          _civilStatusOptions,
          _citiesOptions,
          _neighborhoodsOptions,
          _ethnicitiesOptions,
          _statesOptions,
          _cnhCategoriesOptions,
          _experiencesTimesOptions,
          _paymentMethodsOptions,
          _banksOptions,
          _nationalitiesOptions,
          _workdaysOptions,
          _schoolLevelsOptions,
        ] = options

        setFunctionsOptions(_functionsOptions)
        setTurnsOptions(_turnsOptions)
        setEmployeeStatusOptions(_employeeStatusOptions)
        setDepartmentsOptions(_departmentsOptions)
        setSectorsOptions(_sectorsOptions)
        setHierarchyStructureOptions(_hierarchyStructureOptions)
        setGendersOptions(_gendersOptions)
        setCivilStatusOptions(_civilStatusOptions)
        setCitiesOptions(_citiesOptions)
        setNeighborhoodsOptions(_neighborhoodsOptions)
        setEthnicitiesOptions(_ethnicitiesOptions)
        setStatesOptions(_statesOptions)
        setCnhCategoriesOptions(_cnhCategoriesOptions)
        setExperiencesTimesOptions(_experiencesTimesOptions)
        setPaymentMethodsOptions(_paymentMethodsOptions)
        setBanksOptions(_banksOptions)
        setNationalitiesOptions(_nationalitiesOptions)
        setWorkdaysOptions(_workdaysOptions)
        setSchoolLevelsOptions(_schoolLevelsOptions)
      })
    }
  }, [editEmployeesDialogOpen])

  const handleClose = () => {
    reset()
    setSelectedEmployee(null)
    getEmployeeList()
    setEditEmployeesDialogOpen(false)
  }

  const onSubmit = (data) => {
    const body = {
      ...data,
      subsidiarie_id: joinedSubsidiarie?.id,
      function_id: data.function_id?.value,
      turn_id: data.turn_id?.value,
      employee_status_id: data.employee_status_id?.value,
      department_id: data.department_id?.value,
      sector_id: data.sector_id?.value,
      hierarchy_structure_id: data.hierarchy_structure_id?.value,
      gender_id: data.gender_id?.value,
      has_previous_experience: data.has_previous_experience?.value,
      civil_status_id: data.civil_status_id?.value,
      residence_city_id: data.residence_city_id?.value,
      neighborhood_id: data.neighborhood_id?.value,
      ethnicitie_id: data.ethnicitie_id?.value,
      birthstate_id: data.birthstate_id?.value,
      birthcity_id: data.birthcity_id?.value,
      rg_state_id: data.rg_state_id?.value,
      ctps_state: data.ctps_state?.value,
      cnh_category_id: data.cnh_category_id?.value,
      is_first_job: data.is_first_job?.value,
      already_has_been_employee: data.already_has_been_employee?.value,
      trade_union_contribution_this_year: data.trade_union_contribution_this_year?.value,
      receiving_unemployment_insurance: data.receiving_unemployment_insurance?.value,
      has_transport_voucher: data.has_transport_voucher?.value,
      experience_time_id: data.experience_time_id?.value,
      has_hazard_pay: data.has_hazard_pay?.value,
      has_unhealthy_pay: data.has_unhealthy_pay?.value,
      payment_method_id: data.payment_method_id?.value,
      bank_id: data.bank_id?.value,
      has_harmfull_exposition: data.has_harmfull_exposition?.value,
      nationalitie_id: data.nationalitie_id?.value,
      residence_state_id: data.residence_state_id?.value,
      workdays_id: data.workdays_id?.value,
      school_level_id: data.school_level_id?.value,
    }

    patchRequest(`/employees/${selectedEmployee?.id}`, body)
      .then(() => handleClose())
  }

  return (
    <Dialog
      dialogOpen={editEmployeesDialogOpen}
      handleCloseDialog={handleClose}
      title={"Editar funcionário"}
      handleSubmitDialog={handleSubmit(onSubmit)}
    >
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Nome"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="tshirt_len"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Tamanho de camisa"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="legs_len"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Tamanho de calça"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="feet_len"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Tamanho de calçado"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="function_id"
        control={control}
        render={({ field }) => (
          <FormSelect
            label={"Função"}
            options={functionsOptions}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="turn_id"
        control={control}
        render={({ field }) => (
          <FormSelect
            label={"Turno"}
            options={turnsOptions}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="admission_date"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Data de admissão"}
            type={"date"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="employee_status_id"
        control={control}
        render={({ field }) => (
          <FormSelect
            label={"Situação contratual"}
            options={employeeStatusOptions}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="department_id"
        control={control}
        render={({ field }) => (
          <FormSelect
            label={"Departamento"}
            options={departmentsOptions}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="sector_id"
        control={control}
        render={({ field }) => (
          <FormSelect
            label={"Setor"}
            options={sectorsOptions}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="hierarchy_structure_id"
        control={control}
        render={({ field }) => (
          <FormSelect
            label={"Estrutura hierarquica"}
            options={hierarchyStructureOptions}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="gender_id"
        control={control}
        render={({ field }) => (
          <FormSelect
            label={"Sexo"}
            options={gendersOptions}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="has_previous_experience"
        control={control}
        render={({ field }) => (
          <FormSelect
            label={"Possui experiência prévia"}
            options={trueFalseOptions}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="civil_status_id"
        control={control}
        render={({ field }) => (
          <FormSelect
            label={"Estado civil"}
            options={civilStatusOptions}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="emergency_number"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Número de emergência"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="esocial"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"E-social"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="access_code"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Código de acesso"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="time_clock_code"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Código de ponto"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="street"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Logradouro"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="street_number"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Número"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="street_complement"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Complemento"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="cep"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"CEP"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="residence_state_id"
        control={control}
        render={({ field }) => (
          <FormCreatableSelect
            label="Estado de residência"
            options={statesOptions}
            value={field.value}
            onChange={field.onChange}
            createOptionConfig={{
              endpoint: "/states",
            }}
          />
        )}
      />

      <Controller
        name="residence_city_id"
        control={control}
        render={({ field }) => (
          <FormCreatableSelect
            label="Cidade de residência"
            options={citiesOptions}
            value={field.value}
            onChange={field.onChange}
            createOptionConfig={{
              endpoint: "/cities",
              setOptions: setCitiesOptions,
            }}
          />
        )}
      />

      <Controller
        name="neighborhood_id"
        control={control}
        render={({ field }) => (
          <FormCreatableSelect
            label="Bairro de residência"
            options={neighborhoodsOptions}
            value={field.value}
            onChange={field.onChange}
            createOptionConfig={{
              endpoint: "/neighborhoods",
              setOptions: setNeighborhoodsOptions,
            }}
          />
        )}
      />

      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Telefone fixo"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="mobile"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Telefone celular"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"E-mail"}
            type={"email"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="ethnicitie_id"
        control={control}
        render={({ field }) => (
          <FormSelect
            label={"Etnia"}
            options={ethnicitiesOptions}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="datebirth"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Data de nascimento"}
            type={"date"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="nationalitie_id"
        control={control}
        render={({ field }) => (
          <FormCreatableSelect
            label="Nacionalidade"
            options={nationalitiesOptions}
            value={field.value}
            onChange={field.onChange}
            createOptionConfig={{
              endpoint: "/nationalities",
              setOptions: setNationalitiesOptions,
            }}
          />
        )}
      />

      <Controller
        name="birthstate_id"
        control={control}
        render={({ field }) => (
          <FormCreatableSelect
            label="Estado de nascimento"
            options={statesOptions}
            value={field.value}
            onChange={field.onChange}
            createOptionConfig={{
              endpoint: "/states",
              setOptions: setStatesOptions,
            }}
          />
        )}
      />

      <Controller
        name="birthcity_id"
        control={control}
        render={({ field }) => (
          <FormCreatableSelect
            label="Cidade de nascimento"
            options={citiesOptions}
            value={field.value}
            onChange={field.onChange}
            createOptionConfig={{
              endpoint: "/cities",
              setOptions: setCitiesOptions,
            }}
          />
        )}
      />

      <Controller
        name="mothername"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Nome da mãe"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="fathername"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Nome do pai"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="cpf"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"CPF"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="rg"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"RG"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="rg_issuing_agency"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Órgão emissor"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="rg_state_id"
        control={control}
        render={({ field }) => (
          <FormSelect
            label={"Estado"}
            options={statesOptions}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="rg_expedition_date"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Data de expedição"}
            type={"date"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="military_certificate"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Certificado de reservista"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="pis"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"PIS"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="pis_register_date"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Data de cadastro"}
            type={"date"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="votant_title"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Título de eleitor"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="votant_zone"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Zona"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="votant_session"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Sessão"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="ctps"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"CTPS"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="ctps_serie"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Série de CTPS"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="ctps_state"
        control={control}
        render={({ field }) => (
          <FormSelect
            label={"UF"}
            options={statesOptions}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="ctps_emission_date"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Data de emissão"}
            type={"date"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="cnh"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"CNH"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="cnh_category_id"
        control={control}
        render={({ field }) => (
          <FormSelect
            label={"Categoria"}
            options={cnhCategoriesOptions}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="cnh_emission_date"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Data de emissão"}
            type={"date"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="cnh_validity_date"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Validade"}
            type={"date"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="is_first_job"
        control={control}
        render={({ field }) => (
          <FormSelect
            label={"Primeiro emprego?"}
            options={trueFalseOptions}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      {/* <Controller
        name="already_has_been_employee"
        control={control}
        render={{{ field }) => (
          <FormSelect
            label={"Já foi empregado da empresa?"}
            options={trueFalseOptions}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      /> */}

      <Controller
        name="trade_union_contribution_this_year"
        control={control}
        render={({ field }) => (
          <FormSelect
            label={"Contribuição sindical nesse ano?"}
            options={trueFalseOptions}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="receiving_unemployment_insurance"
        control={control}
        render={({ field }) => (
          <FormSelect
            label={"Recebendo seguro desemprego?"}
            options={trueFalseOptions}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="monthly_wage"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Mensalista"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="hourly_wage"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"valor/horista"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="pro_rated_hours"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Proporcional a jornada"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="has_transport_voucher"
        control={control}
        render={({ field }) => (
          <FormSelect
            label={"Vale transporte?"}
            options={trueFalseOptions}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="daily_transport_units"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Carga diária"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="weekly_transport_units"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Carga semanal"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="monthly_transport_units"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Carga mensal"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="experience_time_id"
        control={control}
        render={({ field }) => (
          <FormSelect
            label={"Tempo de experiência"}
            options={experiencesTimesOptions}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="has_hazard_pay"
        control={control}
        render={({ field }) => (
          <FormSelect
            label={"Periculosidade?"}
            options={trueFalseOptions}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="has_unhealthy_pay"
        control={control}
        render={({ field }) => (
          <FormSelect
            label={"Insalubridade?"}
            options={trueFalseOptions}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="payment_method_id"
        control={control}
        render={({ field }) => (
          <FormSelect
            label={"Método de pagamento"}
            options={paymentMethodsOptions}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="bank_id"
        control={control}
        render={({ field }) => (
          <FormSelect
            label={"Banco"}
            options={banksOptions}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="bank_agency"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Agência do banco"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="bank_account"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Conta do banco"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="wage"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Salário"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="wage_advance"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Adiantamento salarial"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="health_insurance"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Plano de saúde"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="life_insurance"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"Seguro de vida"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="ag"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"AG"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="cc"
        control={control}
        render={({ field }) => (
          <FormInput
            label={"CC"}
            type={"text"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="has_harmfull_exposition"
        control={control}
        render={({ field }) => (
          <FormSelect
            label={"Exposição a agentes nocivos"}
            options={trueFalseOptions}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="drive_files_url"
        control={control}
        render={({ field }) => (
          <FormInputLink
            label={"Documentos anexos"}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="workdays_id"
        control={control}
        render={({ field }) => (
          <FormSelect
            label={"Semana de trabalho"}
            options={workdaysOptions}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />

      <Controller
        name="school_level_id"
        control={control}
        render={({ field }) => (
          <FormSelect
            label={"Escolaridade"}
            options={schoolLevelsOptions}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />
    </Dialog>
  )
}

export default EditEmployeesDialog