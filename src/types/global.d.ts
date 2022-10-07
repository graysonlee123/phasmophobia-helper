import React from 'react'

export {}

declare global {
  /** Ghosts */
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

  type GhostEvidences = [EvidenceSlug, EvidenceSlug, EvidenceSlug]

  interface Ghost {
    slug: GhostSlug
    label: string
    evidences: GhostEvidences
    hunt?: number
    desc: React.ReactElement
    wiki: string
  }

  type GhostState = GhostSlug[]
  type SetGhostState = (ghosts: GhostState) => void

  /** Evidences */
  type EvidenceSlug =
    | 'dots'
    | 'emf'
    | 'fingerprints'
    | 'freezing'
    | 'orbs'
    | 'writing'
    | 'box'

  interface Evidence {
    slug: EvidenceSlug
    label: string
    wiki: string
  }

  type EvidenceState = EvidenceSlug[]
  type SetEvidenceState = (evidences: EvidenceState) => void

  /** Other */
  type StorageKeys =
    | 'checkedEvidences'
    | 'disabledEvidences'
    | 'minimizedGhosts'

  type CheckboxState = 'neutral' | 'checked' | 'disabled' | 'locked'

  interface GtagEvent {
    name: string
    params?: {
      [index: string]: string | number
    }
  }
}
