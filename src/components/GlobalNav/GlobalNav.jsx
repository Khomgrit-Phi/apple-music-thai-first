import React from 'react'
import styles from './GlobalNav.module.css'

export default function GlobalNav({ title = 'Apple Music', rightAction }) {
  return (
    <nav className={styles.nav}>
      <span className={styles.title}>{title}</span>
      {rightAction && <div className={styles.right}>{rightAction}</div>}
    </nav>
  )
}
