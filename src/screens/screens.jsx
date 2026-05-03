import React, { useState } from 'react'
import Icon from '../components/Icon/Icon.jsx'
import StatusBar from '../components/StatusBar/StatusBar.jsx'
import SectionHeader from '../components/SectionHeader/SectionHeader.jsx'
import { LiveBadge, GenreScroll } from '../components/chrome.jsx'
import { AlbumRow, ChartRow, FeaturedCardClassic, FeaturedCardEditorial, FeaturedCardMagazine, ArtistCircle, GenreTile } from '../components/cards.jsx'
import { COPY, GENRE_FAMILIES, GENRE_MATCH, EDITORIAL_HERO, ARTIST_ART, TH_ARTISTS } from '../data.js'

const SPOTLIGHT_ARTISTS = [TH_ARTISTS.bodyslam, TH_ARTISTS.tilly, TH_ARTISTS.bowky, TH_ARTISTS.phum, TH_ARTISTS.threeman, TH_ARTISTS.ink]
const SPOTLIGHT_ART = ['album-03.jpg', 'album-04.jpg', 'album-11.jpg', 'album-04.jpg', 'album-08.jpg', 'album-08.jpg']
  .map(a => `/assets/artwork/${a}`)

// ── Listen Now — Classic ──────────────────────────────────────────────────
export function ListenNowClassic({ tracks, currentId, onPlay, onOpenAlbum, onOpenArtist, lang, dark, density }) {
  const t    = COPY[lang]
  const feat = tracks[1]
  const hero = EDITORIAL_HERO[lang === 'en' ? 'en' : 'th']
  const size = density === 'compact' ? 130 : density === 'comfy' ? 168 : 148
  const isThai = lang !== 'en'
  return (
    <div style={{ paddingBottom: 160 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 16px 4px' }}>
        <h1 style={{
          margin: 0, fontSize: 32, fontWeight: 600, letterSpacing: 0,
          color: dark ? '#fff' : '#1D1D1F',
          fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-display)',
        }}>{t.listenNow}</h1>
        <div onClick={() => onOpenArtist?.(TH_ARTISTS.bodyslam)} style={{
          width: 32, height: 32, borderRadius: 9999, background: '#FA233B', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontSize: 13, fontWeight: 600,
        }}>ก</div>
      </div>
      <div style={{ padding: '10px 16px 0' }}>
        <LiveBadge>{t.trending}</LiveBadge>
      </div>
      <div style={{ marginTop: 14 }}>
        <FeaturedCardClassic playlist={hero} art={feat.art} onPlay={() => onPlay(feat)} lang={lang}/>
      </div>
      <SectionHeader title={t.newReleases} link={t.seeAll} lang={lang} dark={dark}/>
      <AlbumRow tracks={tracks.slice(0, 6)} currentId={currentId}
        onPlay={(t2) => onOpenAlbum ? onOpenAlbum(t2) : onPlay(t2)} lang={lang} dark={dark} size={size}/>
      <SectionHeader title={t.madeForYou} link={t.seeAll} lang={lang} dark={dark}/>
      <AlbumRow tracks={tracks.slice(4, 10)} currentId={currentId}
        onPlay={onPlay} lang={lang} dark={dark} size={size}/>
    </div>
  )
}

// ── Listen Now — Editorial-first ─────────────────────────────────────────
export function ListenNowEditorial({ tracks, currentId, onPlay, onOpenAlbum, onOpenArtist, onOpenPlaylist, lang, dark, density }) {
  const t    = COPY[lang]
  const feat = tracks[2]
  const hero = EDITORIAL_HERO[lang === 'en' ? 'en' : 'th']
  const size = density === 'compact' ? 130 : density === 'comfy' ? 168 : 148
  const isThai = lang !== 'en'
  return (
    <div style={{ paddingBottom: 160 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 16px 6px' }}>
        <h1 style={{
          margin: 0, fontSize: 32, fontWeight: 600, letterSpacing: 0,
          color: dark ? '#fff' : '#1D1D1F',
          fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-display)',
        }}>{t.listenNow}</h1>
        <div onClick={() => onOpenArtist?.(TH_ARTISTS.bodyslam)} style={{
          width: 32, height: 32, borderRadius: 9999, background: '#FA233B', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontSize: 13, fontWeight: 600,
        }}>ก</div>
      </div>
      <div style={{ marginTop: 6 }}>
        <div onClick={() => onOpenPlaylist?.(hero)} style={{ cursor: 'pointer' }}>
          <FeaturedCardMagazine playlist={hero} art={feat.art} onPlay={() => onPlay(feat)} lang={lang}/>
        </div>
      </div>
      <SectionHeader title={t.spotlight} link={t.seeAll} lang={lang} dark={dark}/>
      <div style={{ display: 'flex', gap: 14, padding: '0 16px', overflowX: 'auto', scrollbarWidth: 'none' }}>
        {SPOTLIGHT_ARTISTS.map((a, i) => (
          <ArtistCircle key={i} artist={a} art={SPOTLIGHT_ART[i]} lang={lang} dark={dark}
            onClick={() => onOpenArtist?.(a)}/>
        ))}
      </div>
      <SectionHeader title={t.newReleases} link={t.seeAll} lang={lang} dark={dark}/>
      <AlbumRow tracks={tracks.slice(0, 6)} currentId={currentId}
        onPlay={(t2) => onOpenAlbum ? onOpenAlbum(t2) : onPlay(t2)} lang={lang} dark={dark} size={size}/>
      <SectionHeader title={t.madeForYou} link={t.seeAll} lang={lang} dark={dark}/>
      <AlbumRow tracks={tracks.slice(5, 11)} currentId={currentId}
        onPlay={onPlay} lang={lang} dark={dark} size={size}/>
    </div>
  )
}

// ── Listen Now — Genre-led ────────────────────────────────────────────────
export function ListenNowGenreLed({ tracks, currentId, onPlay, onOpenAlbum, onOpenArtist, onOpenPlaylist, onOpenGenre, lang, dark, density }) {
  const t    = COPY[lang]
  const feat = tracks[2]
  const hero = EDITORIAL_HERO[lang === 'en' ? 'en' : 'th']
  const size = density === 'compact' ? 130 : density === 'comfy' ? 168 : 148
  const isThai = lang !== 'en'
  return (
    <div style={{ paddingBottom: 160 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 16px 6px' }}>
        <h1 style={{
          margin: 0, fontSize: 32, fontWeight: 600, letterSpacing: 0,
          color: dark ? '#fff' : '#1D1D1F',
          fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-display)',
        }}>{t.listenNow}</h1>
        <div onClick={() => onOpenArtist?.(TH_ARTISTS.bodyslam)} style={{
          width: 32, height: 32, borderRadius: 9999, background: '#FA233B', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontSize: 13, fontWeight: 600,
        }}>ก</div>
      </div>
      <SectionHeader title={t.pickGenre} link={false} lang={lang} dark={dark}/>
      <div style={{ padding: '0 16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {GENRE_FAMILIES.slice(0, 6).map(g => (
          <GenreTile key={g.id} genre={g} lang={lang} onClick={() => onOpenGenre?.(g)}/>
        ))}
      </div>
      <SectionHeader title={t.featuredOn} link={false} lang={lang} dark={dark}/>
      <div onClick={() => onOpenPlaylist?.(hero)} style={{ cursor: 'pointer' }}>
        <FeaturedCardEditorial playlist={hero} art={feat.art} onPlay={() => onPlay(feat)} lang={lang}/>
      </div>
      <SectionHeader title={t.newReleases} link={t.seeAll} lang={lang} dark={dark}/>
      <AlbumRow tracks={tracks.slice(0, 6)} currentId={currentId}
        onPlay={(t2) => onOpenAlbum ? onOpenAlbum(t2) : onPlay(t2)} lang={lang} dark={dark} size={size}/>
    </div>
  )
}

// ── Browse ────────────────────────────────────────────────────────────────
export function Browse({ tracks, currentId, onPlay, onOpenAlbum, onOpenGenre, onShowCharts, lang, dark }) {
  const t = COPY[lang]
  const isThai = lang !== 'en'
  const [genre, setGenre] = useState('all')
  const filterItems = [{ id: 'all', th: 'ทั้งหมด', en: 'All' }, ...GENRE_FAMILIES]
  const allowed = GENRE_MATCH[genre] || ['pop', 'rock', 'indie', 'tpop']
  const filtered = genre === 'all' ? tracks : tracks.filter(tk => allowed.includes(tk.genre))
  const list = filtered.length >= 4 ? filtered : tracks
  const activeGenre = GENRE_FAMILIES.find(g => g.id === genre)
  const fg = dark ? '#fff' : '#1D1D1F'

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
          }}>{t.browse}</h1>
        </div>
        <GenreScroll items={filterItems} active={genre} onChange={setGenre} lang={lang} dark={dark}/>
        <div style={{ height: 1, background: dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }}/>
      </div>

      {activeGenre && (
        <div onClick={() => onOpenGenre?.(activeGenre)} style={{
          margin: '14px 16px 4px', borderRadius: 14, padding: 14, position: 'relative', overflow: 'hidden',
          background: activeGenre.color, color: '#fff', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ position: 'absolute', right: -20, bottom: -30, width: 120, height: 120, borderRadius: 12, background: activeGenre.accent, transform: 'rotate(15deg)', opacity: 0.85 }}/>
          <div style={{ position: 'relative' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', opacity: 0.85, fontFamily: 'var(--am-font-thai)' }}>{isThai ? 'แนวเพลง' : 'GENRE'}</div>
            <div style={{ marginTop: 4, fontSize: 22, fontWeight: 600, letterSpacing: 0, fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-display)' }}>{isThai ? activeGenre.th : activeGenre.en}</div>
          </div>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 4, fontSize: 13 }}>
            <span style={{ fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)' }}>{isThai ? 'ทั้งหมด' : 'See all'}</span>
            <Icon name="chevron-right" size={14} color="#fff"/>
          </div>
        </div>
      )}

      <SectionHeader title={t.topCharts} link={t.seeAll} onLinkClick={onShowCharts} lang={lang} dark={dark}/>
      <div style={{ padding: '0 16px' }}>
        {list.slice(0, 8).map((tk, i) => (
          <ChartRow key={tk.id + i} rank={i + 1} track={tk} isPlaying={tk.id === currentId}
            onPlay={(t2) => onOpenAlbum ? onOpenAlbum(t2) : onPlay(t2)} lang={lang} dark={dark}/>
        ))}
      </div>
      <SectionHeader title={isThai ? 'อัลบั้มแนะนำ' : 'Featured Albums'} link={t.seeAll} lang={lang} dark={dark}/>
      <AlbumRow tracks={list.slice(0, 6)} currentId={currentId}
        onPlay={(t2) => onOpenAlbum ? onOpenAlbum(t2) : onPlay(t2)} lang={lang} dark={dark}/>
    </div>
  )
}

// ── Library ───────────────────────────────────────────────────────────────
export function Library({ tracks, currentId, onPlay, onOpenProfile, lang, dark }) {
  const t = COPY[lang]
  const isThai = lang !== 'en'
  const fg = dark ? '#fff' : '#1D1D1F'
  const items = [
    { label: t.playlists, icon: 'list' },
    { label: t.artists,   icon: 'mic' },
    { label: t.albums,    icon: 'grid' },
    { label: t.songs,     icon: 'list' },
    { label: t.downloaded,icon: 'download' },
  ]
  return (
    <div style={{ paddingBottom: 160 }}>
      <div style={{ padding: '8px 16px 4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 style={{
          margin: 0, fontSize: 32, fontWeight: 600, letterSpacing: 0, color: fg,
          fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-display)',
        }}>{t.library}</h1>
        <button onClick={onOpenProfile} style={{
          width: 32, height: 32, borderRadius: 9999,
          background: 'linear-gradient(135deg, #FA233B, #7C3AED)',
          border: 0, cursor: 'pointer', color: '#fff', fontSize: 13, fontWeight: 600,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>ป</button>
      </div>
      <div style={{ padding: '12px 16px' }}>
        {items.map((it, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 16, padding: '14px 0',
            borderBottom: dark ? '0.5px solid rgba(255,255,255,0.08)' : '0.5px solid #F0F0F0',
            color: fg, cursor: 'pointer',
          }}>
            <Icon name={it.icon} size={22} color="#FA233B"/>
            <span style={{
              flex: 1, fontSize: 17, fontWeight: 500, letterSpacing: 0,
              fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
            }}>{it.label}</span>
            <Icon name="chevron-right" size={16} color={dark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.3)'}/>
          </div>
        ))}
      </div>
      <SectionHeader title={t.recentlyPlayed} link={null} lang={lang} dark={dark}/>
      <div style={{ padding: '0 16px' }}>
        {tracks.slice(2, 6).map((tk, i) => (
          <ChartRow key={tk.id} rank={i + 1} track={tk} isPlaying={tk.id === currentId}
            onPlay={onPlay} lang={lang} dark={dark} showRank={false}/>
        ))}
      </div>
    </div>
  )
}

