import React from 'react'
import Icon from '../Icon/Icon.jsx'

/**
 * MiniPlayer Component
 * Compact player display showing current track with play/pause and skip controls
 *
 * @component
 * @param {Object} props
 * @param {Object} props.track - Current track object
 * @param {boolean} props.playing - Playback state
 * @param {Function} props.onToggle - Play/pause callback
 * @param {Function} props.onOpen - Expand to full player callback
 * @param {number} [props.progress=0] - Playback progress (0-1)
 * @param {string} [props.lang='th'] - Language code
 */
function MiniPlayer({
  track,
  playing,
  onToggle,
  onOpen,
  progress = 0,
  lang = 'th',
}) {
  if (!track) return null

  const isThai = lang !== 'en'
  const artist = isThai ? track.artist.nameTh : track.artist.name
  const title = isThai ? track.title : track.titleEn

  return (
    <div
      onClick={onOpen}
      role="button"
      tabIndex={0}
      aria-label={`Now playing: ${title} by ${artist}. Press to expand.`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onOpen()
        }
      }}
      style={{
        position: 'absolute',
        left: 8,
        right: 8,
        bottom: 84,
        height: 64,
        borderRadius: 20,
        background: 'rgba(30,30,32,0.75)',
        backdropFilter: 'saturate(200%) blur(24px)',
        WebkitBackdropFilter: 'saturate(200%) blur(24px)',
        border: '0.5px solid rgba(255,255,255,0.14)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -0.5px 0 rgba(0,0,0,0.30)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 12px',
        gap: 12,
        overflow: 'hidden',
        zIndex: 150,
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 8,
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        <img
          src={track.art}
          alt={`Album art for ${title}`}
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
          }}
        />
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
            fontSize: 16,
            fontWeight: 600,
            color: '#FFFFFF',
            lineHeight: 1.2,
            letterSpacing: 0,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
            fontSize: 13,
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.3,
            letterSpacing: 0,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}
        >
          {artist}
        </div>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation()
          onToggle?.()
        }}
        aria-label={playing ? 'Pause' : 'Play'}
        style={{
          width: 36,
          height: 36,
          borderRadius: 9999,
          background: 'rgba(255,255,255,0.15)',
          color: 'rgba(255,255,255,0.85)',
          border: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          padding: 0,
        }}
      >
        <Icon name={playing ? 'pause.fill' : 'play.fill'} size={22} />
      </button>

      <button
        onClick={(e) => e.stopPropagation()}
        aria-label="Skip to next track"
        style={{
          width: 28,
          height: 28,
          color: 'rgba(255,255,255,0.70)',
          background: 'rgba(255,255,255,0.10)',
          borderRadius: 9999,
          border: 0,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
        }}
      >
        <Icon name="forward.fill" size={22} />
      </button>

      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 2,
          background: 'rgba(255,255,255,0.10)',
          borderRadius: '0 0 20px 20px',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress * 100}%`,
            background: '#FF375F',
            borderRadius: '0 0 20px 20px',
          }}
        />
      </div>
    </div>
  )
}

export default React.memo(MiniPlayer)
