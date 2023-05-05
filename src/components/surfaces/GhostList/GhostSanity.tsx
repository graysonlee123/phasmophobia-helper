import { useGhostContext } from './GhostContext'
import Tag from '@components/ui/Tags/Tag'

export default function GhostSanity() {
  const { ghost } = useGhostContext()

  return ghost.hunt ? (
    <Tag variant={ghost.hunt > 50 ? 'danger' : 'success'} size="sm" title="Hunt sanity threshold">
      {ghost.hunt}%
    </Tag>
  ) : null
}
