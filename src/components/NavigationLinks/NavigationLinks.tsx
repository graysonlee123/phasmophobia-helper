import { Fragment } from 'react'
import Link from 'next/link'
import styles from './NavigationLinks.module.css'

const links = [
  {
    href: '/',
    label: 'catch ghosts',
  },
  {
    href: '/evidence-glossary',
    label: 'evidence glossary',
  },
  {
    href: '/about',
    label: 'about',
  },
  {
    href: '/preferences',
    label: 'preferences',
  },
]

export default function NavigationLinks() {
  return (
    <ul className={styles.list}>
      {links.map(({ href, label }) => (
        <Fragment key={href}>
          <li className={styles.item}>
            <Link href={href}>
              <a className={styles.anchor}>{label}</a>
            </Link>
          </li>
        </Fragment>
      ))}
    </ul>
  )
}
