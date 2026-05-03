import React from 'react'
import styles from './MusicCard.module.css'

export default function MusicCard({
  src,
  title,
  meta,
  active = false,
  onClick,
}) {
  return (
    <button
      className={`${styles.card} ${active ? styles.active : ''} card-press`}
      onClick={onClick}
      aria-label={`${title}${meta ? ` — ${meta}` : ''}`}
    >
      <div className={styles.imageWrap}>
        {src ? (
          <img className={styles.image} src={src} alt={title} loading="lazy" />
        ) : (
          <div className={styles.placeholder} aria-hidden="true" />
        )}
      </div>
      <div className={styles.text}>
        <p className={`${styles.title} th-text`}>{title}</p>
        {meta && <p className={`${styles.meta} th-text`}>{meta}</p>}
      </div>
    </button>
  )
}
