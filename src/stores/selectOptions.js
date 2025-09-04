import { create } from 'zustand'
import loadSelectOptions from '../utils/loadSelectOptions'

const useSelectOptionsStore = create((set) => ({
  trueFalseOptions: [
    { value: true, label: "Sim" },
    { value: false, label: "Não" },
  ],

  functionsOptions: [],

  departmentsOptions: [],

  getOptions: async () => {
    try {
      const [functions, departments] = await Promise.all([
        loadSelectOptions('functions'),
        loadSelectOptions('departments'),
      ])

      set({
        functionsOptions: functions,
        departmentsOptions: departments,
      })

    } catch (error) {
      console.error('Erro ao carregar opções do select:', error)

    }
  },
}))

export default useSelectOptionsStore
