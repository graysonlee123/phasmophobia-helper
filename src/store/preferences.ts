import { StateCreator } from 'zustand'

export type PreferencesSlice = {
  showConfetti: boolean
  setShowConfetti: (payload: boolean) => void
}

export const createPreferencesSlice: StateCreator<PreferencesSlice> = (set) => ({
  showConfetti: true,
  setShowConfetti: (payload) => set({ showConfetti: payload }),
})
