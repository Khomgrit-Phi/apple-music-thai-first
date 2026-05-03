import React from 'react'
import EqualizerBars from '../EqualizerBars/EqualizerBars'
import styles from './AlbumCard.module.css'

/**
 * AlbumCard Component
 * A card display for albums/tracks with artwork, title, artist, and play state
 *
 * @component
 * @param {Object} props
 * @param {string} props.src - Image source URL
 * @param {string} props.title - Album/track title
 * @param {string} props.artist - Artist name
 * @param {boolean} [props.playing=false] - Whether currently playing
 * @param {Function} props.onClick - Callback on card click
 */
function AlbumCard({ src, title, artist, playing = false, onClick }) {
  return (
    <button
      className={`${styles.card} card-press`}
      onClick={onClick}
      aria-label={`${title} — ${artist}`}
    >
      <div className={`${styles.imageWrap} ${playing ? styles.playing : ''}`}>
        {src ? (
          <img
            className={styles.image}
            src={src}
            alt={title}
            loading="lazy"
          />
        ) : (
          <div className={styles.placeholder} aria-hidden="true" />
        )}
        {playing && (
          <div className={styles.eqOverlay}>
            <EqualizerBars color="#FFFFFF" playing={playing} />
          </div>
        )}
        {playing && <div className={styles.progressBar} />}
      </div>
      <p className={`${styles.title} th-text`}>{title}</p>
      <p className={`${styles.artist} th-text`}>{artist}</p>
    </button>
  )
}

/**
 * AlbumCardRow Component
 * A horizontal scrolling row of AlbumCards
 *
 * @component
 * @param {Object} props
 * @param {Array} [props.cards=[]] - Array of card data objects
 * @param {string} props.playingId - ID of currently playing card
 * @param {Function} props.onCardClick - Callback on card click
 */
function AlbumCardRow({ cards = [], playingId, onCardClick }) {
  return (
    <div className={styles.row}>
      <div className={`${styles.scroll} scrollbar-hide`}>
        {cards.map((card) => (
          <AlbumCard
            key={card.id}
            src={card.src}
            title={card.title}
            artist={card.artist}
            playing={playingId === card.id}
            onClick={() => onCardClick?.(card.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default React.memo(AlbumCard)
export const MemoizedAlbumCardRow = React.memo(AlbumCardRow)
