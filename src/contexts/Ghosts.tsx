import { createContext, ReactNode } from 'react'

export const GhostsContext = createContext<Ghosts>([])

interface GhostContextProviderProps {
  ghosts: Ghosts
  children: ReactNode
}

export function GhostsContextProvider({ ghosts, children }: GhostContextProviderProps) {
  return <GhostsContext.Provider value={ghosts}>{children}</GhostsContext.Provider>
}
