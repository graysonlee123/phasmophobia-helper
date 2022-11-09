import { ComponentPropsWithoutRef } from 'react'
import cn from 'classnames'
import styles from './Header.module.css'

interface HeaderProps extends ComponentPropsWithoutRef<'p'> {}

const Header = ({ className, ...rest }: HeaderProps) => {
  return <p className={cn([styles.header, className])} {...rest} />
}

export default Header
