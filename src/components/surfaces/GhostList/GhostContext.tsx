import { createContext, useContext } from 'react'

type GhostData = {
  ghost: Ghost
}

const GhostContext = createContext<GhostData | null>(null)

export const useGhostContext = () => {
  const context = useContext(GhostContext)

  if (!context) {
    throw new Error('Ghost* component must be rendered as a child of GhostList component.')
  }

  return context
}

export default GhostContext
