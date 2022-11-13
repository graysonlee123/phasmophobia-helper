import { StateCreator } from 'zustand'

export interface GhostsSlice {
  eliminatedGhosts: GhostIds
  setEliminatedGhosts: (payload: GhostIds) => void
}

export const createGhostsSlice: StateCreator<GhostsSlice> = (set) => ({
  eliminatedGhosts: [],
  setEliminatedGhosts: (minimizedGhosts) => set({ eliminatedGhosts: minimizedGhosts }),
})
