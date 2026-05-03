import React from 'react'
import styles from './GenrePill.module.css'

export default function GenrePill({ label, active = false, onClick }) {
  return (
    <button
      className={`${styles.pill} ${active ? styles.active : ''} btn-press`}
      onClick={onClick}
      aria-pressed={active}
    >
      <span className="th-text">{label}</span>
    </button>
  )
}

export function GenrePillRow({ pills = [], activePill, onPillClick }) {
  return (
    <div className={styles.row}>
      <div className={`${styles.scroll} scrollbar-hide`}>
        {pills.map((pill) => (
          <GenrePill
            key={pill.id}
            label={pill.label}
            active={activePill === pill.id}
            onClick={() => onPillClick?.(pill.id)}
          />
        ))}
      </div>
    </div>
  )
}
