import Sanity from '@components/ui/Sanity'
import { useGhostContext } from './GhostContext'

export default function GhostSanity() {
  const { ghost } = useGhostContext()

  return <Sanity int={ghost.hunt} gutterLeft />
}
