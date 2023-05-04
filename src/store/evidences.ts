import { StateCreator } from 'zustand'

export type EvidencesSlice = {
  checkedEvidences: EvidenceIds
  setCheckedEvidences: (payload: EvidenceIds) => void
  disabledEvidences: EvidenceIds
  setDisabledEvidences: (payload: EvidenceIds) => void
}

export const createEvidencesSlice: StateCreator<EvidencesSlice> = (set) => ({
  checkedEvidences: [],
  setCheckedEvidences: (checkedEvidences) => set({ checkedEvidences }),
  disabledEvidences: [],
  setDisabledEvidences: (disabledEvidences) => set({ disabledEvidences }),
})