// ── Search ────────────────────────────────────────────────────────────────
export function Search({ lang, dark }) {
  const t = COPY[lang]
  const isThai = lang !== 'en'
  return (
    <div style={{ paddingBottom: 160 }}>
      <div style={{ padding: '8px 16px 4px' }}>
        <h1 style={{
          margin: 0, fontSize: 32, fontWeight: 600, letterSpacing: 0,
          color: dark ? '#fff' : '#1D1D1F',
          fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-display)',
        }}>{t.search}</h1>
      </div>
      <div style={{ padding: '12px 16px 4px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8, height: 36, padding: '0 12px',
          borderRadius: 9999, background: dark ? 'rgba(255,255,255,0.1)' : '#F5F5F7',
        }}>
          <Icon name="search" size={18} color={dark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.55)'}/>
          <span style={{
            color: dark ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.55)', fontSize: 16, letterSpacing: 0,
            fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
          }}>{t.searchHint}</span>
        </div>
      </div>
      <SectionHeader title={lang === 'en' ? 'Browse Categories' : 'หมวดหมู่ยอดนิยม'} link={null} lang={lang} dark={dark}/>
      <div style={{ padding: '0 16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {GENRE_FAMILIES.slice(0, 8).map(g => (
          <GenreTile key={g.id} genre={g} lang={lang} onClick={() => {}}/>
        ))}
      </div>
    </div>
  )
}

