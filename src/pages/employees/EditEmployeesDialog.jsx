import { useEffect, useState } from "react"
import Dialog from "../../components/Dialog"
import FormInput from "../../components/FormInput"
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
        ] = options

        setFunctionsOptions(_functionsOptions)

        setTurnsOptions(_turnsOptions)

        setEmployeeStatusOptions(_employeeStatusOptions)

        setDepartmentsOptions(_departmentsOptions)

        setSectorsOptions(_sectorsOptions)

        setHierarchyStructureOptions(_hierarchyStructureOptions)

        setGendersOptions(_gendersOptions)

        setCivilStatusOptions(_civilStatusOptions)
      })
  }, [editEmployeesDialogOpen])

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

    //

    setSelectedEmployee()

    getEmployeeList()

    setEditEmployeesDialogOpen(false)
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
    }

    patchRequest(`/employees/${selectedEmployee?.id}`, body)
      .then(() => handleClose())
  }

  console.log(selectedEmployee)

  return (
    <>
      <Dialog
        dialogOpen={editEmployeesDialogOpen}
        handleCloseDialog={handleClose}
        title={"Editar funcionário"}
        handleSubmitDialog={handleSubmit}
      >
        <FormInput
          label={"Nome"}
          type={"text"}
          setStateValue={setName}
          defaultValue={selectedEmployee?.name}
        />

        <FormSelect
          label={"Função"}
          options={functionsOptions}
          setStateValue={setSelectedFunction}
          defaultValue={selectedEmployee?.function_id}
        />

        <FormSelect
          label={"Turno"}
          options={turnsOptions}
          setStateValue={setSelectedTurn}
          defaultValue={selectedEmployee?.turn_id}
        />

        <FormInput
          label={"Data de admissão"}
          type={"date"}
          setStateValue={setAdmissionDate}
          defaultValue={selectedEmployee?.admission_date}
        />

        <FormSelect
          label={"Situação contratal"}
          options={employeeStatusOptions}
          setStateValue={setSelectedEmployeeStatus}
          defaultValue={selectedEmployee?.employee_status_id}
        />

        <FormSelect
          label={"Departamento"}
          options={departmentsOptions}
          setStateValue={setSelectedDepartment}
          defaultValue={selectedEmployee?.department_id}
        />

        <FormSelect
          label={"Setor"}
          options={sectorsOptions}
          setStateValue={setSelectedSector}
          defaultValue={selectedEmployee?.sector_id}
        />

        <FormSelect
          label={"Estrutura hierarquica"}
          options={hierarchyStructureOptions}
          setStateValue={setSelectedHierarchyStructure}
          defaultValue={selectedEmployee?.hierarchy_structure_id}
        />

        <FormSelect
          label={"Sexo"}
          options={gendersOptions}
          setStateValue={setSelectedGender}
          defaultValue={selectedEmployee?.gender_id}
        />

        <FormSelect
          label={"Possui experiência prévia"}
          options={trueFalseOptions}
          setStateValue={setHasPreviousExperience}
          defaultValue={selectedEmployee?.has_previous_experience}
        />

        <FormSelect
          label={"Estado civil"}
          options={civilStatusOptions}
          setStateValue={setSelectedCivilStatus}
          defaultValue={selectedEmployee?.civil_status_id}
        />
      </Dialog>
    </>
  )
}

export default EditEmployeesDialog
