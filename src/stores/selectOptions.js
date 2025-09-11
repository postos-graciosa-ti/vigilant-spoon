import { create } from "zustand"
import loadSelectOptions from "../utils/loadSelectOptions"

const useSelectOptionsStore = create((set) => ({
  monthsOptions: [
    { value: "01", label: "Janeiro" },
    { value: "02", label: "Fevereiro" },
    { value: "03", label: "Março" },
    { value: "04", label: "Abril" },
    { value: "05", label: "Maio" },
    { value: "06", label: "Junho" },
    { value: "07", label: "Julho" },
    { value: "08", label: "Agosto" },
    { value: "09", label: "Setembro" },
    { value: "10", label: "Outubro" },
    { value: "11", label: "Novembro" },
    { value: "12", label: "Dezembro" },
  ],

  docsOptions: [
    { value: "ethnicityDoc", label: "Autodeclaração étnico-racial" },
    { value: "ResponsabilityDoc", label: "Termo de responsabilidade" },
    { value: "HealthDoc", label: "Termo de ciência do protocolo de homologação de atestado" },
    { value: "WhatsAppDoc", label: "Termo de compromisso para utilização do grupo de WhatsApp" },
    { value: "IntegrationDoc", label: "Termo de confirmação de participação na integração" },
    { value: "WorkJourneyDoc", label: "Declaração de horário de trabalho" },
  ],

  trueFalseOptions: [
    { value: true, label: "Sim" },
    { value: false, label: "Não" },
  ],

  functionsOptions: [],

  turnsOptions: [],

  employeeStatusOptions: [],

  departmentsOptions: [],

  sectorsOptions: [],

  hierarchyStructureOptions: [],

  gendersOptions: [],

  civilStatusOptions: [],

  citiesOptions: [],

  neighborhoodsOptions: [],

  ethnicitiesOptions: [],

  statesOptions: [],

  cnhCategoriesOptions: [],

  experiencesTimesOptions: [],

  paymentMethodsOptions: [],

  banksOptions: [],

  nationalitiesOptions: [],

  workdaysOptions: [],

  schoolLevelsOptions: [],

  getFunctionsOptions: async () => {
    try {
      const functions = await loadSelectOptions("functions")

      set({ functionsOptions: functions })

      return functions

    } catch (error) {
      console.error("Erro ao carregar funções:", error)

    }
  },

  getTurnsOptions: async () => {
    try {
      const turns = await loadSelectOptions("turns")

      set({ turnsOptions: turns })

      return turns

    } catch (error) {
      console.error("Erro ao carregar turnos:", error)

    }
  },

  getEmployeeStatusOptions: async () => {
    try {
      const employeeStatus = await loadSelectOptions("employee-status")


      set({ employeeStatusOptions: employeeStatus })

      return employeeStatus

    } catch (error) {
      console.error("Erro ao carregar status de funcionário:", error)

    }
  },

  getDepartmentsOptions: async () => {
    try {
      const departments = await loadSelectOptions("departments")

      set({ departmentsOptions: departments })

      return departments

    } catch (error) {
      console.error("Erro ao carregar departamentos:", error)

    }
  },

  getSectorsOptions: async () => {
    try {
      const sectors = await loadSelectOptions("sectors")

      set({ sectorsOptions: sectors })

      return sectors

    } catch (error) {
      console.error("Erro ao carregar setores:", error)

    }
  },

  getOptions: async () => {
    try {
      const [
        functions,
        turns,
        employeeStatus,
        departments,
        sectors,
        hierarchyStructure,
        genders,
        civilStatus,
        cities,
        neighborhoods,
        ethnicities,
        states,
        cnhCategories,
        experiencesTimes,
        paymentMethods,
        banks,
        nationalities,
        workdays,
        schoolLevels,
      ] = await Promise.all([
        loadSelectOptions("functions"),
        loadSelectOptions("turns"),
        loadSelectOptions("employee-status"),
        loadSelectOptions("departments"),
        loadSelectOptions("sectors"),
        loadSelectOptions("hierarchy-structure"),
        loadSelectOptions("genders"),
        loadSelectOptions("civil-status"),
        loadSelectOptions("cities"),
        loadSelectOptions("neighborhoods"),
        loadSelectOptions("ethnicities"),
        loadSelectOptions("states"),
        loadSelectOptions("cnh-categories"),
        loadSelectOptions("experiences-times"),
        loadSelectOptions("payment-methods"),
        loadSelectOptions("banks"),
        loadSelectOptions("nationalities"),
        loadSelectOptions("workdays"),
        loadSelectOptions("school-levels"),
      ])

      set({
        functionsOptions: functions,
        turnsOptions: turns,
        employeeStatusOptions: employeeStatus,
        departmentsOptions: departments,
        sectorsOptions: sectors,
        hierarchyStructureOptions: hierarchyStructure,
        gendersOptions: genders,
        civilStatusOptions: civilStatus,
        citiesOptions: cities,
        neighborhoodsOptions: neighborhoods,
        ethnicitiesOptions: ethnicities,
        statesOptions: states,
        cnhCategoriesOptions: cnhCategories,
        experiencesTimesOptions: experiencesTimes,
        paymentMethodsOptions: paymentMethods,
        banksOptions: banks,
        nationalitiesOptions: nationalities,
        workdaysOptions: workdays,
        schoolLevelsOptions: schoolLevels,
      })

    } catch (error) {
      console.error("Erro ao carregar opções do select:", error)

    }
  },
}))

export default useSelectOptionsStore
