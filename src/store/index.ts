import create from 'zustand'
import { createEvidencesSlice, EvidencesSlice } from './evidences'
import { createGhostsSlice, GhostsSlice } from './ghosts'

export const useStore = create<GhostsSlice & EvidencesSlice>()((...a) => ({
  ...createGhostsSlice(...a),
  ...createEvidencesSlice(...a),
}))

export const useEliminatedGhosts = () => useStore((state) => state.eliminatedGhosts)
export const useSetEliminatedGhosts = () => useStore((state) => state.setEliminatedGhosts)
export const useCheckedEvidences = () => useStore((state) => state.checkedEvidences)
export const useSetCheckedEvidences = () => useStore((state) => state.setCheckedEvidences)
export const useDisabledEvidences = () => useStore((state) => state.disabledEvidences)
export const useSetDisabledEvidences = () => useStore((state) => state.setDisabledEvidences)
