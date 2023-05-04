import Writing from '@components/typography/Writing'
import { useGhostContext } from './GhostContext'

export default function GhostDescription() {
  const { ghost } = useGhostContext()

  return (
    <Writing markdown>
      {ghost.about ??
        `There is no description for this ghost. But, you can visit its [Wiki page](${ghost.url}).`}
    </Writing>
  )
}
