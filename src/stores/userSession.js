import { create } from 'zustand'

const useUserSessionStore = create((set) => ({
  bearerToken: "",

  userSession: {},

  joinedSubsidiarie: {},

  setBearerToken: (newBearerToken) => set(() => ({ bearerToken: newBearerToken })),

  setUserSession: (newUserSession) => set(() => ({ userSession: newUserSession })),

  setJoinedSubsidiarie: (newJoinedSubsidiarie) => set(() => ({ joinedSubsidiarie: newJoinedSubsidiarie }))
}))

export default useUserSessionStore
