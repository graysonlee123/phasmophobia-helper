/** Evidence */
type EvidenceSlug =
  | 'dots'
  | 'emf'
  | 'fingerprints'
  | 'freezing'
  | 'orbs'
  | 'writing'
  | 'box'
type EvidenceState = EvidenceSlug[]
type SetEvidenceState = (evidences: EvidenceState) => void

interface Evidence {
  slug: EvidenceSlug
  label: string
  ghosts?: GhostSlug[]
  wiki: string
}

/** Ghosts */

type GhostEvidences = [EvidenceSlug, EvidenceSlug, EvidenceSlug]
type GhostSlug =
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
type GhostState = GhostSlug[]
type SetGhostState = (ghosts: GhostState) => void

interface Ghost {
  slug: GhostSlug
  label: string
  evidences: GhostEvidences
  hunt?: number
  desc: React.ReactElement
  wiki: string
}

/** Other */

type StorageKeys = 'checkedEvidences' | 'disabledEvidences' | 'minimizedGhosts'
type CheckboxState = 'neutral' | 'checked' | 'disabled' | 'locked'
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
