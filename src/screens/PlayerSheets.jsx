import React from 'react'
import Icon from '../components/Icon/Icon.jsx'
import StatusBar from '../components/StatusBar/StatusBar.jsx'
import SectionHeader from '../components/SectionHeader/SectionHeader.jsx'

function Equalizer({ dark }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 16 }}>
      {[10, 14, 8, 12, 6].map((h, i) => (
        <div key={i} style={{
          width: 3, height: h, borderRadius: 2,
          background: '#FA233B',
          animation: `eqBar${i % 3} 0.8s ease-in-out infinite alternate`,
        }}/>
      ))}
    </div>
  )
}

const SAMPLE_LYRICS_EN = [
  'Tonight the city sleeps under neon rain',
  "I'm walking home with your name in my chest",
  'Every street remembers your laugh',
  'Every signal blinks the same as your eyes',
  'But the last light is fading',
  'And I am still here, still waiting',
  'Tomorrow we will write a new sky',
  'Tomorrow, tomorrow, but not tonight',
  'Hold the silence, hold the fire',
  'Hold the song that we never finished',
]

const SAMPLE_LYRICS_TH = [
  'คืนนี้เมืองหลับใต้ฝนนีออน',
  'เดินกลับบ้านกับชื่อเธอในอกฉัน',
  'ทุกถนนจำเสียงหัวเราะเธอ',
  'ทุกสัญญาณกระพริบเหมือนตาเธอ',
  'แต่แสงสุดท้ายค่อยจางหาย',
  'และฉันยังอยู่ ยังรออยู่ตรงนี้',
  'พรุ่งนี้เราจะเขียนฟ้าใหม่',
  'พรุ่งนี้ พรุ่งนี้ แต่ไม่ใช่คืนนี้',
  'กอดความเงียบไว้ กอดเปลวไฟไว้',
  'กอดเพลงที่เราไม่เคยเขียนจบ',
]

export function LyricsFullScreen({ track, playing, progress, onClose, onToggle, lang, dark }) {
  const isThai = lang !== 'en'
  const lines = isThai ? SAMPLE_LYRICS_TH : SAMPLE_LYRICS_EN
  const activeLine = Math.floor(progress * lines.length)

  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 350,
      background: 'linear-gradient(180deg, #2A1518 0%, #000 100%)',
      animation: 'amSheetIn 320ms cubic-bezier(0.32,0.72,0,1)',
      display: 'flex', flexDirection: 'column',
    }}>
      <StatusBar dark />
      <div style={{ padding: '8px 16px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button onClick={onClose} style={{
          width: 32, height: 32, borderRadius: 9999, background: 'rgba(255,255,255,0.15)',
          border: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
        }}><Icon name="chevron-down" size={20}/></button>
        <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '1.2px', textTransform: 'uppercase', fontFamily: 'var(--am-font-thai)' }}>{lang === 'en' ? 'SING' : 'ร้องตาม'}</div>
        <button style={{
          width: 32, height: 32, borderRadius: 9999, background: 'rgba(255,255,255,0.15)',
          border: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
        }}><Icon name="mic" size={16}/></button>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '24px 24px 200px' }}>
        {lines.map((ln, i) => (
          <div key={i} style={{ padding: '14px 0' }}>
            <div style={{
              fontSize: i === activeLine ? 30 : 24,
              fontWeight: 700,
              color: i === activeLine ? 'rgba(255,255,255,1.0)' : i < activeLine ? 'rgba(255,255,255,0.30)' : 'rgba(255,255,255,0.30)',
              letterSpacing: 0, lineHeight: 1.25,
              transition: 'all 200ms',
              fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
            }}>{ln}</div>
            {i === activeLine && (
              <div style={{
                fontSize: 16, fontWeight: 400,
                color: 'rgba(255,255,255,0.55)',
                fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
                marginTop: 4, lineHeight: 1.4,
              }}>
                {isThai ? 'The city sleeps under neon rain' : 'คืนนี้เมืองหลับใต้ฝนนีออน'}
              </div>
            )}
          </div>
        ))}
      </div>
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        padding: '20px 24px 36px',
        background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.85) 50%)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src={track.art} alt="" style={{ width: 44, height: 44, borderRadius: 6 }}/>
          <div style={{ flex: 1, minWidth: 0, color: '#fff' }}>
            <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? track.titleEn : track.title}</div>
            <div style={{ fontSize: 12, opacity: 0.7, letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? track.artist.name : track.artist.nameTh}</div>
          </div>
          <button onClick={onToggle} style={{
            width: 44, height: 44, borderRadius: 9999, background: '#fff',
            border: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1D1D1F',
          }}><Icon name={playing ? 'pause.fill' : 'play.fill'} size={18}/></button>
        </div>
      </div>
    </div>
  )
}

