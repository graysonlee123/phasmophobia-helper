import { createContext, ReactNode } from 'react'

export const EvidencesContext = createContext<Evidences>([])

interface EvidencesContextProviderProps {
  evidences: Evidences
  children: ReactNode
}

export function EvidencesContextProvider({
  evidences,
  children,
}: EvidencesContextProviderProps) {
  return (
    <EvidencesContext.Provider value={evidences}>
      {children}
    </EvidencesContext.Provider>
  )
}
