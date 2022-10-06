import React from 'react'

export {}

declare global {
  type StorageKeys =
    | 'checkedEvidences'
    | 'disabledEvidences'
    | 'minimizedGhosts'

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

  type CheckboxState = 'neutral' | 'checked' | 'disabled' | 'locked'
}
