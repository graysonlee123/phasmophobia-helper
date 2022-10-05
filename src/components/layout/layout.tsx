import { useEffect, useState } from 'react'
import Evidences from '@components/evidences'
import Ghosts from '@components/ghosts'
import { evidences } from '@data/evidences'
import { ghosts } from '@data/ghosts'
import { ghostHasEvidence } from '@lib/data'
import styles from './index.module.css'

export default function Layout() {
  const [checkedEvidences, setCheckedEvidences] = useState<EvidenceSlug[]>([])
  const [disabledEvidences, setDisabledEvidences] = useState<EvidenceSlug[]>([])
  const [possibleGhosts, setPossibleGhosts] = useState<GhostSlug[]>([])
  const [possibleEvidences, setPossibleEvidences] = useState<EvidenceSlug[]>([])

  /**
   * Checks to see if there is enough room in the `checkedEvidences` state.
   *
   * This state should never contain more than 3 values in it, since all ghost
   * types in Phasmophobia currently all have 3 defining evidences.
   *
   * @returns True if there is enough room, false otherwise.
   */
  function checkedEvidencesHasRoom() {
    return checkedEvidences.length < 4
  }

  /**
   * Checks to see if an evidence is currently checked.
   *
   * @param evidence The slug of the evidence to check.
   * @returns True if checked, false otherwise.
   */
  function evidenceIsChecked(evidence: EvidenceSlug) {
    return checkedEvidences.indexOf(evidence) > -1
  }

  /**
   * Checks to see if an evidence is currently disabled.
   *
   * @param evidence The slug of the evidence to check.
   * @returns True if disabled, false otherwise.
   */
  function evidenceIsDisabled(evidence: EvidenceSlug) {
    return disabledEvidences.indexOf(evidence) > -1
  }

  /**
   * Checks to see if an evidence is currently possible.
   *
   * @param evidence The slug of the evidence to check.
   * @returns True if possible, false otherwise.
   */
  function evidenceIsPossible(evidence: EvidenceSlug) {
    return possibleEvidences.indexOf(evidence) > -1
  }

  /**
   * Adds evidences to the checked state, if there is enough room.
   *
   * @param evidences An array of evidence slugs to add.
   */
  function addCheckedEvidences(evidences: EvidenceSlug[]) {
    const queue: EvidenceSlug[] = []

    evidences.forEach((slug) => {
      if (checkedEvidencesHasRoom() && !evidenceIsChecked(slug)) {
        queue.push(slug)
      }
    })

    setCheckedEvidences([...checkedEvidences, ...queue])
  }

  /**
   * Adds evidences to the disabled state.
   *
   * @param evidences An array of evidence slugs to add.
   */
  function addDisabledEvidences(evidences: EvidenceSlug[]) {
    const queue: EvidenceSlug[] = []

    evidences.forEach((slug) => {
      if (!evidenceIsDisabled(slug)) {
        queue.push(slug)
      }
    })

    setDisabledEvidences([...disabledEvidences, ...queue])
  }

  /**
   * Removes a single evidence from the checked state.
   *
   * @param evidence The slug of the evidence to remove.
   */
  function removeCheckedEvidence(evidence: EvidenceSlug) {
    setCheckedEvidences(checkedEvidences.filter((slug) => evidence !== slug))
  }

  /**
   * Removes a single evidence from the disabled state.
   *
   * @param evidence The slug of the evidence to remove.
   */
  function removeDisabledEvidence(evidence: EvidenceSlug) {
    setDisabledEvidences(disabledEvidences.filter((slug) => evidence !== slug))
  }

  /**
   * Gets a list of the currently possible ghost types.
   *
   * @param checkedEvidences The currently checked evidence slugs.
   * @param disabledEvidences The currently disabled evidence slugs.
   * @returns An array of ghost slugs.
   */
  function getPossibleGhosts(
    checkedEvidences: EvidenceSlug[],
    disabledEvidences: EvidenceSlug[]
  ) {
    return ghosts
      .filter(({ slug }) => {
        let passed = true

        /**
         * Don't show the ghost if it doesn't
         * have a checked evidence as a possibility.
         */
        checkedEvidences.forEach((evidence) => {
          if (!ghostHasEvidence(slug, evidence)) {
            passed = false
          }
        })

        /**
         * Don't show the ghost if it does
         * have a disabled evidence as a possibility.
         */
        disabledEvidences.forEach((evidence) => {
          if (ghostHasEvidence(slug, evidence)) {
            passed = false
          }
        })

        return passed
      })
      .map((ghost) => ghost.slug)
  }

  /**
   * Gets a list of the currently possible evidences.
   *
   * @param checkedEvidences The currently checked evidence slugs.
   * @returns An array of possible evidence slugs.
   */
  function getPossibleEvidences(checkedEvidences: EvidenceSlug[]) {
    const data: GhostEvidences[] = []

    /**
     * Loop through each user's checked evidence and test for
     * ghosts that have all checked evidences in their evidences list.
     */
    ghosts.forEach((ghost) => {
      const check = checkedEvidences.every((evidence) =>
        ghost.evidences.includes(evidence)
      )

      if (check) {
        data.push(ghost.evidences)
      }
    })

    /**
     * Using a set here to make an array with unique values.
     */
    const flat = Array.from(new Set(data.flat()))
    const result = evidences
      .filter(({ slug }) => flat.indexOf(slug) > -1)
      .map(({ slug }) => slug)

    return result
  }

  /**
   * Updates the possible evidence.
   */
  useEffect(
    function () {
      setPossibleEvidences(getPossibleEvidences(checkedEvidences))
    },
    [checkedEvidences]
  )

  /**
   * Updates the possible ghosts.
   */
  useEffect(
    function () {
      setPossibleGhosts(getPossibleGhosts(checkedEvidences, disabledEvidences))
    },
    [checkedEvidences, disabledEvidences]
  )

  return (
    <main className={styles.main}>
      <Evidences
        addCheckedEvidences={addCheckedEvidences}
        removeCheckedEvidence={removeCheckedEvidence}
        addDisabledEvidences={addDisabledEvidences}
        removeDisabledEvidence={removeDisabledEvidence}
        checkedEvidencesHasRoom={checkedEvidencesHasRoom}
        evidenceIsChecked={evidenceIsChecked}
        evidenceIsDisabled={evidenceIsDisabled}
        evidenceIsPossible={evidenceIsPossible}
      />
      <Ghosts
        possibleGhosts={possibleGhosts}
        addCheckedEvidences={addCheckedEvidences}
      />
    </main>
  )
}
