import { useEffect, useState } from "react"
import Dialog from "../../components/Dialog"
import FormInput from "../../components/FormInput"
import FormSelect from "../../components/FormSelect"
import postRequest from "../../requests/postRequest"
import useUserSessionStore from "../../stores/userSession"
import loadSelectOptions from "../../utils/loadSelectOptions"

const AddEmployeesDialog = (props) => {
  const { addEmployeesDialogOpen, setAddEmployeesDialogOpen, getEmployeeList } = props

  const joinedSubsidiarie = useUserSessionStore((state) => state.joinedSubsidiarie)

  const [name, setName] = useState()

  const [functionsOptions, setFunctionsOptions] = useState()

  const [selectedFunction, setSelectedFunction] = useState()

  const [turnsOptions, setTurnsOptions] = useState()

  const [selectedTurn, setSelectedTurn] = useState()

  const [admissionDate, setAdmissionDate] = useState()

  const [employeeStatusOptions, setEmployeeStatusOptions] = useState()

  const [selectedEmployeeStatus, setSelectedEmployeeStatus] = useState()

  const [departmentsOptions, setDepartmentsOptions] = useState()

  const [selectedDepartment, setSelectedDepartment] = useState()

  const [sectorsOptions, setSectorsOptions] = useState()

  const [selectedSector, setSelectedSector] = useState()

  const [hierarchyStructureOptions, setHierarchyStructureOptions] = useState()

  const [selectedHierarchyStructure, setSelectedHierarchyStructure] = useState()

  const [gendersOptions, setGendersOptions] = useState()

  const [selectedGender, setSelectedGender] = useState()

  const trueFalseOptions = [
    { "value": true, "label": "Sim" },
    { "value": false, "label": "Não" },
  ]

  const [hasPreviousExperience, setHasPreviousExperience] = useState()

  const [civilStatusOptions, setCivilStatusOptions] = useState()

  const [selectedCivilStatus, setSelectedCivilStatus] = useState()

  const [emergencyNumber, setEmergencyNumber] = useState()

  const [esocial, setEsocial] = useState()

  const [accessCode, setAccessCode] = useState()

  const [timeClockCode, setTimeClockCode] = useState()

  const [street, setStreet] = useState()

  const [streetNumber, setStreetNumber] = useState()

  const [cep, setCep] = useState()

  const [citiesOptions, setCitiesOptions] = useState()

  const [selectedResidenceCity, setSelectedResidenceCity] = useState()

  const [neighborhoodsOptions, setNeighborhoodsOptions] = useState()

  const [selectedNeighborhood, setSelectedNeighborhood] = useState()

  const [phone, setPhone] = useState()

  const [mobile, setMobile] = useState()

  useEffect(() => {
    Promise
      .all(
        [
          loadSelectOptions("/functions"),
          loadSelectOptions("turns"),
          loadSelectOptions("/employee-status"),
          loadSelectOptions("/departments"),
          loadSelectOptions("/sectors"),
          loadSelectOptions("/hierarchy-structure"),
          loadSelectOptions("/genders"),
          loadSelectOptions("civil-status"),
          loadSelectOptions("/cities"),
          loadSelectOptions("/neighborhoods")
        ]
      )
      .then((options) => {
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
      })
  }, [addEmployeesDialogOpen])

  const handleClose = () => {
    setName()

    setSelectedFunction()

    setSelectedTurn()

    setAdmissionDate()

    setSelectedEmployeeStatus()

    setSelectedDepartment()

    setSelectedSector()

    setSelectedHierarchyStructure()

    setSelectedGender()

    setSelectedCivilStatus()

    setEmergencyNumber()

    setEsocial()

    setAccessCode()

    setTimeClockCode()

    setStreet()

    setStreetNumber()

    setCep()

    setSelectedResidenceCity()

    setSelectedNeighborhood()

    setPhone()

    setMobile()

    //

    getEmployeeList()

    setAddEmployeesDialogOpen(false)
  }

  const handleSubmit = () => {
    let body = {
      "name": name,
      "subsidiarie_id": joinedSubsidiarie?.id,
      "function_id": selectedFunction?.value,
      "turn_id": selectedTurn?.value,
      "admission_date": admissionDate,
      "employee_status_id": selectedEmployeeStatus?.value,
      "department_id": selectedDepartment?.value,
      "sector_id": selectedSector?.value,
      "hierarchy_structure_id": selectedHierarchyStructure?.value,
      "gender_id": selectedGender?.value,
      "has_previous_experience": hasPreviousExperience?.value,
      "civil_status_id": selectedCivilStatus?.value,
      "emergency_number": emergencyNumber,
      "esocial": esocial,
      "access_code": accessCode,
      "time_clock_code": timeClockCode,
      "street": street,
      "street_number": streetNumber,
      "cep": cep,
      "residence_city_id": selectedResidenceCity?.value,
      "neighborhood_id": selectedNeighborhood?.value,
      "phone": phone,
      "mobile": mobile,
    }

    postRequest(`/subsidiaries/${joinedSubsidiarie?.id}/employees`, body)
      .then(() => handleClose())
  }

  return (
    <>
      <Dialog
        dialogOpen={addEmployeesDialogOpen}
        handleCloseDialog={handleClose}
        title={"Adicionar novo funcionário"}
        handleSubmitDialog={handleSubmit}
      >
        <FormInput
          label={"Nome"}
          type={"text"}
          setStateValue={setName}
        />

        <FormSelect
          label={"Função"}
          options={functionsOptions}
          setStateValue={setSelectedFunction}
        />

        <FormSelect
          label={"Turno"}
          options={turnsOptions}
          setStateValue={setSelectedTurn}
        />

        <FormInput
          label={"Data de admissão"}
          type={"date"}
          setStateValue={setAdmissionDate}
        />

        <FormSelect
          label={"Situação contratal"}
          options={employeeStatusOptions}
          setStateValue={setSelectedEmployeeStatus}
        />

        <FormSelect
          label={"Departamento"}
          options={departmentsOptions}
          setStateValue={setSelectedDepartment}
        />

        <FormSelect
          label={"Setor"}
          options={sectorsOptions}
          setStateValue={setSelectedSector}
        />

        <FormSelect
          label={"Estrutura hierarquica"}
          options={hierarchyStructureOptions}
          setStateValue={setSelectedHierarchyStructure}
        />

        <FormSelect
          label={"Sexo"}
          options={gendersOptions}
          setStateValue={setSelectedGender}
        />

        <FormSelect
          label={"Possui experiência prévia"}
          options={trueFalseOptions}
          setStateValue={setHasPreviousExperience}
        />

        <FormSelect
          label={"Estado civil"}
          options={civilStatusOptions}
          setStateValue={setSelectedCivilStatus}
        />

        <FormInput
          label={"Número de emergência"}
          type={"text"}
          setStateValue={setEmergencyNumber}
        />

        <FormInput
          label={"E-social"}
          type={"text"}
          setStateValue={setEsocial}
        />

        <FormInput
          label={"Código de acesso"}
          type={"text"}
          setStateValue={setAccessCode}
        />

        <FormInput
          label={"Código de ponto"}
          type={"text"}
          setStateValue={setTimeClockCode}
        />

        <FormInput
          label={"Logradouro"}
          type={"text"}
          setStateValue={setStreet}
        />

        <FormInput
          label={"Número"}
          type={"text"}
          setStateValue={setStreetNumber}
        />

        <FormInput
          label={"CEP"}
          type={"text"}
          setStateValue={setCep}
        />

        <FormSelect
          label={"Cidade"}
          options={citiesOptions}
          setStateValue={setSelectedResidenceCity}
        />

        <FormSelect
          label={"Bairro"}
          options={neighborhoodsOptions}
          setStateValue={setSelectedNeighborhood}
        />

        <FormInput
          label={"Telefone fixo"}
          type={"text"}
          setStateValue={setPhone}
        />

        <FormInput
          label={"Telefone celular"}
          type={"text"}
          setStateValue={setMobile}
        />
      </Dialog>
    </>
  )
}

export default AddEmployeesDialog
