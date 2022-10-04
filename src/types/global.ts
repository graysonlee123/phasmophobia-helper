import React from 'react'

export {}

declare global {
  interface Ghost {
    slug: string
    name: string
    evidences: [EvidenceSlug, EvidenceSlug, EvidenceSlug]
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
    name: string
  }
}
