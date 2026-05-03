import React from 'react'
import styles from './ChartItem.module.css'

function MoreIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="4.5" r="1.5" fill="currentColor"/>
      <circle cx="10" cy="10"  r="1.5" fill="currentColor"/>
      <circle cx="10" cy="15.5" r="1.5" fill="currentColor"/>
    </svg>
  )
}

export default function ChartItem({
  rank,
  src,
  title,
  artist,
  onMoreClick,
  onClick,
}) {
  const isTopThree = rank <= 3

  return (
    <div className={styles.item} role="button" tabIndex={0} onClick={onClick}>
      <span className={`${styles.rank} ${isTopThree ? styles.topThree : ''}`}>
        {rank}
      </span>
      <div className={styles.thumbnail}>
        {src ? (
          <img className={styles.image} src={src} alt={title} loading="lazy" />
        ) : (
          <div className={styles.placeholder} aria-hidden="true" />
        )}
      </div>
      <div className={styles.text}>
        <p className={`${styles.title} th-text`}>{title}</p>
        <p className={`${styles.artist} th-text`}>{artist}</p>
      </div>
      <button
        className={styles.more}
        onClick={(e) => { e.stopPropagation(); onMoreClick?.() }}
        aria-label="ตัวเลือกเพิ่มเติม"
      >
        <MoreIcon />
      </button>
    </div>
  )
}
