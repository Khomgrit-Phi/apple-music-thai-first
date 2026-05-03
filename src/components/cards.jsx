import React from 'react'
import Icon from './Icon/Icon.jsx'
import { Equalizer } from './chrome.jsx'
import { COPY } from '../data.js'

export function AlbumCard({ track, isPlaying, onClick, lang = 'th', size = 148, dark = false }) {
  const isThai = lang !== 'en'
  const title  = isThai ? track.title   : track.titleEn
  const artist = isThai ? track.artist.nameTh : track.artist.name
  return (
    <div onClick={onClick} style={{ width: size, flexShrink: 0, cursor: 'pointer', transition: 'transform 150ms ease' }}
      onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
      onMouseUp={(e)   => e.currentTarget.style.transform = 'scale(1)'}
      onMouseLeave={(e)=> e.currentTarget.style.transform = 'scale(1)'}
    >
      <div style={{
        position: 'relative', width: size, height: size, borderRadius: 12, overflow: 'hidden',
        background: '#000',
        outline: isPlaying ? '2px solid #FA233B' : 'none', outlineOffset: 2,
      }}>
        <img src={track.art} alt={title} style={{ width: '100%', height: '100%', display: 'block' }}/>
        {isPlaying && <>
          <span style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 3, background: '#FA233B' }}/>
          <Equalizer/>
        </>}
      </div>
      <div style={{
        marginTop: 8, fontSize: 15, fontWeight: 600,
        color: dark ? '#fff' : '#1D1D1F',
        lineHeight: 1.35, letterSpacing: 0,
        fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
        display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
      }}>{title}</div>
      <div style={{
        marginTop: 4, fontSize: 13,
        color: dark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.55)', letterSpacing: 0,
        fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
        overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',
      }}>{artist}</div>
    </div>
  )
}

export function AlbumRow({ tracks, currentId, onPlay, lang, dark, size = 148 }) {
  return (
    <div style={{
      display: 'flex', gap: 12, padding: '0 16px',
      overflowX: 'auto', scrollbarWidth: 'none', paddingBottom: 4,
    }}>
      {tracks.map(t => (
        <AlbumCard key={t.id} track={t} isPlaying={t.id === currentId}
          onClick={() => onPlay(t)} lang={lang} dark={dark} size={size}/>
      ))}
    </div>
  )
}

export function ChartRow({ rank, track, isPlaying, onPlay, lang = 'th', dark = false, showRank = true }) {
  const isThai = lang !== 'en'
  const title  = isThai ? track.title   : track.titleEn
  const artist = isThai ? track.artist.nameTh : track.artist.name
  return (
    <div onClick={() => onPlay(track)} style={{
      display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0',
      borderBottom: dark ? '0.5px solid rgba(255,255,255,0.08)' : '0.5px solid #F0F0F0',
      cursor: 'pointer', transition: 'transform 150ms ease',
    }}
      onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.99)'}
      onMouseUp={(e)   => e.currentTarget.style.transform = 'scale(1)'}
      onMouseLeave={(e)=> e.currentTarget.style.transform = 'scale(1)'}
    >
      {showRank && (
        <div style={{
          width: 22, textAlign: 'center', fontSize: 16, fontWeight: 700,
          fontFamily: 'var(--am-font-display)',
          color: rank <= 3 ? '#FA233B' : dark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.55)',
        }}>{rank}</div>
      )}
      <div style={{ width: 48, height: 48, borderRadius: 8, overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
        <img src={track.art} alt={title} style={{ width: '100%', height: '100%', display: 'block' }}/>
        {isPlaying && <Equalizer/>}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: 16, fontWeight: 600, color: dark ? '#fff' : '#1D1D1F', letterSpacing: 0,
          fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
          overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',
        }}>{title}</div>
        <div style={{
          fontSize: 14, color: dark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.55)', letterSpacing: 0,
          fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
          overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',
        }}>{artist}</div>
      </div>
      <button onClick={(e) => e.stopPropagation()} style={{
        width: 28, height: 28, color: dark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.55)',
        background: 'transparent', border: 0, cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Icon name="ellipsis" size={20}/>
      </button>
    </div>
  )
}

