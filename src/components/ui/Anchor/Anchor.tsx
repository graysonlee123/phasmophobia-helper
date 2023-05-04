import cn from 'classnames'
import { ComponentPropsWithoutRef } from 'react'
import styles from './Anchor.module.css'

export type AnchorProps = ComponentPropsWithoutRef<'a'>

const Anchor = ({ className, ...rest }: AnchorProps) => {
  return <a className={cn([styles.a, className])} {...rest} />
}

export default Anchor
