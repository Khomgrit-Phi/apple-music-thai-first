import React from 'react'
import styles from './EqualizerBars.module.css'

export default function EqualizerBars({ color = '#FFFFFF', playing = true }) {
  return (
    <div className={styles.container} aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={styles.bar}
          style={{
            '--bar-color': color,
            '--bar-delay': `${i * 0.2}s`,
            animationPlayState: playing ? 'running' : 'paused',
          }}
        />
      ))}
    </div>
  )
}
