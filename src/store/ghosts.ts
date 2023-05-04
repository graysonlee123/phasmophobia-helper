import { StateCreator } from 'zustand'

export type GhostsSlice = {
  eliminatedGhosts: GhostIds
  setEliminatedGhosts: (payload: GhostIds) => void
}

export const createGhostsSlice: StateCreator<GhostsSlice> = (set) => ({
  eliminatedGhosts: [],
  setEliminatedGhosts: (minimizedGhosts) => set({ eliminatedGhosts: minimizedGhosts }),
})
