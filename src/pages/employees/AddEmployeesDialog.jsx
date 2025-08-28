import { useEffect, useState } from "react"
import Dialog from "../../components/Dialog"
import FormCreatableSelect from "../../components/FormCreatableSelect"
import FormInput from "../../components/FormInput"
import FormInputLink from "../../components/FormInputLink"
import FormSelect from "../../components/FormSelect"
import postRequest from "../../requests/postRequest"
import useUserSessionStore from "../../stores/userSession"
import loadSelectOptions from "../../utils/loadSelectOptions"

const AddEmployeesDialog = (props) => {
  const { addEmployeesDialogOpen, setAddEmployeesDialogOpen, getEmployeeList } = props

  const joinedSubsidiarie = useUserSessionStore((state) => state.joinedSubsidiarie)

  const [name, setName] = useState()

  const [tshirtLen, setTshirtLen] = useState()

  const [legsLen, setLegsLen] = useState()

  const [feetLen, setFeetLen] = useState()

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

  const [email, setEmail] = useState()

  const [ethnicitiesOptions, setEthnicitiesOptions] = useState()

  const [selectedEthnicitie, setSelectedEthnicitie] = useState()

  const [datebirth, setDatebirth] = useState()

  const [statesOptions, setStatesOptions] = useState()

  const [selectedBirthstate, setSelectedBirthstate] = useState()

  const [selectedBirthcity, setSelectedBirthcity] = useState()

  const [mothername, setMothername] = useState()

  const [fathername, setFathername] = useState()

  const [cpf, setCpf] = useState()

  const [rg, setRg] = useState()

  const [rgIssuingAgency, setRgIssuingAgency] = useState()

  const [selectedRgState, setSelectedRgState] = useState()

  const [rgExpeditionDate, setRgExpeditionDate] = useState()

  const [militaryCertificate, setMilitaryCertificate] = useState()

  const [pis, setPis] = useState()

  const [pisRegisterDate, setPisRegisterDate] = useState()

  const [votantTitle, setVotantTitle] = useState()

  const [votantZone, setVotantZone] = useState()

  const [votantSession, setVotantSession] = useState()

  const [ctps, setCtps] = useState()

  const [ctpsSerie, setCtpsSerie] = useState()

  const [selectedCtpsState, setSelectedCtpsState] = useState()

  const [ctpsEmissionDate, setCtpsEmissionDate] = useState()

  const [cnh, setCnh] = useState()

  const [cnhCategoriesOptions, setCnhCategoriesOptions] = useState()

  const [selectedCnhCategorie, setSelectedCnhCategorie] = useState()

  const [cnhEmissionDate, setCnhEmissionDate] = useState()

  const [cnhValidityDate, setCnhValidityDate] = useState()

  const [isFirstJob, setIsFirstJob] = useState()

  const [alreadyHasBeenEmployee, setAlreadyHasBeenEmployee] = useState()

  const [tradeUnionContributionThisYear, setTradeUnionContributionThisYear] = useState()

  const [receivingUnemploymentInsurance, setReceivingUnemploymentInsurance] = useState()

  const [monthlyWage, setMonthlyWage] = useState()

  const [hourlyWage, setHourlyWage] = useState()

  const [proRatedHours, setProRatedHours] = useState()

  const [hasTransportVoucher, setHasTransportVoucher] = useState()

  const [dailyTransportUnits, setDailyTransportUnits] = useState()

  const [weeklyTransportUnits, setWeeklyTransportUnits] = useState()

  const [monthlyTransportUnits, setMonthlyTransportUnits] = useState()

  const [experiencesTimesOptions, setExperiencesTimesOptions] = useState()

  const [selectedExperienceTime, setSelectedExperienceTime] = useState()

  const [hasHazardPay, setHasHazardPay] = useState()

  const [hasUnhealthyPay, setHasUnhealthyPay] = useState()

  const [paymentMethodsOptions, setPaymentMethodsOptions] = useState()

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState()

  const [banksOptions, setBanksOptions] = useState()

  const [selectedBank, setSelectedBank] = useState()

  const [bankAgency, setBankAgency] = useState()

  const [bankAccount, setBankAccount] = useState()

  const [wage, setWage] = useState()

  const [wageAdvance, setWageAdvance] = useState()

  const [hasHarmfullAgent, setHasHarmfullAgent] = useState()

  const [healthInsurance, setHealthInsurance] = useState()

  const [lifeInsurance, setLifeInsurance] = useState()

  const [ag, setAg] = useState()

  const [cc, setCc] = useState()

  const [hasHarmfullExposition, setHasHarmfullExposition] = useState()

  const [nationalitiesOptions, setNationalitiesOptions] = useState()

  const [selectedNationalitie, setSelectedNationalitie] = useState()

  const [driveFilesUrl, setDriveFilesUrl] = useState()

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
          loadSelectOptions("/neighborhoods"),
          loadSelectOptions("/ethnicities"),
          loadSelectOptions("/states"),
          loadSelectOptions("/cnh-categories"),
          loadSelectOptions("/experiences-times"),
          loadSelectOptions("/payment-methods"),
          loadSelectOptions("/banks"),
          loadSelectOptions("/nationalities"),
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
          _ethnicitiesOptions,
          _statesOptions,
          _cnhCategoriesOptions,
          _experiencesTimesOptions,
          _paymentMethodsOptions,
          _banksOptions,
          _nationalitiesOptions,
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
      })
  }, [addEmployeesDialogOpen])

  const handleClose = () => {
    setName()

    setTshirtLen()

    setLegsLen()

    setFeetLen()

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

    setEmail()

    setSelectedEthnicitie()

    setDatebirth()

    setSelectedBirthstate()

    setSelectedBirthcity()

    setMothername()

    setFathername()

    setCpf()

    setRg()

    setRgIssuingAgency()

    setSelectedRgState()

    setRgExpeditionDate()

    setMilitaryCertificate()

    setPis()

    setPisRegisterDate()

    setVotantTitle()

    setVotantZone()

    setVotantSession()

    setCtps()

    setCtpsSerie()

    setSelectedCtpsState()

    setCtpsEmissionDate()

    setCnh()

    setSelectedCnhCategorie()

    setCnhEmissionDate()

    setCnhValidityDate()

    setIsFirstJob()

    setAlreadyHasBeenEmployee()

    setTradeUnionContributionThisYear()

    setReceivingUnemploymentInsurance()

    setMonthlyWage()

    setHourlyWage()

    setProRatedHours()

    setHasTransportVoucher()

    setDailyTransportUnits()

    setWeeklyTransportUnits()

    setMonthlyTransportUnits()

    setSelectedExperienceTime()

    setHasHazardPay()

    setHasUnhealthyPay()

    setSelectedPaymentMethod()

    setSelectedBank()

    setBankAgency()

    setBankAccount()

    setWage()

    setWageAdvance()

    setHasHarmfullAgent()

    setHealthInsurance()

    setLifeInsurance()

    setAg()

    setCc()

    setHasHarmfullExposition()

    setSelectedNationalitie()

    setDriveFilesUrl()

    //

    getEmployeeList()

    setAddEmployeesDialogOpen(false)
  }

  const handleSubmit = () => {
    let body = {
      "name": name,
      "tshirt_len": tshirtLen,
      "legs_len": legsLen,
      "feet_len": feetLen,
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
      "email": email,
      "ethnicitie_id": selectedEthnicitie?.value,
      "datebirth": datebirth,
      "birthstate_id": selectedBirthstate?.value,
      "birthcity_id": selectedBirthcity?.value,
      "mothername": mothername,
      "fathername": fathername,
      "cpf": cpf,
      "rg": rg,
      "rg_issuing_agency": rgIssuingAgency,
      "rg_state_id": selectedRgState?.value,
      "rg_expedition_date": rgExpeditionDate,
      "military_certificate": militaryCertificate,
      "pis": pis,
      "pis_register_date": pisRegisterDate,
      "votant_title": votantTitle,
      "votant_zone": votantZone,
      "votant_session": votantSession,
      "ctps": ctps,
      "ctps_serie": ctpsSerie,
      "ctps_state": selectedCtpsState?.value,
      "ctps_emission_date": ctpsEmissionDate,
      "cnh": cnh,
      "cnh_category_id": selectedCnhCategorie?.value,
      "cnh_emission_date": cnhEmissionDate,
      "cnh_validity_date": cnhValidityDate,
      "is_first_job": isFirstJob?.value,
      "already_has_been_employee": alreadyHasBeenEmployee?.value,
      "trade_union_contribution_this_year": tradeUnionContributionThisYear?.value,
      "receiving_unemployment_insurance": receivingUnemploymentInsurance?.value,
      "monthly_wage": monthlyWage,
      "hourly_wage": hourlyWage,
      "pro_rated_hours": proRatedHours,
      "has_transport_voucher": hasTransportVoucher?.value,
      "daily_transport_units": dailyTransportUnits,
      "weekly_transport_units": weeklyTransportUnits,
      "monthly_transport_units": monthlyTransportUnits,
      "experience_time_id": selectedExperienceTime?.value,
      "has_hazard_pay": hasHazardPay?.value,
      "has_unhealthy_pay": hasUnhealthyPay?.value,
      "payment_method_id": selectedPaymentMethod?.value,
      "bank_id": selectedBank?.value,
      "bank_agency": bankAgency,
      "bank_account": bankAccount,
      "wage": wage,
      "wage_advance": wageAdvance,
      "has_harmfull_agents": hasHarmfullAgent?.value,
      "health_insurance": healthInsurance,
      "life_insurance": lifeInsurance,
      "ag": ag,
      "cc": cc,
      "has_harmfull_exposition": hasHarmfullExposition?.value,
      "nationalitie_id": selectedNationalitie?.value,
      "drive_files_url": driveFilesUrl,
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

        <FormInput
          label={"Tamanho de camisa"}
          type={"text"}
          setStateValue={setTshirtLen}
        />

        <FormInput
          label={"Tamanho de calça"}
          type={"text"}
          setStateValue={setLegsLen}
        />

        <FormInput
          label={"Tamanho de calçado"}
          type={"text"}
          setStateValue={setFeetLen}
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
          label={"Situação contratual"}
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

        <FormInput
          label={"E-mail"}
          type={"email"}
          setStateValue={setEmail}
        />

        <FormSelect
          label={"Etnia"}
          options={ethnicitiesOptions}
          setStateValue={setSelectedEthnicitie}
        />

        <FormInput
          label={"Data de nascimento"}
          type={"date"}
          setStateValue={setDatebirth}
        />

        <FormSelect
          label={"Estado"}
          options={statesOptions}
          setStateValue={setSelectedBirthstate}
        />

        <FormSelect
          label={"Cidade"}
          options={citiesOptions}
          setStateValue={setSelectedBirthcity}
        />

        <FormInput
          label={"Nome da mãe"}
          type={"text"}
          setStateValue={setMothername}
        />

        <FormInput
          label={"Nome do pai"}
          type={"text"}
          setStateValue={setFathername}
        />

        <FormInput
          label={"CPF"}
          type={"text"}
          setStateValue={setCpf}
        />

        <FormInput
          label={"RG"}
          type={"text"}
          setStateValue={setRg}
        />

        <FormInput
          label={"Órgão emissor"}
          type={"text"}
          setStateValue={setRgIssuingAgency}
        />

        <FormSelect
          label={"Estado"}
          options={statesOptions}
          setStateValue={setSelectedRgState}
        />

        <FormInput
          label={"Data de expedição"}
          type={"date"}
          setStateValue={setRgExpeditionDate}
        />

        <FormInput
          label={"Certificado de reservista"}
          type={"text"}
          setStateValue={setMilitaryCertificate}
        />

        <FormInput
          label={"PIS"}
          type={"text"}
          setStateValue={setPis}
        />

        <FormInput
          label={"Data de cadastro"}
          type={"date"}
          setStateValue={setPisRegisterDate}
        />

        <FormInput
          label={"Título de eleitor"}
          type={"text"}
          setStateValue={setVotantTitle}
        />

        <FormInput
          label={"Zona"}
          type={"text"}
          setStateValue={setVotantZone}
        />

        <FormInput
          label={"Sessão"}
          type={"text"}
          setStateValue={setVotantSession}
        />

        <FormInput
          label={"CTPS"}
          type={"text"}
          setStateValue={setCtps}
        />

        <FormInput
          label={"Série de CTPS"}
          type={"text"}
          setStateValue={setCtpsSerie}
        />

        <FormSelect
          label={"UF"}
          options={statesOptions}
          setStateValue={setSelectedCtpsState}
        />

        <FormInput
          label={"Data de emissão"}
          type={"date"}
          setStateValue={setCtpsEmissionDate}
        />

        <FormInput
          label={"CNH"}
          type={"text"}
          setStateValue={setCnh}
        />

        <FormSelect
          label={"Categoria"}
          options={cnhCategoriesOptions}
          setStateValue={setSelectedCnhCategorie}
        />

        <FormInput
          label={"Data de emissão"}
          type={"date"}
          setStateValue={setCnhEmissionDate}
        />

        <FormInput
          label={"Validade"}
          type={"date"}
          setStateValue={setCnhValidityDate}
        />

        <FormSelect
          label={"Primeiro emprego?"}
          options={trueFalseOptions}
          setStateValue={setIsFirstJob}
        />

        <FormSelect
          label={"Já foi empregado da empresa?"}
          options={trueFalseOptions}
          setStateValue={setAlreadyHasBeenEmployee}
        />

        <FormSelect
          label={"Contribuição sindical nesse ano?"}
          options={trueFalseOptions}
          setStateValue={setTradeUnionContributionThisYear}
        />

        <FormSelect
          label={"Recebendo seguro desemprego?"}
          options={trueFalseOptions}
          setStateValue={setReceivingUnemploymentInsurance}
        />

        <FormInput
          label={"Mensalista"}
          type={"text"}
          setStateValue={setMonthlyWage}
        />

        <FormInput
          label={"valor/horista"}
          type={"text"}
          setStateValue={setHourlyWage}
        />

        <FormInput
          label={"Proporcional a jornada"}
          type={"text"}
          setStateValue={setProRatedHours}
        />

        <FormSelect
          label={"Vale transporte?"}
          options={trueFalseOptions}
          setStateValue={setHasTransportVoucher}
        />

        <FormInput
          label={"Carga diária"}
          type={"text"}
          setStateValue={setDailyTransportUnits}
        />

        <FormInput
          label={"Carga semanal"}
          type={"text"}
          setStateValue={setWeeklyTransportUnits}
        />

        <FormInput
          label={"Carga mensal"}
          type={"text"}
          setStateValue={setMonthlyTransportUnits}
        />

        <FormSelect
          label={"Tempo de experiência"}
          options={experiencesTimesOptions}
          setStateValue={setSelectedExperienceTime}
        />

        <FormSelect
          label={"Periculosidade?"}
          options={trueFalseOptions}
          setStateValue={setHasHazardPay}
        />

        <FormSelect
          label={"Insalubridade?"}
          options={trueFalseOptions}
          setStateValue={setHasUnhealthyPay}
        />

        <FormSelect
          label={"Método de pagamento"}
          options={paymentMethodsOptions}
          setStateValue={setSelectedPaymentMethod}
        />

        <FormSelect
          label={"Banco"}
          options={banksOptions}
          setStateValue={setSelectedBank}
        />

        <FormInput
          label={"Agência do banco"}
          type={"text"}
          setStateValue={setBankAgency}
        />

        <FormInput
          label={"Conta do banco"}
          type={"text"}
          setStateValue={setBankAccount}
        />

        <FormInput
          label={"Salário"}
          type={"text"}
          setStateValue={setWage}
        />

        <FormInput
          label={"Adiantamento salarial"}
          type={"text"}
          setStateValue={setWageAdvance}
        />

        <FormSelect
          label={"Exposição a agente nocivo?"}
          options={trueFalseOptions}
          setStateValue={setHasHarmfullAgent}
        />

        <FormInput
          label={"Plano de saúde"}
          type={"text"}
          setStateValue={setHealthInsurance}
        />

        <FormInput
          label={"Seguro de vida"}
          type={"text"}
          setStateValue={setLifeInsurance}
        />

        <FormInput
          label={"AG"}
          type={"text"}
          setStateValue={setAg}
        />

        <FormInput
          label={"CC"}
          type={"text"}
          setStateValue={setCc}
        />

        <FormSelect
          label={"Exposição a agentes nocivos"}
          options={trueFalseOptions}
          setStateValue={setHasHarmfullExposition}
        />

        <FormCreatableSelect
          label="Nacionalidade"
          options={nationalitiesOptions}
          onValueChange={setSelectedNationalitie}
          createOptionConfig={{
            endpoint: "/nationalities",
            setOptions: setNationalitiesOptions,
          }}
        />

        <FormInputLink
          label={"Documentos anexos"}
          stateValue={driveFilesUrl}
          setStateValue={setDriveFilesUrl}
        />
      </Dialog>
    </>
  )
}

export default AddEmployeesDialog
