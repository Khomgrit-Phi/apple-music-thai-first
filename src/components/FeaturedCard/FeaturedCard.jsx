import React from 'react'
import styles from './FeaturedCard.module.css'

function PlayIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 4.5L20 12L6 19.5V4.5Z" fill="white" />
    </svg>
  )
}

export default function FeaturedCard({
  src,
  badge,
  title,
  meta,
  onPlay,
  onClick,
}) {
  return (
    <div
      className={`${styles.card} card-press`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
      aria-label={title}
    >
      {src ? (
        <img className={styles.image} src={src} alt={title} loading="lazy" />
      ) : (
        <div className={styles.imagePlaceholder} aria-hidden="true" />
      )}
      <div className={styles.overlay} />
      <div className={styles.content}>
        {badge && <span className={styles.badge}>{badge}</span>}
        <p className={`${styles.title} th-text`}>{title}</p>
        {meta && <p className={`${styles.meta} th-text`}>{meta}</p>}
      </div>
      <button
        className={`${styles.playBtn} btn-press`}
        onClick={(e) => { e.stopPropagation(); onPlay?.() }}
        aria-label="เล่น"
      >
        <PlayIcon />
      </button>
    </div>
  )
}
