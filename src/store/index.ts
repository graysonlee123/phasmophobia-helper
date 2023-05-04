import create from 'zustand'
import { createEvidencesSlice, EvidencesSlice } from './evidences'
import { createGhostsSlice, GhostsSlice } from './ghosts'
import { createPreferencesSlice, PreferencesSlice } from './preferences'

export const useStore = create<PreferencesSlice & GhostsSlice & EvidencesSlice>()((...a) => ({
  ...createPreferencesSlice(...a),
  ...createGhostsSlice(...a),
  ...createEvidencesSlice(...a),
}))

export const useShowConfetti = () => useStore((state) => state.showConfetti)
export const useSetShowConfetti = () => useStore((state) => state.setShowConfetti)
export const useEliminatedGhosts = () => useStore((state) => state.eliminatedGhosts)
export const useSetEliminatedGhosts = () => useStore((state) => state.setEliminatedGhosts)
export const useCheckedEvidences = () => useStore((state) => state.checkedEvidences)
export const useSetCheckedEvidences = () => useStore((state) => state.setCheckedEvidences)
export const useDisabledEvidences = () => useStore((state) => state.disabledEvidences)
export const useSetDisabledEvidences = () => useStore((state) => state.setDisabledEvidences)
