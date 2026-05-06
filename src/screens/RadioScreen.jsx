import React, { useState } from 'react'
import Icon from '../components/Icon/Icon.jsx'
import StatusBar from '../components/StatusBar/StatusBar.jsx'
import SectionHeader from '../components/SectionHeader/SectionHeader.jsx'
import { ChartRow } from '../components/cards.jsx'
import { COPY } from '../data.js'

const RADIO_STATIONS = {
  th: [
    { id: 'am1', name: 'Apple Music 1', tag: 'สถานีหลัก', color: '#FA233B', live: true, host: 'Zane Lowe', show: 'New Music Daily' },
    { id: 'amhits', name: 'Apple Music Hits', tag: 'ฮิตทุกยุค', color: '#7C3AED', live: true, host: '', show: 'Pop, R&B & Rock' },
    { id: 'amcountry', name: 'Apple Music Country', tag: 'ลูกทุ่งสากล', color: '#D97706', live: false, host: '', show: '' },
    { id: 'tpopradio', name: 'T-Pop Radio', tag: 'ที-ป๊อปไทย', color: '#EC4899', live: true, host: 'DJ Mint', show: 'TPOP Now' },
    { id: 'luktung', name: 'Luk Thung Live', tag: 'ลูกทุ่งสด ๆ', color: '#16A34A', live: true, host: 'พี่ไก่', show: 'มือเย็น' },
    { id: 'morlam', name: 'Mor Lam', tag: 'หมอลำอีสาน', color: '#0EA5E9', live: false, host: '', show: '' },
  ],
  en: [
    { id: 'am1', name: 'Apple Music 1', tag: 'Flagship', color: '#FA233B', live: true, host: 'Zane Lowe', show: 'New Music Daily' },
    { id: 'amhits', name: 'Apple Music Hits', tag: 'All-time hits', color: '#7C3AED', live: true, host: '', show: 'Pop, R&B & Rock' },
    { id: 'amcountry', name: 'Apple Music Country', tag: 'Country', color: '#D97706', live: false, host: '', show: '' },
    { id: 'tpopradio', name: 'T-Pop Radio', tag: 'Thai Pop', color: '#EC4899', live: true, host: 'DJ Mint', show: 'TPOP Now' },
    { id: 'luktung', name: 'Luk Thung Live', tag: 'Thai Country', color: '#16A34A', live: true, host: "P'Gai", show: 'Cold Hands' },
    { id: 'morlam', name: 'Mor Lam', tag: 'Isan Folk', color: '#0EA5E9', live: false, host: '', show: '' },
  ],
}

function LiveBadge({ lang }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      background: '#FA233B', height: 18, borderRadius: 9, padding: '0 7px',
    }}>
      <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#fff' }}/>
      <span style={{ fontSize: 9, fontWeight: 700, color: '#fff', letterSpacing: '0.6px', lineHeight: 1 }}>
        {lang === 'en' ? 'LIVE' : 'สด'}
      </span>
    </div>
  )
}