// ── Album Detail ──────────────────────────────────────────────────────────
export function AlbumDetail({ track, tracks, onClose, onPlay, currentId, lang, dark }) {
  const t = COPY[lang]
  const isThai = lang !== 'en'
  const title  = isThai ? track.title   : track.titleEn
  const artist = isThai ? track.artist.nameTh : track.artist.name
  const fg     = dark ? '#fff' : '#1D1D1F'
  const muted  = dark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.55)'
  const albumTracks = tracks.slice(0, 8)
  return (
    <div style={{
      position: 'absolute', inset: 0, background: dark ? '#1D1D1F' : '#fff',
      zIndex: 250, overflowY: 'auto', animation: 'amSheetIn 280ms cubic-bezier(0.32,0.72,0,1)',
    }}>
      <StatusBar dark={dark}/>
      <div style={{ padding: '8px 16px 0', display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={onClose} style={{
          width: 32, height: 32, borderRadius: 9999,
          background: dark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.06)',
          border: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: fg,
        }}><Icon name="chevron-left" size={20}/></button>
        <button style={{
          width: 32, height: 32, borderRadius: 9999,
          background: dark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.06)',
          border: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: fg,
        }}><Icon name="ellipsis" size={18}/></button>
      </div>
      <div style={{ padding: '20px 16px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: 240, height: 240, borderRadius: 8, overflow: 'hidden', boxShadow: 'rgba(0,0,0,0.22) 3px 5px 30px 0' }}>
          <img src={track.art} alt={title} style={{ width: '100%', height: '100%', display: 'block' }}/>
        </div>
        <div style={{
          marginTop: 18, fontSize: 22, fontWeight: 600, color: fg, textAlign: 'center', letterSpacing: 0,
          fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-display)',
        }}>{title}</div>
        <div style={{
          marginTop: 4, fontSize: 16, fontWeight: 500, color: '#FA233B', textAlign: 'center', letterSpacing: 0,
          fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
        }}>{artist}</div>
        <div style={{
          marginTop: 6, fontSize: 12, color: muted, letterSpacing: 0,
          fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
        }}>{lang === 'en' ? 'Album · 2024' : 'อัลบั้ม · 2024'}</div>
        <div style={{ marginTop: 18, display: 'flex', gap: 8, width: '100%' }}>
          <button onClick={() => onPlay(track)} style={{
            flex: 1, height: 44, borderRadius: 9999, background: '#FA233B', color: '#fff',
            border: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            fontSize: 15, fontWeight: 600,
            fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
          }}>
            <Icon name="play.fill" size={16} color="#fff"/>
            <span>{t.play}</span>
          </button>
          <button style={{
            flex: 1, height: 44, borderRadius: 9999,
            background: dark ? 'rgba(255,255,255,0.12)' : '#F5F5F7', color: '#FA233B',
            border: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            fontSize: 15, fontWeight: 600,
            fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
          }}>
            <Icon name="shuffle" size={16} color="#FA233B"/>
            <span>{t.shuffle}</span>
          </button>
        </div>
      </div>
      <div style={{ padding: '24px 16px 100px' }}>
        {albumTracks.map((tk, i) => (
          <div key={tk.id + i} onClick={() => onPlay(tk)} style={{
            display: 'flex', alignItems: 'center', gap: 14, padding: '12px 0',
            borderBottom: dark ? '0.5px solid rgba(255,255,255,0.08)' : '0.5px solid #F0F0F0',
            cursor: 'pointer',
          }}>
            <div style={{ width: 22, textAlign: 'center', fontSize: 15, color: muted }}>{i + 1}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontSize: 16, fontWeight: 500, color: fg, letterSpacing: 0,
                fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
                overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',
              }}>{isThai ? tk.title : tk.titleEn}</div>
              <div style={{
                fontSize: 13, color: muted, letterSpacing: 0,
                fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
                overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',
              }}>{isThai ? tk.artist.nameTh : tk.artist.name}</div>
            </div>
            <button onClick={(e) => e.stopPropagation()} style={{
              width: 28, height: 28, color: muted, background: 'transparent', border: 0, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}><Icon name="ellipsis" size={20}/></button>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Artist Detail ─────────────────────────────────────────────────────────
export function ArtistDetail({ artist, tracks, onClose, onPlay, currentId, onOpenAlbum, lang, dark }) {
  const t = COPY[lang]
  const isThai  = lang !== 'en'
  const name    = isThai ? artist.nameTh : artist.name
  const artKey  = Object.keys({ bodyslam: 1, tilly: 1, phum: 1, bowky: 1, ink: 1, threeman: 1, polycat: 1, cocktail: 1, stamp: 1, slot: 1, labanoon: 1 })
    .find(k => ({ bodyslam: TH_ARTISTS.bodyslam, tilly: TH_ARTISTS.tilly, phum: TH_ARTISTS.phum, bowky: TH_ARTISTS.bowky, ink: TH_ARTISTS.ink, threeman: TH_ARTISTS.threeman, polycat: TH_ARTISTS.polycat, cocktail: TH_ARTISTS.cocktail, stamp: TH_ARTISTS.stamp, slot: TH_ARTISTS.slot, labanoon: TH_ARTISTS.labanoon })[k] === artist)
  const headerArt = ARTIST_ART[artKey] || tracks[0].art
  const [following, setFollowing] = useState(false)
  const fg    = dark ? '#fff' : '#1D1D1F'
  const muted = dark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.55)'
  return (
    <div style={{
      position: 'absolute', inset: 0, background: dark ? '#1D1D1F' : '#fff',
      zIndex: 250, overflowY: 'auto', animation: 'amSheetIn 280ms cubic-bezier(0.32,0.72,0,1)',
    }}>
      <div style={{ position: 'relative', height: 360 }}>
        <img src={headerArt} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.15) 35%, transparent 60%, ${dark ? '#1D1D1F' : '#fff'} 100%)` }}/>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
          <StatusBar dark/>
        </div>
        <div style={{ position: 'absolute', top: 50, left: 16, right: 16, display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={onClose} style={{
            width: 32, height: 32, borderRadius: 9999, background: 'rgba(0,0,0,0.4)',
            border: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
          }}><Icon name="chevron-left" size={20}/></button>
          <button style={{
            width: 32, height: 32, borderRadius: 9999, background: 'rgba(0,0,0,0.4)',
            border: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
          }}><Icon name="ellipsis" size={18}/></button>
        </div>
        <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20 }}>
          <div style={{
            fontSize: 36, fontWeight: 600, color: '#fff', letterSpacing: 0, lineHeight: 1.1,
            textShadow: '0 2px 12px rgba(0,0,0,0.35)',
            fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-display)',
          }}>{name}</div>
          <div style={{
            marginTop: 6, fontSize: 13, color: 'rgba(255,255,255,0.85)', letterSpacing: 0,
            fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
          }}>2.4M {t.monthly}</div>
        </div>
      </div>
      <div style={{ padding: '0 16px', display: 'flex', gap: 8, marginTop: -8 }}>
        <button onClick={() => onPlay(tracks[0])} style={{
          flex: 1, height: 42, borderRadius: 9999, background: '#FA233B', color: '#fff',
          border: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          fontSize: 14, fontWeight: 600,
          fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
        }}>
          <Icon name="play.fill" size={14} color="#fff"/>
          <span>{t.play}</span>
        </button>
        <button onClick={() => setFollowing(f => !f)} style={{
          flex: 1, height: 42, borderRadius: 9999,
          background: following ? '#FA233B' : dark ? 'rgba(255,255,255,0.12)' : '#F5F5F7',
          color: following ? '#fff' : dark ? '#fff' : '#1D1D1F',
          border: 0, cursor: 'pointer', fontSize: 14, fontWeight: 600,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
        }}>
          {following && <Icon name="check" size={14}/>}
          <span>{following ? t.following : t.follow}</span>
        </button>
      </div>
      <SectionHeader title={lang === 'en' ? 'Top Songs' : 'เพลงยอดฮิต'} link={t.seeAll} lang={lang} dark={dark}/>
      <div style={{ padding: '0 16px' }}>
        {tracks.slice(0, 5).map((tk, i) => (
          <ChartRow key={tk.id + i} rank={i + 1} track={tk} isPlaying={tk.id === currentId}
            onPlay={onPlay} lang={lang} dark={dark}/>
        ))}
      </div>
      <SectionHeader title={lang === 'en' ? 'Albums' : 'อัลบั้ม'} link={t.seeAll} lang={lang} dark={dark}/>
      <AlbumRow tracks={tracks.slice(2, 8)} currentId={currentId}
        onPlay={(t2) => onOpenAlbum ? onOpenAlbum(t2) : onPlay(t2)} lang={lang} dark={dark}/>
      <SectionHeader title={t.forArtist} link={t.seeAll} lang={lang} dark={dark}/>
      <AlbumRow tracks={tracks.slice(5, 11)} currentId={currentId} onPlay={onPlay} lang={lang} dark={dark}/>
      <div style={{ height: 160 }}/>
    </div>
  )
}

// ── Playlist Detail ───────────────────────────────────────────────────────
export function PlaylistDetail({ playlist, tracks, onClose, onPlay, currentId, lang, dark }) {
  const t = COPY[lang]
  const isThai = lang !== 'en'
  const fg    = dark ? '#fff' : '#1D1D1F'
  const items = tracks.slice(0, 10)
  return (
    <div style={{
      position: 'absolute', inset: 0, background: dark ? '#1D1D1F' : '#fff',
      zIndex: 250, overflowY: 'auto', animation: 'amSheetIn 280ms cubic-bezier(0.32,0.72,0,1)',
    }}>
      <StatusBar dark={dark}/>
      <div style={{ padding: '8px 16px 0', display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={onClose} style={{
          width: 32, height: 32, borderRadius: 9999,
          background: dark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.06)',
          border: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: fg,
        }}><Icon name="chevron-left" size={20}/></button>
        <button style={{
          width: 32, height: 32, borderRadius: 9999,
          background: dark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.06)',
          border: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: fg,
        }}><Icon name="ellipsis" size={18}/></button>
      </div>
      <div style={{ padding: '0 16px' }}>
        <div style={{ marginTop: 14, position: 'relative', borderRadius: 16, overflow: 'hidden', aspectRatio: '1' }}>
          <img src={tracks[1].art} alt={playlist.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.7))' }}/>
          <div style={{ position: 'absolute', left: 16, right: 16, bottom: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.8)', letterSpacing: '0.8px', textTransform: 'uppercase' }}>{playlist.kind}</div>
            <div style={{
              marginTop: 6, fontSize: 26, fontWeight: 600, color: '#fff', letterSpacing: 0, lineHeight: 1.2,
              fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-display)',
              display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
            }}>{playlist.title}</div>
            <div style={{
              marginTop: 6, fontSize: 13, color: 'rgba(255,255,255,0.78)', letterSpacing: 0,
              fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
            }}>{playlist.meta}</div>
          </div>
        </div>
        <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
          <button onClick={() => onPlay(items[0])} style={{
            flex: 1, height: 44, borderRadius: 9999, background: '#FA233B', color: '#fff',
            border: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            fontSize: 15, fontWeight: 600,
            fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
          }}>
            <Icon name="play.fill" size={16} color="#fff"/>
            <span>{t.play}</span>
          </button>
          <button style={{
            flex: 1, height: 44, borderRadius: 9999,
            background: dark ? 'rgba(255,255,255,0.12)' : '#F5F5F7', color: '#FA233B',
            border: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            fontSize: 15, fontWeight: 600,
            fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
          }}>
            <Icon name="shuffle" size={16} color="#FA233B"/>
            <span>{t.shuffle}</span>
          </button>
        </div>
      </div>
      <div style={{ padding: '24px 16px 160px' }}>
        {items.map((tk, i) => (
          <ChartRow key={tk.id + i} rank={i + 1} track={tk} isPlaying={tk.id === currentId}
            onPlay={onPlay} lang={lang} dark={dark} showRank={false}/>
        ))}
      </div>
    </div>
  )
}
