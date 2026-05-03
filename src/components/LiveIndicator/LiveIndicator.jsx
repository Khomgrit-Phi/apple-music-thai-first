import React from 'react'
import styles from './LiveIndicator.module.css'

export default function LiveIndicator({ label = 'กำลังเล่นที่นี่เลย' }) {
  return (
    <div className={styles.container}>
      <span className={styles.dot} aria-hidden="true" />
      <span className={`${styles.label} th-text`}>{label}</span>
    </div>
  )
}
