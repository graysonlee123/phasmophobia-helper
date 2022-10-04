import { evidences } from '@data/evidences'

export function getEvidenceData(slug: string) {
  return evidences.find((evidence) => slug === evidence.slug)
}

export function getEvidenceName(slug: string) {
  const evidenceData = getEvidenceData(slug)

  if (undefined === evidenceData) {
    return ''
  }

  return evidenceData.name
}

export function ghostHasEvidence(ghost: Ghost, slug: string) {
  return ghost.evidences.indexOf(slug) > -1
}
