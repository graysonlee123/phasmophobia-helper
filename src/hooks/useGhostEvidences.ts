const useGhostEvidences = (ghost: Ghost, evidences: Evidence[]) => {
  return evidences.filter((evidence) => {
    return ghost.evidences.indexOf(evidence.slug) > -1
  })
}

export default useGhostEvidences
