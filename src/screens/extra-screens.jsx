import React, { useState } from 'react'
import Icon from '../components/Icon/Icon.jsx'
import StatusBar from '../components/StatusBar/StatusBar.jsx'
import SectionHeader from '../components/SectionHeader/SectionHeader.jsx'
import { GenreScroll } from '../components/chrome.jsx'
import { AlbumRow, ChartRow, ArtistCircle, GenreTile } from '../components/cards.jsx'
import { COPY, GENRE_FAMILIES, GENRE_MATCH, TH_ARTISTS } from '../data.js'

const GENRE_ARTISTS = [TH_ARTISTS.bodyslam, TH_ARTISTS.tilly, TH_ARTISTS.bowky, TH_ARTISTS.phum, TH_ARTISTS.threeman]
const GENRE_ARTIST_ART = [
  '/assets/artwork/album-03.jpg',
  '/assets/artwork/album-04.jpg',
  '/assets/artwork/album-11.jpg',
  '/assets/artwork/album-04.jpg',
  '/assets/artwork/album-08.jpg',
]

// ── Genre Detail ──────────────────────────────────────────────────────────
export function GenreDetail({ genre, tracks, onClose, onPlay, currentId, onOpenAlbum, onOpenArtist, lang, dark }) {
  const t = COPY[lang]
  const isThai = lang !== 'en'
  const label = isThai ? genre.th : genre.en
  const fg = dark ? '#fff' : '#1D1D1F'

  return (
    <div style={{
      position: 'absolute', inset: 0, background: dark ? '#1D1D1F' : '#fff',
      zIndex: 250, overflowY: 'auto',
      animation: 'amSheetIn 280ms cubic-bezier(0.32,0.72,0,1)',
    }}>
      <div style={{ position: 'relative', height: 280, background: genre.color, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -40, bottom: -60, width: 240, height: 240, borderRadius: 16, background: genre.accent, transform: 'rotate(15deg)', opacity: 0.85 }}/>
        <div style={{ position: 'absolute', right: 40, top: 60, width: 100, height: 100, borderRadius: 12, background: 'rgba(255,255,255,0.18)', transform: 'rotate(-8deg)' }}/>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0 }}><StatusBar dark/></div>
        <div style={{ position: 'absolute', top: 50, left: 16 }}>
          <button onClick={onClose} style={{
            width: 32, height: 32, borderRadius: 9999, background: 'rgba(0,0,0,0.3)',
            border: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
          }}><Icon name="chevron-left" size={20}/></button>
        </div>
        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 100 }}>
          <div style={{
            fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.75)', letterSpacing: '1.2px', textTransform: 'uppercase',
            fontFamily: 'var(--am-font-thai)',
          }}>{isThai ? 'แนวเพลง' : 'GENRE'}</div>
          <div style={{
            marginTop: 8, fontSize: 38, fontWeight: 600, color: '#fff', letterSpacing: 0, lineHeight: 1.05,
            fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-display)',
          }}>{label}</div>
        </div>
      </div>

      <SectionHeader title={isThai ? 'เพลงยอดนิยม' : 'Top Songs'} link={t.seeAll} lang={lang} dark={dark}/>
      <div style={{ padding: '0 16px' }}>
        {tracks.slice(0, 6).map((tk, i) => (
          <ChartRow key={tk.id + i} rank={i + 1} track={tk} isPlaying={tk.id === currentId} onPlay={onPlay} lang={lang} dark={dark}/>
        ))}
      </div>

      <SectionHeader title={isThai ? 'ศิลปินยอดนิยม' : 'Top Artists'} link={t.seeAll} lang={lang} dark={dark}/>
      <div style={{ display: 'flex', gap: 14, padding: '0 16px', overflowX: 'auto', scrollbarWidth: 'none' }}>
        {GENRE_ARTISTS.map((a, i) => (
          <ArtistCircle key={i} artist={a} art={GENRE_ARTIST_ART[i]} lang={lang} dark={dark} onClick={() => onOpenArtist?.(a)}/>
        ))}
      </div>

      <SectionHeader title={isThai ? 'อัลบั้มต้องฟัง' : 'Essential Albums'} link={t.seeAll} lang={lang} dark={dark}/>
      <AlbumRow tracks={tracks.slice(2, 9)} currentId={currentId}
        onPlay={(t2) => onOpenAlbum ? onOpenAlbum(t2) : onPlay(t2)} lang={lang} dark={dark}/>
      <div style={{ height: 160 }}/>
    </div>
  )
}

