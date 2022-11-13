import Link from 'next/link'
import { Fragment } from 'react'
import styles from './Navbar.module.css'

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

export default function Navbar() {
  return (
    <div className={styles.bar}>
      <ul>
        {links.map(({ href, label }) => (
          <Fragment key={href}>
            <li>
              <Link href={href}>{label}</Link>
            </li>
          </Fragment>
        ))}
      </ul>
    </div>
  )
}
