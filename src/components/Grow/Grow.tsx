import { ReactNode, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { TransitionProps } from 'react-transition-group/Transition'
import styles from './Grow.module.css'

type GrowProps = TransitionProps & {
  children: ReactNode
}

const Grow = ({ children, ...rest }: GrowProps) => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <CSSTransition classNames={{ ...styles }} nodeRef={ref} {...rest}>
      <div ref={ref}>{children}</div>
    </CSSTransition>
  )
}

export default Grow