// ── Onboarding ────────────────────────────────────────────────────────────
export function Onboarding({ onClose, lang, dark }) {
  const isThai = lang !== 'en'
  const [step, setStep] = useState(0)
  const [picked, setPicked] = useState(new Set(['tpop', 'indie']))
  const fg = dark ? '#fff' : '#1D1D1F'
  const muted = dark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.55)'

  const togglePick = (id) => {
    const s = new Set(picked)
    s.has(id) ? s.delete(id) : s.add(id)
    setPicked(s)
  }

  return (
    <div style={{
      position: 'absolute', inset: 0, background: dark ? '#0E0E10' : '#fff',
      zIndex: 400, display: 'flex', flexDirection: 'column',
      animation: 'amSheetIn 280ms cubic-bezier(0.32,0.72,0,1)',
    }}>
      <StatusBar dark={dark}/>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 16px' }}>
        <div style={{ display: 'flex', gap: 4 }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              width: 24, height: 3, borderRadius: 2,
              background: i <= step ? '#FA233B' : dark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)',
            }}/>
          ))}
        </div>
        <button onClick={onClose} style={{
          background: 'transparent', border: 0, color: muted, fontSize: 14, cursor: 'pointer',
          fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
        }}>{isThai ? 'ข้าม' : 'Skip'}</button>
      </div>

      {step === 0 && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 28px', textAlign: 'center' }}>
          <div style={{ width: 100, height: 100, borderRadius: 24, background: '#FA233B', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="sparkle" size={56} color="#fff"/>
          </div>
          <div style={{
            marginTop: 32, fontSize: 30, fontWeight: 600, color: fg, letterSpacing: 0, lineHeight: 1.2,
            fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-display)',
            whiteSpace: 'pre-line',
          }}>
            {isThai ? 'ยินดีต้อนรับสู่\nApple Music ไทย' : 'Apple Music\nfor Thailand'}
          </div>
          <div style={{
            marginTop: 14, fontSize: 16, color: muted, letterSpacing: 0, lineHeight: 1.5,
            fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
          }}>
            {isThai
              ? 'ค้นพบเพลงไทยในแบบของคุณ ตั้งแต่ลูกทุ่งถึงที-ป๊อป รวมในที่เดียว'
              : 'Discover Thai music your way — from Luk Thung to T-Pop, all in one place.'}
          </div>
        </div>
      )}

      {step === 1 && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '20px 20px 0', overflowY: 'auto' }}>
          <div style={{
            fontSize: 26, fontWeight: 600, color: fg, letterSpacing: 0, lineHeight: 1.25,
            fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-display)',
          }}>{isThai ? 'แนวเพลงที่คุณชอบ' : 'What sounds good?'}</div>
          <div style={{
            marginTop: 6, fontSize: 14, color: muted, letterSpacing: 0,
            fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
          }}>{isThai ? 'เลือกอย่างน้อย 3 แนว' : 'Pick at least 3 to start'}</div>
          <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {GENRE_FAMILIES.map(g => {
              const on = picked.has(g.id)
              const lbl = isThai ? g.th : g.en
              return (
                <button key={g.id} onClick={() => togglePick(g.id)} style={{
                  position: 'relative', aspectRatio: '16/10', borderRadius: 12,
                  background: on ? g.color : dark ? 'rgba(255,255,255,0.08)' : '#F5F5F7',
                  border: on ? '2px solid #FA233B' : '2px solid transparent',
                  cursor: 'pointer', overflow: 'hidden', padding: 12,
                  display: 'flex', alignItems: 'flex-end', transition: 'all 200ms',
                }}>
                  {on && <div style={{ position: 'absolute', right: -10, bottom: -16, width: 70, height: 70, borderRadius: 8, background: g.accent, transform: 'rotate(18deg)', opacity: 0.85 }}/>}
                  <div style={{
                    position: 'relative', fontSize: 16, fontWeight: 600,
                    color: on ? '#fff' : fg, letterSpacing: 0, textAlign: 'left',
                    fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-display)',
                  }}>{lbl}</div>
                  {on && (
                    <div style={{ position: 'absolute', top: 8, right: 8, width: 22, height: 22, borderRadius: 9999, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name="check" size={14} color="#FA233B"/>
                    </div>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {step === 2 && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 24px' }}>
          <div style={{
            fontSize: 28, fontWeight: 600, color: fg, letterSpacing: 0, lineHeight: 1.2, textAlign: 'center',
            fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-display)',
          }}>{isThai ? 'ทดลองใช้ Apple Music' : 'Try Apple Music'}</div>
          <div style={{
            marginTop: 10, fontSize: 14, color: muted, letterSpacing: 0, lineHeight: 1.5, textAlign: 'center',
            fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
          }}>{isThai ? 'ทดลองฟรี 1 เดือน หลังจากนั้น 129 บาท/เดือน' : 'One month free, then ฿129/month'}</div>
          <div style={{ marginTop: 28, padding: 18, borderRadius: 14, background: dark ? 'rgba(255,255,255,0.06)' : '#F5F5F7' }}>
            {[
              { th: 'ฟังเพลงไทยกว่า 100 ล้านเพลง', en: '100M+ songs incl. Thai catalog' },
              { th: 'ดาวน์โหลดฟังออฟไลน์', en: 'Listen offline' },
              { th: 'จ่ายผ่าน TrueMoney หรือ PromptPay', en: 'Pay with TrueMoney or PromptPay' },
            ].map((row, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '8px 0' }}>
                <div style={{ width: 22, height: 22, borderRadius: 9999, background: '#FA233B', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name="check" size={12} color="#fff"/>
                </div>
                <span style={{
                  fontSize: 14, color: fg, letterSpacing: 0,
                  fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
                }}>{isThai ? row.th : row.en}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ padding: '20px 20px 32px', flexShrink: 0 }}>
        <button onClick={() => step < 2 ? setStep(step + 1) : onClose()} style={{
          width: '100%', height: 50, borderRadius: 14, background: '#FA233B', color: '#fff',
          border: 0, cursor: 'pointer', fontSize: 16, fontWeight: 600,
          fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
        }}>
          {step === 0 ? (isThai ? 'เริ่มต้น' : 'Get Started') :
           step === 1 ? (isThai ? 'ถัดไป' : 'Continue') :
           (isThai ? 'เริ่มทดลองฟรี' : 'Start Free Trial')}
        </button>
      </div>
    </div>
  )
}

// ── Search Tab (with sticky genre filter) ─────────────────────────────────
export function SearchTab({ tracks, currentId, onPlay, onOpenAlbum, onOpenArtist, onOpenGenre, onShowResults, lang, dark }) {
  const t = COPY[lang]
  const isThai = lang !== 'en'
  const [genre, setGenre] = useState('all')
  const filterItems = [{ id: 'all', th: 'ทั้งหมด', en: 'All' }, ...GENRE_FAMILIES]
  const allowed = GENRE_MATCH[genre] || ['pop', 'rock', 'indie', 'tpop']
  const filtered = genre === 'all' ? tracks : tracks.filter(tk => allowed.includes(tk.genre))
  const list = filtered.length >= 3 ? filtered : tracks
  const fg = dark ? '#fff' : '#1D1D1F'
  const muted = dark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.55)'
  const isAll = genre === 'all'

  return (
    <div style={{ paddingBottom: 160 }}>
      <div style={{
        position: 'sticky', top: 0, zIndex: 20,
        background: dark ? 'rgba(0,0,0,0.85)' : 'rgba(255,255,255,0.85)',
        backdropFilter: 'saturate(180%) blur(20px)',
        WebkitBackdropFilter: 'saturate(180%) blur(20px)',
      }}>
        <div style={{ padding: '8px 16px 4px' }}>
          <h1 style={{
            margin: 0, fontSize: 32, fontWeight: 600, letterSpacing: 0, color: fg,
            fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-display)',
          }}>{t.search}</h1>
        </div>
        <div style={{ padding: '12px 16px 4px' }}>
          <div onClick={onShowResults} style={{ display: 'flex', alignItems: 'center', gap: 8, height: 36, padding: '0 12px', borderRadius: 9999, background: dark ? 'rgba(255,255,255,0.1)' : '#F5F5F7', cursor: 'text' }}>
            <Icon name="search" size={18} color={muted}/>
            <span style={{
              color: muted, fontSize: 16, letterSpacing: 0,
              fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
            }}>{t.searchHint}</span>
          </div>
        </div>
        <GenreScroll items={filterItems} active={genre} onChange={setGenre} lang={lang} dark={dark}/>
        <div style={{ height: 1, background: dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }}/>
      </div>

      {isAll ? (
        <>
          <SectionHeader title={isThai ? 'หมวดหมู่ยอดนิยม' : 'Browse Categories'} link={null} lang={lang} dark={dark}/>
          <div style={{ padding: '0 16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {GENRE_FAMILIES.slice(0, 8).map(g => (
              <GenreTile key={g.id} genre={g} lang={lang} onClick={() => onOpenGenre?.(g)}/>
            ))}
          </div>
        </>
      ) : (
        <>
          {(() => {
            const g = GENRE_FAMILIES.find(x => x.id === genre)
            if (!g) return null
            return (
              <div onClick={() => onOpenGenre?.(g)} style={{
                margin: '14px 16px 4px', borderRadius: 14, padding: 14, position: 'relative', overflow: 'hidden',
                background: g.color, color: '#fff', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div style={{ position: 'absolute', right: -20, bottom: -30, width: 120, height: 120, borderRadius: 12, background: g.accent, transform: 'rotate(15deg)', opacity: 0.85 }}/>
                <div style={{ position: 'relative' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', opacity: 0.85, fontFamily: 'var(--am-font-thai)' }}>{isThai ? 'แนวเพลง' : 'GENRE'}</div>
                  <div style={{ marginTop: 4, fontSize: 22, fontWeight: 600, letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-display)' }}>{isThai ? g.th : g.en}</div>
                </div>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 4, fontSize: 13 }}>
                  <span style={{ fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{isThai ? 'เปิด' : 'Open'}</span>
                  <Icon name="chevron-right" size={14} color="#fff"/>
                </div>
              </div>
            )
          })()}
          <SectionHeader title={isThai ? 'เพลงยอดนิยม' : 'Top Songs'} link={null} lang={lang} dark={dark}/>
          <div style={{ padding: '0 16px' }}>
            {list.slice(0, 6).map((tk, i) => (
              <ChartRow key={tk.id + i} rank={i + 1} track={tk} isPlaying={tk.id === currentId}
                onPlay={(t2) => onOpenAlbum ? onOpenAlbum(t2) : onPlay(t2)} lang={lang} dark={dark}/>
            ))}
          </div>
          <SectionHeader title={isThai ? 'อัลบั้ม' : 'Albums'} link={null} lang={lang} dark={dark}/>
          <AlbumRow tracks={list.slice(0, 6)} currentId={currentId}
            onPlay={(t2) => onOpenAlbum ? onOpenAlbum(t2) : onPlay(t2)} lang={lang} dark={dark}/>
        </>
      )}
    </div>
  )
}