export function QueueSheet({ tracks, current, onClose, onPlay, lang, dark }) {
  const isThai = lang !== 'en'
  const fg = dark ? '#fff' : '#1D1D1F'
  const muted = dark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.55)'
  const idx = tracks.findIndex(tk => tk.id === current?.id)
  const upNext = tracks.slice(idx + 1).concat(tracks.slice(0, idx))

  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, bottom: 0, top: 80, zIndex: 380,
      background: dark ? '#1D1D1F' : '#fff',
      borderTopLeftRadius: 20, borderTopRightRadius: 20,
      animation: 'amSheetIn 280ms cubic-bezier(0.32,0.72,0,1)',
      overflow: 'hidden', display: 'flex', flexDirection: 'column',
      boxShadow: '0 -10px 40px rgba(0,0,0,0.3)',
    }}>
      <div style={{ padding: '10px 0 0', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: 36, height: 5, borderRadius: 3, background: dark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.18)' }}/>
      </div>
      <div style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontSize: 17, fontWeight: 600, color: fg, letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? 'Playing Next' : 'เล่นต่อไป'}</div>
        <button onClick={onClose} style={{ background: 'transparent', border: 0, color: '#FA233B', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
          <span style={{ letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? 'Done' : 'เสร็จ'}</span>
        </button>
      </div>
      {current && (
        <div style={{ padding: '0 16px 12px', borderBottom: dark ? '0.5px solid rgba(255,255,255,0.08)' : '0.5px solid #F0F0F0' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: muted, letterSpacing: '1.2px', textTransform: 'uppercase', marginBottom: 8, fontFamily: 'var(--am-font-thai)' }}>{lang === 'en' ? 'NOW PLAYING' : 'กำลังเล่น'}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img src={current.art} alt="" style={{ width: 50, height: 50, borderRadius: 6 }}/>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 15, fontWeight: 600, color: fg, letterSpacing: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? current.titleEn : current.title}</div>
              <div style={{ fontSize: 13, color: muted, letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? current.artist.name : current.artist.nameTh}</div>
            </div>
            <Equalizer dark={dark}/>
          </div>
        </div>
      )}
      <div style={{ padding: '10px 16px', display: 'flex', gap: 10, alignItems: 'center' }}>
        <button style={{ display: 'flex', alignItems: 'center', gap: 6, height: 30, padding: '0 12px', borderRadius: 9999, border: 0, background: dark ? 'rgba(255,255,255,0.1)' : '#F5F5F7', color: fg, cursor: 'pointer' }}>
          <Icon name="shuffle" size={14}/>
          <span style={{ fontSize: 12, fontWeight: 500, letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? 'Shuffle' : 'สุ่ม'}</span>
        </button>
        <button style={{ display: 'flex', alignItems: 'center', gap: 6, height: 30, padding: '0 12px', borderRadius: 9999, border: 0, background: dark ? 'rgba(255,255,255,0.1)' : '#F5F5F7', color: fg, cursor: 'pointer' }}>
          <Icon name="repeat" size={14}/>
          <span style={{ fontSize: 12, fontWeight: 500, letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? 'Repeat' : 'วนซ้ำ'}</span>
        </button>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '0 16px 40px' }}>
        {upNext.map((tk, i) => (
          <div key={tk.id + 'q' + i} onClick={() => onPlay(tk)} style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', cursor: 'pointer',
            borderBottom: dark ? '0.5px solid rgba(255,255,255,0.06)' : '0.5px solid #F5F5F7',
          }}>
            <div style={{ width: 18, color: muted, cursor: 'grab' }}>
              <svg width="14" height="14" viewBox="0 0 14 14"><path d="M3 4 H11 M3 7 H11 M3 10 H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </div>
            <img src={tk.art} alt="" style={{ width: 44, height: 44, borderRadius: 6 }}/>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 500, color: fg, letterSpacing: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? tk.titleEn : tk.title}</div>
              <div style={{ fontSize: 12, color: muted, letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? tk.artist.name : tk.artist.nameTh}</div>
            </div>
            <button onClick={(e) => e.stopPropagation()} style={{ width: 28, height: 28, background: 'transparent', border: 0, cursor: 'pointer', color: muted }}>
              <Icon name="ellipsis" size={16}/>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export function SearchResults({ tracks, query, onClose, onPlay, onOpenAlbum, onOpenArtist, lang, dark }) {
  const isThai = lang !== 'en'
  const fg = dark ? '#fff' : '#1D1D1F'
  const muted = dark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.55)'
  const matches = tracks.slice(0, 6)
  const top = matches[0]

  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 270, background: dark ? '#1D1D1F' : '#fff',
      animation: 'amSheetIn 240ms cubic-bezier(0.32,0.72,0,1)', overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
    }}>
      <StatusBar dark={dark}/>
      <div style={{ padding: '8px 16px 12px', display: 'flex', gap: 10, alignItems: 'center' }}>
        <div style={{ flex: 1, height: 36, padding: '0 12px', borderRadius: 9999, background: dark ? 'rgba(255,255,255,0.1)' : '#F5F5F7', display: 'flex', alignItems: 'center', gap: 8 }}>
          <Icon name="search" size={16} color={muted}/>
          <input
            type="text"
            defaultValue={query}
            autoFocus
            style={{ flex: 1, background: 'transparent', border: 0, outline: 'none', color: fg, fontSize: 15, letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}
          />
        </div>
        <button onClick={onClose} style={{ background: 'transparent', border: 0, color: '#FA233B', fontSize: 14, fontWeight: 600, cursor: 'pointer', letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>
          {lang === 'en' ? 'Cancel' : 'ยกเลิก'}
        </button>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 100 }}>
        {top && (
          <>
            <SectionHeader title={lang === 'en' ? 'Top Result' : 'ผลลัพธ์อันดับ 1'} link={null} lang={lang} dark={dark}/>
            <div style={{ padding: '0 16px 6px' }}>
              <div onClick={() => onOpenAlbum && onOpenAlbum(top)} style={{
                display: 'flex', gap: 14, padding: 12, borderRadius: 12, cursor: 'pointer',
                background: dark ? 'rgba(255,255,255,0.05)' : '#F8F8FA',
              }}>
                <img src={top.art} alt="" style={{ width: 80, height: 80, borderRadius: 8, objectFit: 'cover' }}/>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 16, fontWeight: 600, color: fg, letterSpacing: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? top.titleEn : top.title}</div>
                  <div style={{ marginTop: 2, fontSize: 13, color: muted, letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? top.artist.name : top.artist.nameTh}</div>
                  <div style={{ marginTop: 6, fontSize: 11, color: muted, letterSpacing: 0, textTransform: 'uppercase', fontWeight: 600, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? 'Album' : 'อัลบั้ม'}</div>
                </div>
                <button onClick={(e) => { e.stopPropagation(); onPlay(top) }} style={{
                  width: 36, height: 36, alignSelf: 'center', borderRadius: 9999, border: 0, cursor: 'pointer',
                  background: '#FA233B', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}><Icon name="play.fill" size={14}/></button>
              </div>
            </div>
          </>
        )}
        <SectionHeader title={lang === 'en' ? 'Songs' : 'เพลง'} link={null} lang={lang} dark={dark}/>
        <div style={{ padding: '0 16px' }}>
          {matches.map((tk, i) => (
            <div key={tk.id + 'sr' + i} onClick={() => onPlay(tk)} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', cursor: 'pointer',
              borderBottom: dark ? '0.5px solid rgba(255,255,255,0.06)' : '0.5px solid #F5F5F7',
            }}>
              <img src={tk.art} alt="" style={{ width: 44, height: 44, borderRadius: 6 }}/>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: fg, letterSpacing: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? tk.titleEn : tk.title}</div>
                <div style={{ fontSize: 12, color: muted, letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? tk.artist.name : tk.artist.nameTh}</div>
              </div>
            </div>
          ))}
        </div>
        <SectionHeader title={lang === 'en' ? 'Artists' : 'ศิลปิน'} link={null} lang={lang} dark={dark}/>
        <div style={{ padding: '0 16px' }}>
          {[...new Set(matches.map(m => m.artist.name))].slice(0, 4).map((name, i) => {
            const tk = matches.find(m => m.artist.name === name)
            return (
              <div key={name + i} onClick={() => onOpenArtist && onOpenArtist(tk.artist)} style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', cursor: 'pointer',
                borderBottom: dark ? '0.5px solid rgba(255,255,255,0.06)' : '0.5px solid #F5F5F7',
              }}>
                <img src={tk.art} alt="" style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover' }}/>
                <div style={{ flex: 1, fontSize: 14, fontWeight: 500, color: fg, letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? tk.artist.name : tk.artist.nameTh}</div>
                <div style={{ fontSize: 11, color: muted, letterSpacing: 0, textTransform: 'uppercase', fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? 'Artist' : 'ศิลปิน'}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export function ProfileScreen({ tracks, onClose, onShowReplay, lang, dark }) {
  const isThai = lang !== 'en'
  const fg = dark ? '#fff' : '#1D1D1F'
  const muted = dark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.55)'

  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 260, background: dark ? '#1D1D1F' : '#fff',
      overflowY: 'auto', animation: 'amSheetIn 280ms cubic-bezier(0.32,0.72,0,1)',
    }}>
      <StatusBar dark={dark}/>
      <div style={{ padding: '8px 16px 0', display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={onClose} style={{
          width: 32, height: 32, borderRadius: 9999, background: dark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.06)',
          border: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: fg,
        }}><Icon name="chevron-down" size={20}/></button>
        <div style={{ fontSize: 16, fontWeight: 600, color: fg, letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? 'Account' : 'บัญชี'}</div>
        <button style={{ background: 'transparent', border: 0, color: '#FA233B', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
          <span style={{ letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? 'Edit' : 'แก้ไข'}</span>
        </button>
      </div>
      <div style={{ padding: '24px 16px 0', textAlign: 'center' }}>
        <div style={{ width: 88, height: 88, margin: '0 auto', borderRadius: '50%', background: 'linear-gradient(135deg, #FA233B, #7C3AED)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 34, fontWeight: 700 }}>ป</div>
        <div style={{ marginTop: 12, fontSize: 22, fontWeight: 600, color: fg, letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-display)' }}>{lang === 'en' ? 'Pim Suthichai' : 'พิม สุทธิชัย'}</div>
        <div style={{ marginTop: 4, fontSize: 13, color: muted, letterSpacing: 0 }}>pim@icloud.com</div>
      </div>
      <div style={{ padding: '20px 16px 0' }}>
        <div onClick={onShowReplay} style={{
          padding: 16, borderRadius: 14, cursor: 'pointer',
          background: 'linear-gradient(135deg, #FA233B 0%, #7C3AED 100%)',
          color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', opacity: 0.85 }}>Apple Music</div>
            <div style={{ marginTop: 2, fontSize: 22, fontWeight: 700, letterSpacing: '-0.5px' }}>Replay 2025</div>
            <div style={{ marginTop: 2, fontSize: 12, opacity: 0.85, letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? 'See your year in music' : 'ดูปีแห่งดนตรีของคุณ'}</div>
          </div>
          <Icon name="chevron-right" size={18} color="#fff"/>
        </div>
      </div>
      <div style={{ padding: '24px 16px 0' }}>
        <div style={{ fontSize: 13, color: muted, fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', padding: '0 4px 8px', fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? 'Subscription' : 'การสมัคร'}</div>
        <div style={{ background: dark ? 'rgba(255,255,255,0.05)' : '#F8F8FA', borderRadius: 12, padding: '14px 16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: 15, fontWeight: 500, color: fg, letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? 'Apple Music Individual' : 'Apple Music รายบุคคล'}</div>
            <div style={{ fontSize: 13, color: muted, letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>฿129/{lang === 'en' ? 'mo' : 'เดือน'}</div>
          </div>
          <div style={{ marginTop: 4, fontSize: 12, color: muted, letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? 'Renews 15 Nov · TrueMoney Wallet' : 'ต่ออายุ 15 พ.ย. · TrueMoney Wallet'}</div>
        </div>
      </div>
      <div style={{ padding: '20px 16px 0' }}>
        <div style={{ fontSize: 13, color: muted, fontWeight: 600, letterSpacing: '0.5px', textTransform: 'uppercase', padding: '0 4px 8px', fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? 'Friends Listening To' : 'เพื่อนกำลังฟัง'}</div>
        <div style={{ background: dark ? 'rgba(255,255,255,0.05)' : '#F8F8FA', borderRadius: 12, overflow: 'hidden' }}>
          {tracks.slice(0, 4).map((tk, i) => (
            <div key={tk.id + 'fr' + i} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px',
              borderBottom: i < 3 ? (dark ? '0.5px solid rgba(255,255,255,0.06)' : '0.5px solid #EFEFEF') : 'none',
            }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: ['#FA233B','#7C3AED','#16A34A','#F59E0B'][i], display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 14, fontWeight: 600 }}>{['น','ก','ต','ฟ'][i]}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 500, color: fg, letterSpacing: 0, fontFamily: 'var(--am-font-text)' }}>{['Nat','Korn','Tao','Fern'][i]}</div>
                <div style={{ fontSize: 12, color: muted, letterSpacing: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? tk.titleEn : tk.title} · {lang === 'en' ? tk.artist.name : tk.artist.nameTh}</div>
              </div>
              <img src={tk.art} alt="" style={{ width: 36, height: 36, borderRadius: 4 }}/>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: '24px 16px 32px' }}>
        {[
          { icon: 'download', label: lang === 'en' ? 'Downloaded Music' : 'เพลงที่ดาวน์โหลด' },
          { icon: 'sparkle', label: lang === 'en' ? 'Notifications' : 'การแจ้งเตือน' },
          { icon: 'list', label: lang === 'en' ? 'Personal Recommendations' : 'แนะนำสำหรับคุณ' },
          { icon: 'mic', label: lang === 'en' ? 'Sound Quality' : 'คุณภาพเสียง' },
        ].map((row, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 14, padding: '14px 4px',
            borderBottom: dark ? '0.5px solid rgba(255,255,255,0.06)' : '0.5px solid #F0F0F0',
          }}>
            <Icon name={row.icon} size={20} color={muted}/>
            <span style={{ flex: 1, fontSize: 15, color: fg, letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{row.label}</span>
            <Icon name="chevron-right" size={14} color={muted}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export function AddToPlaylistSheet({ track, onClose, lang, dark }) {
  const isThai = lang !== 'en'
  const fg = dark ? '#fff' : '#1D1D1F'
  const muted = dark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.55)'
  const playlists = lang === 'en' ? [
    { name: 'Drive Mode', count: 47, color: '#FA233B' },
    { name: 'Late Night', count: 32, color: '#7C3AED' },
    { name: 'Thai Indie 2025', count: 89, color: '#16A34A' },
    { name: 'Workout', count: 24, color: '#F59E0B' },
  ] : [
    { name: 'ขับรถ', count: 47, color: '#FA233B' },
    { name: 'ดึก ๆ', count: 32, color: '#7C3AED' },
    { name: 'ไทยอินดี้ 2025', count: 89, color: '#16A34A' },
    { name: 'ออกกำลังกาย', count: 24, color: '#F59E0B' },
  ]

  return (
    <div onClick={onClose} style={{
      position: 'absolute', inset: 0, zIndex: 390, background: 'rgba(0,0,0,0.5)',
      animation: 'amFadeIn 200ms ease-out',
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: dark ? '#1D1D1F' : '#fff',
        borderTopLeftRadius: 20, borderTopRightRadius: 20,
        animation: 'amSheetIn 280ms cubic-bezier(0.32,0.72,0,1)',
        maxHeight: '80%', overflow: 'hidden', display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ padding: '10px 0 0', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: 36, height: 5, borderRadius: 3, background: dark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.18)' }}/>
        </div>
        <div style={{ padding: '14px 16px 6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 16, fontWeight: 600, color: fg, letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? 'Add to a Playlist' : 'เพิ่มในเพลย์ลิสต์'}</div>
          <button onClick={onClose} style={{ background: 'transparent', border: 0, color: '#FA233B', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
            <span style={{ letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? 'Done' : 'เสร็จ'}</span>
          </button>
        </div>
        {track && (
          <div style={{ padding: '0 16px 14px', display: 'flex', alignItems: 'center', gap: 10, borderBottom: dark ? '0.5px solid rgba(255,255,255,0.08)' : '0.5px solid #F0F0F0' }}>
            <img src={track.art} alt="" style={{ width: 40, height: 40, borderRadius: 6 }}/>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: fg, letterSpacing: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? track.titleEn : track.title}</div>
              <div style={{ fontSize: 12, color: muted, letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? track.artist.name : track.artist.nameTh}</div>
            </div>
          </div>
        )}
        <div style={{ overflowY: 'auto', padding: '8px 16px 24px' }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', cursor: 'pointer',
            borderBottom: dark ? '0.5px solid rgba(255,255,255,0.06)' : '0.5px solid #F5F5F7',
          }}>
            <div style={{ width: 50, height: 50, borderRadius: 8, background: dark ? 'rgba(255,255,255,0.1)' : '#F5F5F7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FA233B' }}>
              <Icon name="plus" size={22}/>
            </div>
            <div style={{ fontSize: 15, fontWeight: 600, color: '#FA233B', letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? 'New Playlist' : 'สร้างเพลย์ลิสต์ใหม่'}</div>
          </div>
          {playlists.map((p, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', cursor: 'pointer',
              borderBottom: dark ? '0.5px solid rgba(255,255,255,0.06)' : '0.5px solid #F5F5F7',
            }}>
              <div style={{ width: 50, height: 50, borderRadius: 8, background: `linear-gradient(135deg, ${p.color}, ${p.color}90)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <Icon name="list" size={20}/>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 15, fontWeight: 500, color: fg, letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{p.name}</div>
                <div style={{ fontSize: 12, color: muted, letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{p.count} {lang === 'en' ? 'songs' : 'เพลง'}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
