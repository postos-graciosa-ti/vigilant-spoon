import { useEffect, useState } from "react"
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

  const [streetComplement, setStreetComplement] = useState()

  const [selectedResidenceState, setSelectedResidenceState] = useState()

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
  }, [editEmployeesDialogOpen])

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

    setStreetComplement()

    setSelectedResidenceState()

    //

    setSelectedEmployee()

    getEmployeeList()

    setEditEmployeesDialogOpen(false)
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
      "street_complement": streetComplement,
      "residence_state_id": selectedResidenceState?.value,
    }

    patchRequest(`/employees/${selectedEmployee?.id}`, body)
      .then(() => handleClose())
  }

  return (
    <>
      <Dialog
        dialogOpen={editEmployeesDialogOpen}
        handleCloseDialog={handleClose}
        title={"Adicionar novo funcionário"}
        handleSubmitDialog={handleSubmit}
      >
        <FormInput
          label={"Nome"}
          type={"text"}
          setStateValue={setName}
          defaultValue={selectedEmployee?.name}
        />

        <FormInput
          label={"Tamanho de camisa"}
          type={"text"}
          setStateValue={setTshirtLen}
          defaultValue={selectedEmployee?.tshirt_len}
        />

        <FormInput
          label={"Tamanho de calça"}
          type={"text"}
          setStateValue={setLegsLen}
          defaultValue={selectedEmployee?.legs_len}
        />

        <FormInput
          label={"Tamanho de calçado"}
          type={"text"}
          setStateValue={setFeetLen}
          defaultValue={selectedEmployee?.feet_len}
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
          label={"Situação contratual"}
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

        <FormInput
          label={"Número de emergência"}
          type={"text"}
          setStateValue={setEmergencyNumber}
          defaultValue={selectedEmployee?.emergency_number}
        />

        <FormInput
          label={"E-social"}
          type={"text"}
          setStateValue={setEsocial}
          defaultValue={selectedEmployee?.esocial}
        />

        <FormInput
          label={"Código de acesso"}
          type={"text"}
          setStateValue={setAccessCode}
          defaultValue={selectedEmployee?.access_code}
        />

        <FormInput
          label={"Código de ponto"}
          type={"text"}
          setStateValue={setTimeClockCode}
          defaultValue={selectedEmployee?.time_clock_code}
        />

        <FormInput
          label={"Logradouro"}
          type={"text"}
          setStateValue={setStreet}
          defaultValue={selectedEmployee?.street}
        />

        <FormInput
          label={"Número"}
          type={"text"}
          setStateValue={setStreetNumber}
          defaultValue={selectedEmployee?.street_number}
        />

        <FormInput
          label={"CEP"}
          type={"text"}
          setStateValue={setCep}
          defaultValue={selectedEmployee?.cep}
        />

        <FormSelect
          label={"Cidade"}
          options={citiesOptions}
          setStateValue={setSelectedResidenceCity}
          defaultValue={selectedEmployee?.residence_city_id}
        />

        <FormSelect
          label={"Bairro"}
          options={neighborhoodsOptions}
          setStateValue={setSelectedNeighborhood}
          defaultValue={selectedEmployee?.neighborhood_id}
        />

        <FormInput
          label={"Telefone fixo"}
          type={"text"}
          setStateValue={setPhone}
          defaultValue={selectedEmployee?.phone}
        />

        <FormInput
          label={"Telefone celular"}
          type={"text"}
          setStateValue={setMobile}
          defaultValue={selectedEmployee?.mobile}
        />

        <FormInput
          label={"E-mail"}
          type={"email"}
          setStateValue={setEmail}
          defaultValue={selectedEmployee?.email}
        />

        <FormSelect
          label={"Etnia"}
          options={ethnicitiesOptions}
          setStateValue={setSelectedEthnicitie}
          defaultValue={selectedEmployee?.ethnicitie_id}
        />

        <FormInput
          label={"Data de nascimento"}
          type={"date"}
          setStateValue={setDatebirth}
          defaultValue={selectedEmployee?.datebirth}
        />

        <FormSelect
          label={"Estado"}
          options={statesOptions}
          setStateValue={setSelectedBirthstate}
          defaultValue={selectedEmployee?.birthstate_id}
        />

        <FormSelect
          label={"Cidade"}
          options={citiesOptions}
          setStateValue={setSelectedBirthcity}
          defaultValue={selectedEmployee?.birthcity_id}
        />

        <FormInput
          label={"Nome da mãe"}
          type={"text"}
          setStateValue={setMothername}
          defaultValue={selectedEmployee?.mothername}
        />

        <FormInput
          label={"Nome do pai"}
          type={"text"}
          setStateValue={setFathername}
          defaultValue={selectedEmployee?.fathername}
        />

        <FormInput
          label={"CPF"}
          type={"text"}
          setStateValue={setCpf}
          defaultValue={selectedEmployee?.cpf}
        />

        <FormInput
          label={"RG"}
          type={"text"}
          setStateValue={setRg}
          defaultValue={selectedEmployee?.rg}
        />

        <FormInput
          label={"Órgão emissor"}
          type={"text"}
          setStateValue={setRgIssuingAgency}
          defaultValue={selectedEmployee?.rg_issuing_agency}
        />

        <FormSelect
          label={"Estado"}
          options={statesOptions}
          setStateValue={setSelectedRgState}
          defaultValue={selectedEmployee?.rg_state_id}
        />

        <FormInput
          label={"Data de expedição"}
          type={"date"}
          setStateValue={setRgExpeditionDate}
          defaultValue={selectedEmployee?.rg_expedition_date}
        />

        <FormInput
          label={"Certificado de reservista"}
          type={"text"}
          setStateValue={setMilitaryCertificate}
          defaultValue={selectedEmployee?.military_certificate}
        />

        <FormInput
          label={"PIS"}
          type={"text"}
          setStateValue={setPis}
          defaultValue={selectedEmployee?.pis}
        />

        <FormInput
          label={"Data de cadastro"}
          type={"date"}
          setStateValue={setPisRegisterDate}
          defaultValue={selectedEmployee?.pis_register_date}
        />

        <FormInput
          label={"Título de eleitor"}
          type={"text"}
          setStateValue={setVotantTitle}
          defaultValue={selectedEmployee?.votant_title}
        />

        <FormInput
          label={"Zona"}
          type={"text"}
          setStateValue={setVotantZone}
          defaultValue={selectedEmployee?.votant_zone}
        />

        <FormInput
          label={"Sessão"}
          type={"text"}
          setStateValue={setVotantSession}
          defaultValue={selectedEmployee?.votant_session}
        />

        <FormInput
          label={"CTPS"}
          type={"text"}
          setStateValue={setCtps}
          defaultValue={selectedEmployee?.ctps}
        />

        <FormInput
          label={"Série de CTPS"}
          type={"text"}
          setStateValue={setCtpsSerie}
          defaultValue={selectedEmployee?.ctps_serie}
        />

        <FormSelect
          label={"UF"}
          options={statesOptions}
          setStateValue={setSelectedCtpsState}
          defaultValue={selectedEmployee?.ctps_state}
        />

        <FormInput
          label={"Data de emissão"}
          type={"date"}
          setStateValue={setCtpsEmissionDate}
          defaultValue={selectedEmployee?.ctps_emission_date}
        />

        <FormInput
          label={"CNH"}
          type={"text"}
          setStateValue={setCnh}
          defaultValue={selectedEmployee?.cnh}
        />

        <FormSelect
          label={"Categoria"}
          options={cnhCategoriesOptions}
          setStateValue={setSelectedCnhCategorie}
          defaultValue={selectedEmployee?.cnh_category_id}
        />

        <FormInput
          label={"Data de emissão"}
          type={"date"}
          setStateValue={setCnhEmissionDate}
          defaultValue={selectedEmployee?.cnh_emission_date}
        />

        <FormInput
          label={"Validade"}
          type={"date"}
          setStateValue={setCnhValidityDate}
          defaultValue={selectedEmployee?.cnh_validity_date}
        />

        <FormSelect
          label={"Primeiro emprego?"}
          options={trueFalseOptions}
          setStateValue={setIsFirstJob}
          defaultValue={selectedEmployee?.is_first_job}
        />

        <FormSelect
          label={"Já foi empregado da empresa?"}
          options={trueFalseOptions}
          setStateValue={setAlreadyHasBeenEmployee}
          defaultValue={selectedEmployee?.already_has_been_employee}
        />

        <FormSelect
          label={"Contribuição sindical nesse ano?"}
          options={trueFalseOptions}
          setStateValue={setTradeUnionContributionThisYear}
          defaultValue={selectedEmployee?.trade_union_contribution_this_year}
        />

        <FormSelect
          label={"Recebendo seguro desemprego?"}
          options={trueFalseOptions}
          setStateValue={setReceivingUnemploymentInsurance}
          defaultValue={selectedEmployee?.receiving_unemployment_insurance}
        />

        <FormInput
          label={"Mensalista"}
          type={"text"}
          setStateValue={setMonthlyWage}
          defaultValue={selectedEmployee?.monthly_wage}
        />

        <FormInput
          label={"valor/horista"}
          type={"text"}
          setStateValue={setHourlyWage}
          defaultValue={selectedEmployee?.hourly_wage}
        />

        <FormInput
          label={"Proporcional a jornada"}
          type={"text"}
          setStateValue={setProRatedHours}
          defaultValue={selectedEmployee?.pro_rated_hours}
        />

        <FormSelect
          label={"Vale transporte?"}
          options={trueFalseOptions}
          setStateValue={setHasTransportVoucher}
          defaultValue={selectedEmployee?.has_transport_voucher}
        />

        <FormInput
          label={"Carga diária"}
          type={"text"}
          setStateValue={setDailyTransportUnits}
          defaultValue={selectedEmployee?.daily_transport_units}
        />

        <FormInput
          label={"Carga semanal"}
          type={"text"}
          setStateValue={setWeeklyTransportUnits}
          defaultValue={selectedEmployee?.weekly_transport_units}
        />

        <FormInput
          label={"Carga mensal"}
          type={"text"}
          setStateValue={setMonthlyTransportUnits}
          defaultValue={selectedEmployee?.monthly_transport_units}
        />

        <FormSelect
          label={"Tempo de experiência"}
          options={experiencesTimesOptions}
          setStateValue={setSelectedExperienceTime}
          defaultValue={selectedEmployee?.experience_time_id}
        />

        <FormSelect
          label={"Periculosidade?"}
          options={trueFalseOptions}
          setStateValue={setHasHazardPay}
          defaultValue={selectedEmployee?.has_hazard_pay}
        />

        <FormSelect
          label={"Insalubridade?"}
          options={trueFalseOptions}
          setStateValue={setHasUnhealthyPay}
          defaultValue={selectedEmployee?.has_unhealthy_pay}
        />

        <FormSelect
          label={"Método de pagamento"}
          options={paymentMethodsOptions}
          setStateValue={setSelectedPaymentMethod}
          defaultValue={selectedEmployee?.payment_method_id}
        />

        <FormSelect
          label={"Banco"}
          options={banksOptions}
          setStateValue={setSelectedBank}
          defaultValue={selectedEmployee?.bank_id}
        />

        <FormInput
          label={"Agência do banco"}
          type={"text"}
          setStateValue={setBankAgency}
          defaultValue={selectedEmployee?.bank_agency}
        />

        <FormInput
          label={"Conta do banco"}
          type={"text"}
          setStateValue={setBankAccount}
          defaultValue={selectedEmployee?.bank_account}
        />

        <FormInput
          label={"Salário"}
          type={"text"}
          setStateValue={setWage}
          defaultValue={selectedEmployee?.wage}
        />

        <FormInput
          label={"Adiantamento salarial"}
          type={"text"}
          setStateValue={setWageAdvance}
          defaultValue={selectedEmployee?.wage_advance}
        />

        <FormSelect
          label={"Exposição a agente nocivo?"}
          options={trueFalseOptions}
          setStateValue={setHasHarmfullAgent}
          defaultValue={selectedEmployee?.has_harmfull_agents}
        />

        <FormInput
          label={"Plano de saúde"}
          type={"text"}
          setStateValue={setHealthInsurance}
          defaultValue={selectedEmployee?.health_insurance}
        />

        <FormInput
          label={"Seguro de vida"}
          type={"text"}
          setStateValue={setLifeInsurance}
          defaultValue={selectedEmployee?.life_insurance}
        />

        <FormInput
          label={"AG"}
          type={"text"}
          setStateValue={setAg}
          defaultValue={selectedEmployee?.ag}
        />

        <FormInput
          label={"CC"}
          type={"text"}
          setStateValue={setCc}
          defaultValue={selectedEmployee?.cc}
        />

        <FormSelect
          label={"Exposição a agentes nocivos"}
          options={trueFalseOptions}
          setStateValue={setHasHarmfullExposition}
          defaultValue={selectedEmployee?.has_harmfull_exposition}
        />

        <FormCreatableSelect
          label="Nacionalidade"
          options={nationalitiesOptions}
          onValueChange={setSelectedNationalitie}
          createOptionConfig={{
            endpoint: "/nationalities",
            setOptions: setNationalitiesOptions,
          }}
          defaultValue={selectedEmployee?.nationalitie_id}
        />

        <FormInputLink
          label={"Documentos anexos"}
          defaultValue={selectedEmployee?.drive_files_url}
          setStateValue={setDriveFilesUrl}
        />

        <FormInput
          label={"Complemento"}
          type={"text"}
          setStateValue={setStreetComplement}
          defaultValue={selectedEmployee?.street_complement}
        />

        <FormCreatableSelect
          label="Estado de residência"
          options={statesOptions}
          onValueChange={setSelectedResidenceState}
          createOptionConfig={{
            endpoint: "/states",
            setOptions: setStatesOptions,
          }}
          defaultValue={selectedEmployee?.residence_state_id}
        />
      </Dialog>
    </>
  )
}

export default EditEmployeesDialog
