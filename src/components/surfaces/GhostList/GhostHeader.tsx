import Intro from '@components/typography/Intro'
import HoverLink from '@components/ui/HoverLink'
import sendAnalyticsEvent from '@lib/sendAnalyticsEvents'
import { useEliminatedGhosts, useSetEliminatedGhosts } from '@store/index'
import arrayContains from '@utils/arrayContains'
import filterValueOut from '@utils/filterValueOut'
import pushUnique from '@utils/pushUnique'
import { ReactNode } from 'react'
import { useGhostContext } from './GhostContext'
import GhostMinimize from './GhostMinimize'
import GhostSanity from './GhostSanity'

type GhostHeaderProps = {
  sanity?: ReactNode
}

export default function GhostHeader({ sanity }: GhostHeaderProps) {
  const { ghost } = useGhostContext()
  const eliminatedGhosts = useEliminatedGhosts()
  const setEliminatedGhosts = useSetEliminatedGhosts()
  const eliminated = arrayContains(ghost.id, eliminatedGhosts)

  /**
   * Handles the click logic for minimizing the ghost.
   */
  function handleClick() {
    if (arrayContains(ghost.id, eliminatedGhosts)) {
      setEliminatedGhosts(filterValueOut(ghost.id, eliminatedGhosts))

      sendAnalyticsEvent({
        name: 'ghost_maximized',
        params: {
          ghost_slug: ghost.id,
        },
      })
    } else {
      setEliminatedGhosts(pushUnique(ghost.id, eliminatedGhosts))

      sendAnalyticsEvent({
        name: 'ghost_minimized',
        params: {
          ghost_slug: ghost.id,
        },
      })
    }
  }

  return (
    <Intro
      title={
        <>
          <Intro.Title>
            <HoverLink
              href={ghost.url}
              target="_blank"
              rel="noopener noreferrer"
              title={`View ${ghost.name} wiki page`}
            >
              {ghost.name}
            </HoverLink>{' '}
            {sanity}
          </Intro.Title>
        </>
      }
      after={<GhostMinimize onClick={handleClick} minimized={eliminated} />}
    />
  )
}

GhostHeader.Sanity = GhostSanity
