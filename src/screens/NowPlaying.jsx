import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Icon from '../components/Icon/Icon.jsx'
import StatusBar from '../components/StatusBar/StatusBar.jsx'
import { COPY, SAMPLE_LYRICS_TH, SAMPLE_LYRICS_EN } from '../data.js'

const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`

function useDominantColor(src) {
  const [color, setColor] = useState('#0a0a0c')
  useEffect(() => {
    if (!src) return
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas')
        canvas.width = 8
        canvas.height = 8
        const ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0, 8, 8)
        const d = ctx.getImageData(0, 0, 8, 8).data
        let r = 0, g = 0, b = 0
        for (let i = 0; i < d.length; i += 4) { r += d[i]; g += d[i+1]; b += d[i+2] }
        const px = d.length / 4
        r = Math.round(r / px * 0.5)
        g = Math.round(g / px * 0.5)
        b = Math.round(b / px * 0.5)
        setColor(`rgb(${r},${g},${b})`)
      } catch { setColor('#0a0a0c') }
    }
    img.onerror = () => setColor('#0a0a0c')
    img.src = src
  }, [src])
  return color
}

// ── Classic (iOS 26) ─────────────────────────────────────────────────────
export function NowPlayingClassic({ track, playing, progress, onClose, onToggle, onSkip, onPrev, lang }) {
  if (!track) return null
  const isThai = lang !== 'en'
  const title  = isThai ? track.title   : track.titleEn
  const artist = isThai ? track.artist.nameTh : track.artist.name
  const cur    = Math.floor(progress * track.duration)
  const dur    = track.duration
  const bgColor = useDominantColor(track.art)

  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: `linear-gradient(180deg, ${bgColor} 0%, #080810 55%)`,
      zIndex: 300,
      display: 'flex', flexDirection: 'column', overflowY: 'auto',
      animation: 'amSheetIn 320ms cubic-bezier(0.32,0.72,0,1)',
    }}>
      <StatusBar dark/>

      {/* Drag handle */}
      <div style={{ display: 'flex', justifyContent: 'center', padding: '4px 0 8px' }}>
        <button onClick={onClose} style={{ width: 36, height: 5, borderRadius: 9999, background: 'rgba(255,255,255,0.3)', border: 0, padding: 0, cursor: 'pointer' }}/>
      </div>

      {/* Artwork */}
      <div style={{ padding: '8px 24px 12px', display: 'flex', justifyContent: 'center' }}>
        <div style={{
          width: '100%', maxWidth: 360, aspectRatio: '1 / 1',
          borderRadius: 24, overflow: 'hidden',
          boxShadow: '0 24px 80px rgba(0,0,0,0.7)',
          transform: playing ? 'scale(1)' : 'scale(0.88)',
          transition: 'transform 500ms cubic-bezier(0.32,0.72,0,1)',
        }}>
          <img src={track.art} alt={title} style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}/>
        </div>
      </div>

      {/* Controls panel — glass-dark */}
      <div style={{
        margin: '0 8px 12px',
        borderRadius: 24,
        background: 'rgba(30,30,32,0.75)',
        backdropFilter: 'saturate(200%) blur(24px)',
        WebkitBackdropFilter: 'saturate(200%) blur(24px)',
        border: '0.5px solid rgba(255,255,255,0.14)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -0.5px 0 rgba(0,0,0,0.30)',
        padding: '20px 20px 16px',
        color: '#fff',
        animation: 'panel-detach 400ms cubic-bezier(0.32,0.72,0,1)',
      }}>
        {/* Song info */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 20 }}>
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{
              fontSize: 20, fontWeight: 600, letterSpacing: 0, lineHeight: 1.3,
              fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-display)',
              display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
            }}>{title}</div>
            <div style={{
              fontSize: 14, color: '#FF6B81', fontWeight: 500, letterSpacing: 0, marginTop: 4,
              fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
              overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',
            }}>{artist}</div>
          </div>
          <button style={{
            width: 32, height: 32, borderRadius: 9999, color: 'rgba(255,255,255,0.50)',
            background: 'rgba(255,255,255,0.10)', border: 0, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}><Icon name="ellipsis" size={16}/></button>
        </div>

        {/* Scrubber */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ position: 'relative', height: 4, background: 'rgba(255,255,255,0.15)', borderRadius: 2 }}>
            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${progress * 100}%`, background: '#FFFFFF', borderRadius: 2 }}/>
            <div style={{
              position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)',
              left: `${progress * 100}%`,
              width: 12, height: 12, borderRadius: '50%',
              background: '#FFFFFF', boxShadow: '0 2px 6px rgba(0,0,0,0.5)',
              pointerEvents: 'none',
            }}/>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 12, color: 'rgba(255,255,255,0.55)' }}>
            <span>{fmt(cur)}</span>
            <span>-{fmt(dur - cur)}</span>
          </div>
        </div>

        {/* Playback controls */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <motion.button
            whileTap={{ scale: 0.88 }}
            onClick={onPrev}
            style={{ width: 48, height: 48, color: 'rgba(255,255,255,0.80)', background: 'transparent', border: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Icon name="backward.fill" size={28}/>
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={onToggle}
            style={{
              width: 56, height: 56, borderRadius: 9999, background: 'none', border: 0,
              color: '#FFFFFF', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <Icon name={playing ? 'pause.fill' : 'play.fill'} size={40}/>
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.88 }}
            onClick={onSkip}
            style={{ width: 48, height: 48, color: 'rgba(255,255,255,0.80)', background: 'transparent', border: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Icon name="forward.fill" size={28}/>
          </motion.button>
        </div>

        {/* Volume */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
          <Icon name="speaker.off" size={14} color="rgba(255,255,255,0.35)"/>
          <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,0.15)', borderRadius: 2 }}>
            <div style={{ width: '65%', height: '100%', background: 'rgba(255,255,255,0.60)', borderRadius: 2 }}/>
          </div>
          <Icon name="speaker" size={14} color="rgba(255,255,255,0.35)"/>
        </div>

        {/* Extra actions */}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 8px' }}>
          <button style={{ background: 'transparent', border: 0, cursor: 'pointer', color: 'rgba(255,255,255,0.50)' }}><Icon name="shuffle" size={24}/></button>
          <button style={{ background: 'transparent', border: 0, cursor: 'pointer', color: 'rgba(255,255,255,0.50)' }}><Icon name="airplay" size={24}/></button>
          <button onClick={() => window.__openQueue && window.__openQueue()} style={{ background: 'transparent', border: 0, cursor: 'pointer', color: 'rgba(255,255,255,0.50)' }}><Icon name="queue" size={24}/></button>
          <button style={{ background: 'transparent', border: 0, cursor: 'pointer', color: 'rgba(255,255,255,0.50)' }}><Icon name="repeat" size={24}/></button>
        </div>
      </div>
    </div>
  )
}

// ── Lyrics-Forward ────────────────────────────────────────────────────────
export function NowPlayingLyrics({ track, playing, progress, onClose, onToggle, onSkip, onPrev, lang }) {
  if (!track) return null
  const isThai  = lang !== 'en'
  const lyrics  = isThai ? SAMPLE_LYRICS_TH : SAMPLE_LYRICS_EN
  const activeIdx = Math.min(Math.floor(progress * lyrics.length), lyrics.length - 1)
  const title   = isThai ? track.title   : track.titleEn
  const artist  = isThai ? track.artist.nameTh : track.artist.name

  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 300, background: '#0E0E10',
      display: 'flex', flexDirection: 'column', color: '#fff',
      animation: 'amSheetIn 320ms cubic-bezier(0.32,0.72,0,1)',
    }}>
      <div style={{
        position: 'absolute', top: -50, left: -50, right: -50, height: 380,
        backgroundImage: `url(${track.art})`, backgroundSize: 'cover',
        filter: 'blur(50px) saturate(180%)', opacity: 0.4,
      }}/>
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <StatusBar dark/>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '4px 0 8px' }}>
          <button onClick={onClose} style={{ width: 36, height: 5, borderRadius: 9999, background: 'rgba(255,255,255,0.3)', border: 0, padding: 0, cursor: 'pointer' }}/>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 20px' }}>
          <div style={{ width: 56, height: 56, borderRadius: 8, overflow: 'hidden' }}>
            <img src={track.art} alt={title} style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}/>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontSize: 16, fontWeight: 600, letterSpacing: 0,
              fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
              overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',
            }}>{title}</div>
            <div style={{
              fontSize: 13, color: 'rgba(255,255,255,0.65)', letterSpacing: 0,
              fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
              overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',
            }}>{artist}</div>
          </div>
          <button onClick={onToggle} style={{
            width: 44, height: 44, borderRadius: 9999, background: '#fff', color: '#1D1D1F',
            border: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Icon name={playing ? 'pause.fill' : 'play.fill'} size={20}/>
          </button>
        </div>
        <div style={{ flex: 1, padding: '12px 24px 0', overflowY: 'auto' }}>
          {lyrics.map((line, i) => (
            <div key={i} style={{ marginBottom: 18 }}>
              <div style={{
                fontSize: i === activeIdx ? 30 : (i < activeIdx ? 24 : 24),
                fontWeight: 700,
                lineHeight: 1.5,
                letterSpacing: 0,
                color: i === activeIdx ? 'rgba(255,255,255,1.0)' : (i < activeIdx ? 'rgba(255,255,255,0.30)' : 'rgba(255,255,255,0.30)'),
                transform: i === activeIdx ? 'scale(1.02)' : 'scale(1)',
                transformOrigin: 'left',
                transition: 'all 400ms cubic-bezier(0.32,0.72,0,1)',
                fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
              }}>{line}</div>
              {i === activeIdx && (
                <div style={{
                  fontSize: 16, fontWeight: 400, color: 'rgba(255,255,255,0.55)',
                  fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
                  marginTop: 4,
                }}>
                  {isThai ? 'The starlight shining down on us' : 'แสงแห่งดาวที่ส่องลงมา'}
                </div>
              )}
            </div>
          ))}
        </div>
        <div style={{ padding: '0 24px 28px' }}>
          <div style={{ position: 'relative', height: 3, background: 'rgba(255,255,255,0.2)', borderRadius: 2 }}>
            <div style={{ position: 'absolute', inset: 0, width: `${progress * 100}%`, background: '#fff', borderRadius: 2 }}/>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24 }}>
            <button onClick={onPrev} style={{ background: 'transparent', border: 0, cursor: 'pointer', color: '#fff' }}><Icon name="backward.fill" size={26}/></button>
            <button style={{ background: 'transparent', border: 0, cursor: 'pointer', color: 'rgba(255,255,255,0.7)' }}><Icon name="shuffle" size={20}/></button>
            <button style={{ background: 'transparent', border: 0, cursor: 'pointer', color: 'rgba(255,255,255,0.7)' }}><Icon name="repeat" size={20}/></button>
            <button onClick={onSkip} style={{ background: 'transparent', border: 0, cursor: 'pointer', color: '#fff' }}><Icon name="forward.fill" size={26}/></button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Ambient ───────────────────────────────────────────────────────────────
export function NowPlayingAmbient({ track, playing, progress, onClose, onToggle, onSkip, onPrev, lang }) {
  if (!track) return null
  const isThai = lang !== 'en'
  const title  = isThai ? track.title   : track.titleEn
  const artist = isThai ? track.artist.nameTh : track.artist.name
  const t = COPY[lang]

  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 300, color: '#fff', overflow: 'hidden',
      animation: 'amSheetIn 320ms cubic-bezier(0.32,0.72,0,1)',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `url(${track.art})`, backgroundSize: 'cover', backgroundPosition: 'center',
        transform: playing ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 4s ease-out',
      }}/>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.85) 100%)' }}/>
      <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <StatusBar dark/>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 16px' }}>
          <button onClick={onClose} style={{
            width: 36, height: 36, borderRadius: 9999, background: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
            border: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
          }}><Icon name="chevron-down" size={20}/></button>
          <button style={{
            width: 36, height: 36, borderRadius: 9999, background: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
            border: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
          }}><Icon name="ellipsis" size={18}/></button>
        </div>
        <div style={{ flex: 1 }}/>
        <div style={{ padding: '0 24px 28px' }}>
          <div style={{
            fontSize: 11, fontWeight: 700, color: '#FF6B81', letterSpacing: '1.2px', textTransform: 'uppercase',
            fontFamily: 'var(--am-font-thai)',
          }}>{t.nowPlaying}</div>
          <div style={{
            marginTop: 10, fontSize: 32, fontWeight: 600, letterSpacing: 0, lineHeight: 1.15,
            fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-display)',
            display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>{title}</div>
          <div style={{
            marginTop: 6, fontSize: 16, color: 'rgba(255,255,255,0.78)', letterSpacing: 0,
            fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
            overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',
          }}>{artist}</div>
          <div style={{ marginTop: 22, position: 'relative', height: 3, background: 'rgba(255,255,255,0.25)', borderRadius: 2 }}>
            <div style={{ position: 'absolute', inset: 0, width: `${progress * 100}%`, background: '#fff', borderRadius: 2 }}/>
          </div>
          <div style={{ marginTop: 24, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 28 }}>
            <button onClick={onPrev} style={{ background: 'transparent', border: 0, cursor: 'pointer', color: '#fff', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="backward.fill" size={28}/>
            </button>
            <button onClick={onToggle} style={{
              width: 76, height: 76, borderRadius: 9999, background: 'rgba(255,255,255,0.18)',
              backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.3)',
              color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icon name={playing ? 'pause.fill' : 'play.fill'} size={32}/>
            </button>
            <button onClick={onSkip} style={{ background: 'transparent', border: 0, cursor: 'pointer', color: '#fff', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="forward.fill" size={28}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
