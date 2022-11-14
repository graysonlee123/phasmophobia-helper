import { Fragment } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { motion } from 'framer-motion'
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
  const { pathname } = useRouter()
  const variants = {
    active: { opacity: 1 },
    inactive: { opacity: 0.6 },
  }

  return (
    <ul className={styles.list}>
      {links.map(({ href, label }) => {
        const isActive = pathname === href

        return (
          <Fragment key={href}>
            <li className={styles.item}>
              <motion.span variants={variants} animate={isActive ? 'active' : 'inactive'}>
                <Link href={href}>
                  <a className={styles.anchor}>{label}</a>
                </Link>
              </motion.span>
            </li>
          </Fragment>
        )
      })}
    </ul>
  )
}