export function RadioScreen({ tracks, lang, dark, onPlay, onOpenAlbum }) {
  const t = COPY[lang]
  const isThai = lang !== 'en'
  const stations = RADIO_STATIONS[lang === 'en' ? 'en' : 'th']
  const featured = stations[0]
  const fg = dark ? '#fff' : '#1D1D1F'
  const muted = dark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.55)'

  return (
    <div style={{ paddingBottom: 160 }}>
      <div style={{ padding: '8px 16px 4px' }}>
        <h1 style={{
          margin: 0, fontSize: 32, fontWeight: 600, letterSpacing: 0, color: fg,
          fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-display)',
        }}>{t.radio}</h1>
      </div>

      <div style={{ padding: '12px 16px 0' }}>
        <div style={{
          position: 'relative', borderRadius: 16, overflow: 'hidden',
          background: `linear-gradient(135deg, ${featured.color} 0%, #1D1D1F 100%)`,
          minHeight: 220, padding: 18, color: '#fff', cursor: 'pointer',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }} onClick={() => onPlay(tracks[0])}>
          <div style={{ position: 'absolute', right: -40, top: -40, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }}/>
          <div style={{ position: 'absolute', right: 30, top: 60, width: 120, height: 120, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }}/>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 8 }}>
            {featured.live && <LiveBadge lang={lang} />}
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', opacity: 0.8, fontFamily: 'var(--am-font-thai)' }}>{featured.tag}</span>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ fontSize: 30, fontWeight: 600, letterSpacing: 0, lineHeight: 1.05, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-display)' }}>{featured.name}</div>
            <div style={{ marginTop: 6, fontSize: 15, opacity: 0.85, letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{featured.show}{featured.host ? ` · ${featured.host}` : ''}</div>
            <button onClick={(e) => { e.stopPropagation(); onPlay(tracks[0]) }} style={{
              marginTop: 14, height: 36, padding: '0 18px', borderRadius: 9999,
              background: '#fff', color: '#1D1D1F', border: 0, cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 600,
            }}>
              <Icon name="play.fill" size={12} />
              <span style={{ letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? 'Listen Live' : 'ฟังสด'}</span>
            </button>
          </div>
        </div>
      </div>

      <SectionHeader title={lang === 'en' ? 'Live Stations' : 'สถานีถ่ายทอดสด'} link={t.seeAll} lang={lang} dark={dark} />
      <div style={{ padding: '0 16px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
        {stations.slice(1).map(s => (
          <div key={s.id} onClick={() => onPlay(tracks[1])} style={{
            position: 'relative', height: 58, borderRadius: 10, overflow: 'hidden',
            background: `linear-gradient(135deg, ${s.color} 0%, ${s.color}80 100%)`,
            padding: '8px 10px', color: '#fff', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          }}>
            <div style={{ position: 'absolute', right: -10, bottom: -10, width: 50, height: 50, borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }}/>
            {s.live && <LiveBadge lang={lang} />}
            <div style={{ position: 'relative' }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 0, lineHeight: 1.2, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-display)', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{s.name}</div>
            </div>
          </div>
        ))}
        {/* ♫ Music Radio badge card */}
        <div style={{
          position: 'relative', height: 58, borderRadius: 10, overflow: 'hidden',
          background: 'linear-gradient(135deg, #5B2D8E 0%, #3B1F6A 100%)',
          padding: '8px 10px', color: '#fff', cursor: 'pointer',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        }}>
          <div style={{ position: 'absolute', left: 8, bottom: 6, fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.4px' }}>♫ Music Radio</div>
        </div>
      </div>

      <SectionHeader title={lang === 'en' ? 'Hosted Shows' : 'รายการดีเจ'} link={t.seeAll} lang={lang} dark={dark} />
      <div style={{ display: 'flex', gap: 12, padding: '0 16px', overflowX: 'auto', scrollbarWidth: 'none' }}>
        {tracks.slice(0, 5).map((tk, i) => (
          <div key={tk.id + 'sh' + i} onClick={() => onPlay(tk)} style={{ flexShrink: 0, width: 160, cursor: 'pointer' }}>
            <div style={{
              position: 'relative', width: 160, height: 160, borderRadius: 12, overflow: 'hidden',
              background: `url(${tk.art}) center/cover`,
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.7) 100%)' }}/>
              <div style={{ position: 'absolute', left: 10, bottom: 10, right: 10 }}>
                <div style={{ fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,0.85)', letterSpacing: '1.2px', textTransform: 'uppercase', fontFamily: 'var(--am-font-thai)' }}>{lang === 'en' ? 'SHOW' : 'รายการ'}</div>
                <div style={{ marginTop: 2, fontSize: 13, fontWeight: 600, color: '#fff', letterSpacing: 0, lineHeight: 1.2, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? tk.titleEn : tk.title}</div>
              </div>
            </div>
            <div style={{ marginTop: 6, fontSize: 12, color: muted, letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? tk.artist.name : tk.artist.nameTh}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function TopChartsScreen({ tracks, currentId, onClose, onPlay, onOpenAlbum, lang, dark }) {
  const isThai = lang !== 'en'
  const [chart, setChart] = useState('songs')
  const fg = dark ? '#fff' : '#1D1D1F'
  const muted = dark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.55)'
  const tabs = [
    { id: 'songs', th: 'เพลง', en: 'Songs' },
    { id: 'albums', th: 'อัลบั้ม', en: 'Albums' },
    { id: 'artists', th: 'ศิลปิน', en: 'Artists' },
  ]

  return (
    <div style={{
      position: 'absolute', inset: 0, background: dark ? '#1D1D1F' : '#fff',
      zIndex: 250, overflowY: 'auto', animation: 'amSheetIn 280ms cubic-bezier(0.32,0.72,0,1)',
    }}>
      <StatusBar dark={dark} />
      <div style={{
        position: 'sticky', top: 0, zIndex: 5,
        background: dark ? 'rgba(0,0,0,0.85)' : 'rgba(255,255,255,0.85)',
        backdropFilter: 'saturate(180%) blur(20px)', WebkitBackdropFilter: 'saturate(180%) blur(20px)',
      }}>
        <div style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button onClick={onClose} style={{
            width: 32, height: 32, borderRadius: 9999, background: dark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.06)',
            border: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: fg,
          }}><Icon name="chevron-left" size={20}/></button>
          <div style={{ fontSize: 16, fontWeight: 600, color: fg, letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? 'Top Charts' : 'ชาร์ตยอดนิยม'}</div>
          <div style={{ width: 32 }}/>
        </div>
        <div style={{ display: 'flex', gap: 0, padding: '0 16px 8px', borderBottom: dark ? '0.5px solid rgba(255,255,255,0.06)' : '0.5px solid rgba(0,0,0,0.06)' }}>
          {tabs.map(tab => {
            const on = chart === tab.id
            return (
              <button key={tab.id} onClick={() => setChart(tab.id)} style={{
                flex: 1, height: 36, background: 'transparent', border: 0, cursor: 'pointer',
                color: on ? '#FA233B' : muted, fontSize: 14, fontWeight: on ? 600 : 500, letterSpacing: 0,
                position: 'relative', fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
              }}>
                {lang === 'en' ? tab.en : tab.th}
                {on && <div style={{ position: 'absolute', left: 0, right: 0, bottom: -8, height: 2, background: '#FA233B' }}/>}
              </button>
            )
          })}
        </div>
      </div>
      <div style={{ padding: '4px 16px 16px' }}>
        <div style={{ marginTop: 14, fontSize: 13, color: muted, letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>
          {lang === 'en' ? 'Top 100 in Thailand · Updated daily' : '100 อันดับยอดนิยมในไทย · อัปเดตทุกวัน'}
        </div>
      </div>
      {chart === 'songs' && (
        <div style={{ padding: '0 16px' }}>
          {tracks.slice(0, 12).map((tk, i) => (
            <ChartRow key={tk.id + 'tc' + i} rank={i + 1} track={tk} isPlaying={tk.id === currentId}
              onPlay={(t2) => onOpenAlbum ? onOpenAlbum(t2) : onPlay(t2)} lang={lang} dark={dark} />
          ))}
        </div>
      )}
      {chart === 'albums' && (
        <div style={{ padding: '0 16px' }}>
          {tracks.slice(0, 10).map((tk, i) => (
            <div key={tk.id + 'ta' + i} onClick={() => onOpenAlbum ? onOpenAlbum(tk) : onPlay(tk)} style={{
              display: 'flex', alignItems: 'center', gap: 14, padding: '10px 0',
              borderBottom: dark ? '0.5px solid rgba(255,255,255,0.06)' : '0.5px solid #F0F0F0', cursor: 'pointer',
            }}>
              <div style={{ width: 28, textAlign: 'center', fontSize: 16, fontWeight: 600, color: muted }}>{i + 1}</div>
              <img src={tk.art} alt="" style={{ width: 56, height: 56, borderRadius: 6, objectFit: 'cover' }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 15, fontWeight: 500, color: fg, letterSpacing: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? tk.titleEn : tk.title}</div>
                <div style={{ marginTop: 2, fontSize: 13, color: muted, letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? tk.artist.name : tk.artist.nameTh}</div>
              </div>
            </div>
          ))}
        </div>
      )}
      {chart === 'artists' && (
        <div style={{ padding: '0 16px' }}>
          {tracks.slice(0, 10).map((tk, i) => (
            <div key={tk.id + 'ti' + i} style={{
              display: 'flex', alignItems: 'center', gap: 14, padding: '10px 0',
              borderBottom: dark ? '0.5px solid rgba(255,255,255,0.06)' : '0.5px solid #F0F0F0',
            }}>
              <div style={{ width: 28, textAlign: 'center', fontSize: 16, fontWeight: 600, color: muted }}>{i + 1}</div>
              <img src={tk.art} alt="" style={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover' }} />
              <div style={{ flex: 1, fontSize: 16, fontWeight: 500, color: fg, letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? tk.artist.name : tk.artist.nameTh}</div>
            </div>
          ))}
        </div>
      )}
      <div style={{ height: 120 }}/>
    </div>
  )
}

export function ReplayScreen({ tracks, onClose, onPlay, lang, dark }) {
  const isThai = lang !== 'en'
  const stats = [
    { label: lang === 'en' ? 'Minutes listened' : 'นาทีที่ฟัง', value: '14,238' },
    { label: lang === 'en' ? 'Different artists' : 'ศิลปิน', value: '247' },
    { label: lang === 'en' ? 'Songs you loved' : 'เพลงโปรด', value: '89' },
  ]

  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 300, overflowY: 'auto',
      background: 'linear-gradient(180deg, #FA233B 0%, #7C3AED 50%, #1D1D1F 100%)',
      animation: 'amSheetIn 280ms cubic-bezier(0.32,0.72,0,1)',
    }}>
      <StatusBar dark />
      <div style={{ padding: '8px 16px 0', display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={onClose} style={{
          width: 32, height: 32, borderRadius: 9999, background: 'rgba(255,255,255,0.18)',
          border: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
        }}><Icon name="chevron-down" size={20}/></button>
        <button style={{
          height: 32, padding: '0 14px', borderRadius: 9999, background: 'rgba(255,255,255,0.18)',
          border: 0, cursor: 'pointer', color: '#fff', fontSize: 13, fontWeight: 600,
        }}><span style={{ letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? 'Share' : 'แชร์'}</span></button>
      </div>
      <div style={{ padding: '32px 24px 0', textAlign: 'center', color: '#fff' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', opacity: 0.85, fontFamily: 'var(--am-font-thai)' }}>Apple Music</div>
        <div style={{ marginTop: 4, fontSize: 64, fontWeight: 800, letterSpacing: '-2px', lineHeight: 1, fontFamily: 'var(--am-font-display, var(--am-font-text))' }}>Replay</div>
        <div style={{ marginTop: 4, fontSize: 56, fontWeight: 800, letterSpacing: '-2px', lineHeight: 1, opacity: 0.95 }}>2025</div>
        <div style={{ marginTop: 14, fontSize: 14, opacity: 0.85, letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>
          {lang === 'en' ? 'Your year in music' : 'ปีแห่งดนตรีของคุณ'}
        </div>
      </div>
      <div style={{ padding: '40px 20px 0' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8,
          padding: 18, borderRadius: 16, background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(20px)',
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: 'center', color: '#fff' }}>
              <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.5px' }}>{s.value}</div>
              <div style={{ marginTop: 4, fontSize: 11, opacity: 0.85, letterSpacing: 0, lineHeight: 1.3, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: '32px 20px 0' }}>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? 'Top Artist' : 'ศิลปินอันดับ 1'}</div>
        <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 14 }}>
          <img src="assets/artwork/album-03.jpg" alt="" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(255,255,255,0.3)' }} />
          <div style={{ color: '#fff' }}>
            <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-display)' }}>{lang === 'en' ? 'Bodyslam' : 'บอดี้สแลม'}</div>
            <div style={{ marginTop: 2, fontSize: 13, opacity: 0.85, letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? '2,184 minutes · 38 songs' : '2,184 นาที · 38 เพลง'}</div>
          </div>
        </div>
      </div>
      <div style={{ padding: '28px 20px 0' }}>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? 'Top Songs' : 'เพลงยอดฟัง'}</div>
        <div style={{ marginTop: 12 }}>
          {tracks.slice(0, 5).map((tk, i) => (
            <div key={tk.id + 'rp' + i} onClick={() => onPlay(tk)} style={{
              display: 'flex', alignItems: 'center', gap: 14, padding: '10px 0', cursor: 'pointer',
              borderBottom: '0.5px solid rgba(255,255,255,0.15)',
            }}>
              <div style={{ width: 24, fontSize: 22, fontWeight: 800, color: '#fff', opacity: 0.95 }}>{i + 1}</div>
              <img src={tk.art} alt="" style={{ width: 44, height: 44, borderRadius: 6, objectFit: 'cover' }} />
              <div style={{ flex: 1, minWidth: 0, color: '#fff' }}>
                <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? tk.titleEn : tk.title}</div>
                <div style={{ marginTop: 1, fontSize: 12, opacity: 0.7, letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{lang === 'en' ? tk.artist.name : tk.artist.nameTh}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ height: 100 }}/>
    </div>
  )
}