// HERO A — Classic protection-gradient
export function FeaturedCardClassic({ playlist, art, onPlay, lang = 'th' }) {
  const isThai = lang !== 'en'
  return (
    <div onClick={onPlay} style={{
      margin: '0 16px', borderRadius: 20, overflow: 'hidden',
      aspectRatio: '4/5', position: 'relative', cursor: 'pointer', background: '#3B2C8E',
      transition: 'transform 150ms ease',
    }}
      onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
      onMouseUp={(e)   => e.currentTarget.style.transform = 'scale(1)'}
      onMouseLeave={(e)=> e.currentTarget.style.transform = 'scale(1)'}
    >
      <img src={art} alt={playlist.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 50%, transparent 75%)' }}/>
      <div style={{ position: 'absolute', top: 16, left: 16, right: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{
          fontSize: 11, fontWeight: 700, color: '#FA233B',
          letterSpacing: '0.8px', textTransform: 'uppercase',
          background: '#fff', borderRadius: 4, padding: '3px 6px',
        }}>{playlist.kind}</span>
      </div>
      <div style={{ position: 'absolute', left: 20, right: 80, bottom: 20 }}>
        <div style={{
          fontSize: 26, fontWeight: 600, color: '#fff', lineHeight: 1.2, letterSpacing: 0,
          fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-display)',
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>{playlist.title}</div>
        <div style={{
          marginTop: 8, fontSize: 14, color: 'rgba(255,255,255,0.78)', letterSpacing: 0, fontWeight: 400,
          fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>{playlist.subtitle}</div>
        <div style={{
          marginTop: 10, fontSize: 12, color: 'rgba(255,255,255,0.6)', letterSpacing: 0,
          fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
        }}>{playlist.meta}</div>
      </div>
      <button onClick={(e) => { e.stopPropagation(); onPlay?.() }} style={{
        position: 'absolute', right: 20, bottom: 20,
        width: 52, height: 52, borderRadius: 9999,
        background: '#FA233B', border: 0, cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 8px 20px rgba(250,35,59,0.4)',
      }}>
        <Icon name="play.fill" size={22} color="#fff"/>
      </button>
    </div>
  )
}

// HERO B — Editorial-first (wide art + text block below)
export function FeaturedCardEditorial({ playlist, art, onPlay, lang = 'th' }) {
  const isThai = lang !== 'en'
  const t = COPY[lang]
  return (
    <div onClick={onPlay} style={{
      margin: '0 16px', borderRadius: 20, overflow: 'hidden', cursor: 'pointer',
      background: '#1D1D1F', position: 'relative', display: 'flex', flexDirection: 'column',
      transition: 'transform 150ms ease',
    }}
      onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
      onMouseUp={(e)   => e.currentTarget.style.transform = 'scale(1)'}
      onMouseLeave={(e)=> e.currentTarget.style.transform = 'scale(1)'}
    >
      <div style={{ position: 'relative', aspectRatio: '16/10' }}>
        <img src={art} alt={playlist.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.65) 100%)' }}/>
        <div style={{ position: 'absolute', top: 16, left: 16 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 12, fontWeight: 500, color: '#FA233B',
            letterSpacing: 0, lineHeight: 1,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 9999, background: '#FA233B', animation: 'amPulse 1.2s ease infinite' }}/>
            {playlist.kind}
          </span>
        </div>
      </div>
      <div style={{ padding: '20px 20px 22px', background: '#1D1D1F' }}>
        <div style={{
          fontSize: 24, fontWeight: 600, color: '#fff', lineHeight: 1.25, letterSpacing: 0,
          fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-display)',
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>{playlist.title}</div>
        <div style={{
          marginTop: 6, fontSize: 14, color: 'rgba(255,255,255,0.68)', letterSpacing: 0, lineHeight: 1.5,
          fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
        }}>{playlist.subtitle}</div>
        <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{
            fontSize: 12, color: 'rgba(255,255,255,0.5)', letterSpacing: 0,
            fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
          }}>{playlist.meta}</span>
          <button onClick={(e) => { e.stopPropagation(); onPlay?.() }} style={{
            display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 18px',
            borderRadius: 9999, background: '#FA233B', color: '#fff', border: 0, cursor: 'pointer',
            fontSize: 14, fontWeight: 600, letterSpacing: 0,
            fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
          }}>
            <Icon name="play.fill" size={14} color="#fff"/>
            <span>{t.play}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

// HERO C — Magazine-cover full-bleed
export function FeaturedCardMagazine({ playlist, art, onPlay, lang = 'th' }) {
  const isThai = lang !== 'en'
  const t = COPY[lang]
  return (
    <div onClick={onPlay} style={{
      margin: '0 16px', borderRadius: 20, overflow: 'hidden',
      aspectRatio: '3/4', position: 'relative', cursor: 'pointer', background: '#000',
      transition: 'transform 150ms ease',
    }}
      onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
      onMouseUp={(e)   => e.currentTarget.style.transform = 'scale(1)'}
      onMouseLeave={(e)=> e.currentTarget.style.transform = 'scale(1)'}
    >
      <img src={art} alt={playlist.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 30%, transparent 55%, rgba(0,0,0,0.85) 100%)' }}/>
      <div style={{ position: 'absolute', top: 18, left: 18, right: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#fff', letterSpacing: '1.5px', textTransform: 'uppercase', fontFamily: 'var(--am-font-thai)' }}>APPLE MUSIC ไทย</div>
          <div style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.75)', marginTop: 2, letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{playlist.kind}</div>
        </div>
        <span style={{
          width: 40, height: 40, borderRadius: 9999,
          background: '#FA233B', display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontSize: 10, fontWeight: 700,
          textAlign: 'center', lineHeight: 1.05, flexShrink: 0,
          fontFamily: 'var(--am-font-thai)',
        }}>{lang === 'en' ? 'NEW\nWEEK' : 'ใหม่\nสัปดาห์'}</span>
      </div>
      <div style={{ position: 'absolute', left: 20, right: 20, bottom: 22 }}>
        <div style={{
          fontSize: 32, fontWeight: 600, color: '#fff', lineHeight: 1.1, letterSpacing: 0,
          fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-display)',
        }}>{playlist.title}</div>
        <div style={{
          marginTop: 10, fontSize: 13, color: 'rgba(255,255,255,0.78)', letterSpacing: 0,
          fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
        }}>{playlist.subtitle}</div>
        <button onClick={(e) => { e.stopPropagation(); onPlay?.() }} style={{
          marginTop: 16, display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 22px',
          borderRadius: 9999, background: '#fff', color: '#1D1D1F', border: 0, cursor: 'pointer',
          fontSize: 15, fontWeight: 600, letterSpacing: 0,
          fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
        }}>
          <Icon name="play.fill" size={14} color="#FA233B"/>
          <span>{t.play}</span>
        </button>
      </div>
    </div>
  )
}

export function ArtistCircle({ artist, art, onClick, lang = 'th', dark = false, size = 84 }) {
  const isThai = lang !== 'en'
  const name = isThai ? artist.nameTh : artist.name
  return (
    <div onClick={onClick} style={{ width: size, flexShrink: 0, cursor: 'pointer', textAlign: 'center', transition: 'transform 150ms ease' }}
      onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
      onMouseUp={(e)   => e.currentTarget.style.transform = 'scale(1)'}
      onMouseLeave={(e)=> e.currentTarget.style.transform = 'scale(1)'}
    >
      <div style={{ width: size, height: size, borderRadius: 9999, overflow: 'hidden', background: '#000' }}>
        <img src={art} alt={name} style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}/>
      </div>
      <div style={{
        marginTop: 8, fontSize: 13, fontWeight: 500,
        color: dark ? '#fff' : '#1D1D1F',
        letterSpacing: 0, lineHeight: 1.3,
        fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
        display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
      }}>{name}</div>
    </div>
  )
}

export function GenreTile({ genre, lang = 'th', onClick }) {
  const isThai = lang !== 'en'
  const label = isThai ? genre.th : genre.en
  return (
    <div onClick={onClick} style={{
      flex: 1, aspectRatio: '16/10', borderRadius: 12, overflow: 'hidden',
      position: 'relative', background: genre.color, cursor: 'pointer',
      display: 'flex', alignItems: 'flex-end', padding: 12,
      transition: 'transform 150ms ease',
    }}
      onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.97)'}
      onMouseUp={(e)   => e.currentTarget.style.transform = 'scale(1)'}
      onMouseLeave={(e)=> e.currentTarget.style.transform = 'scale(1)'}
    >
      <div style={{
        position: 'absolute', right: -10, bottom: -16, width: 84, height: 84,
        borderRadius: 8, background: genre.accent, transform: 'rotate(18deg)', opacity: 0.85,
      }}/>
      <div style={{
        position: 'relative', fontSize: 17, fontWeight: 600, color: '#fff',
        letterSpacing: 0, lineHeight: 1.2, maxWidth: '70%',
        fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
      }}>{label}</div>
    </div>
  )
}
