import { useContext } from 'react'
import { EvidencesContext } from '@contexts/Evidences'

const useGhostEvidences = (ghost: Ghost) => {
  const evidences = useContext(EvidencesContext)

  return evidences.filter((evidence) => {
    return ghost.evidences.indexOf(evidence.id) > -1
  })
}

export default useGhostEvidences
