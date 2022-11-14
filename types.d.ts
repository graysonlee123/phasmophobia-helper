/** Evidence */
type EvidenceId = 'dots' | 'emf' | 'fingerprints' | 'freezing' | 'orbs' | 'writing' | 'box'
type EvidenceIds = EvidenceId[]
type SetEvidenceState = (evidences: EvidenceIds) => void

interface Evidence {
  id: EvidenceId
  name: string
  url: string
  shortName?: string
  tip?: string
  ghosts?: GhostId[]
  about?: string
}
type Evidences = Evidence[]

/** Ghosts */

type GhostId =
  | 'banshee'
  | 'demon'
  | 'deogen'
  | 'goryo'
  | 'hantu'
  | 'jinn'
  | 'mare'
  | 'moroi'
  | 'myling'
  | 'obake'
  | 'oni'
  | 'onryo'
  | 'phantom'
  | 'poltergeist'
  | 'raiju'
  | 'revenant'
  | 'shade'
  | 'spirit'
  | 'thaye'
  | 'mimic'
  | 'twins'
  | 'wraith'
  | 'yokai'
  | 'yurei'
type GhostIds = GhostId[]
type SetGhostState = (ghosts: GhostState) => void
type GhostEvidences = [EvidenceId, EvidenceId, EvidenceId]

interface Ghost {
  id: GhostId
  name: string
  evidences: GhostEvidences
  url: string
  hunt?: number
  about?: string
}
type Ghosts = Ghost[]

/** Other */

type StorageKeys = 'checkedEvidences' | 'disabledEvidences' | 'minimizedGhosts'
type CheckboxState = boolean | null
type Tags = Tag[]

interface GtagEvent {
  name: string
  params?: {
    [index: string]: string | number
  }
}

interface Tag {
  slug: string
  label: string
  link: string
  important?: boolean
}
