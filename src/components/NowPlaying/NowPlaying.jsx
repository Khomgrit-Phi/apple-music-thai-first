import React, { useState, useCallback } from 'react'
import styles from './NowPlaying.module.css'

function ChevronDownIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 9L12 16L19 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M7 4.5L27 16L7 27.5V4.5Z" fill="currentColor"/>
    </svg>
  )
}

function PauseIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="5" y="4" width="7" height="24" rx="2.5" fill="currentColor"/>
      <rect x="20" y="4" width="7" height="24" rx="2.5" fill="currentColor"/>
    </svg>
  )
}

function PrevIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="3" width="2.5" height="18" rx="1.25" fill="currentColor"/>
      <path d="M20 3.5L8 12L20 20.5V3.5Z" fill="currentColor"/>
    </svg>
  )
}

function NextIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="17.5" y="3" width="2.5" height="18" rx="1.25" fill="currentColor"/>
      <path d="M4 3.5L16 12L4 20.5V3.5Z" fill="currentColor"/>
    </svg>
  )
}

function ShuffleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M3 7h3l3 4-3 4H3M14 7h2l3 4-3 4h-2M6 7l6 8M6 15l6-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function RepeatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M3 9V6h16v5M19 13v3H3v-5M16 3l3 3-3 3M6 19l-3-3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function NowPlaying({
  src,
  title,
  artist,
  playing = false,
  progress = 0,
  duration = 0,
  currentTime = 0,
  shuffle = false,
  repeat = false,
  onClose,
  onPlayPause,
  onPrev,
  onNext,
  onShuffle,
  onRepeat,
  onSeek,
}) {
  const [isDragging, setIsDragging] = useState(false)
  const [localProgress, setLocalProgress] = useState(progress)

  const displayProgress = isDragging ? localProgress : progress
  const formatTime = (s) => {
    const m = Math.floor(s / 60)
    const sec = Math.floor(s % 60)
    return `${m}:${sec.toString().padStart(2, '0')}`
  }

  const handleSeekChange = useCallback((e) => {
    const p = Number(e.target.value) / 100
    setLocalProgress(p)
  }, [])

  const handleSeekEnd = useCallback((e) => {
    const p = Number(e.target.value) / 100
    setIsDragging(false)
    onSeek?.(p)
  }, [onSeek])

  return (
    <div className={styles.screen}>
      <div className={styles.header}>
        <button className={`${styles.closeBtn} btn-press`} onClick={onClose} aria-label="ย่อผู้เล่น">
          <ChevronDownIcon />
        </button>
      </div>

      <div className={styles.artworkWrap}>
        {src ? (
          <img
            className={`${styles.artwork} ${playing ? styles.artworkPlaying : ''}`}
            src={src}
            alt={title}
          />
        ) : (
          <div className={`${styles.artworkPlaceholder} ${playing ? styles.artworkPlaying : ''}`} aria-hidden="true" />
        )}
      </div>

      <div className={styles.info}>
        <div className={styles.titleRow}>
          <div className={styles.titleBlock}>
            <h1 className={`${styles.title} th-text`}>{title}</h1>
            <p className={`${styles.artist} th-text`}>{artist}</p>
          </div>
        </div>
      </div>

      <div className={styles.progressSection}>
        <input
          type="range"
          className={styles.slider}
          min={0}
          max={100}
          value={Math.round(displayProgress * 100)}
          onChange={handleSeekChange}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          onMouseUp={handleSeekEnd}
          onTouchEnd={handleSeekEnd}
          aria-label="ตำแหน่งเพลง"
        />
        <div className={styles.timeLabels}>
          <span className={styles.timeLabel}>{formatTime(currentTime)}</span>
          <span className={styles.timeLabel}>{duration > 0 ? `-${formatTime(duration - currentTime)}` : '0:00'}</span>
        </div>
      </div>

      <div className={styles.controls}>
        <button
          className={`${styles.tertiaryBtn} ${shuffle ? styles.active : ''} btn-press`}
          onClick={onShuffle}
          aria-label="สลับเพลง"
          aria-pressed={shuffle}
        >
          <ShuffleIcon />
        </button>
        <button className={`${styles.secondaryBtn} btn-press`} onClick={onPrev} aria-label="เพลงก่อนหน้า">
          <PrevIcon />
        </button>
        <button
          className={`${styles.primaryBtn} btn-press`}
          onClick={onPlayPause}
          aria-label={playing ? 'หยุดชั่วคราว' : 'เล่น'}
        >
          {playing ? <PauseIcon /> : <PlayIcon />}
        </button>
        <button className={`${styles.secondaryBtn} btn-press`} onClick={onNext} aria-label="เพลงถัดไป">
          <NextIcon />
        </button>
        <button
          className={`${styles.tertiaryBtn} ${repeat ? styles.active : ''} btn-press`}
          onClick={onRepeat}
          aria-label="เล่นซ้ำ"
          aria-pressed={repeat}
        >
          <RepeatIcon />
        </button>
      </div>

      <div className={styles.volumeSection}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M2 6h3l4-4v12L5 10H2V6z" fill="var(--color-body-muted)"/>
        </svg>
        <div className={styles.volumeTrack}>
          <div className={styles.volumeFill} style={{ width: '65%' }} />
        </div>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M2 6h3l4-4v12L5 10H2V6z" fill="var(--color-body-muted)"/>
          <path d="M11 4c1.5 1 2.5 2.4 2.5 4S12.5 11 11 12M9 5.5c.9.7 1.5 1.5 1.5 2.5S9.9 9.8 9 10.5" stroke="var(--color-body-muted)" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  )
}
