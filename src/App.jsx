import React, { useState, useEffect, useMemo } from 'react'
import StatusBar from './components/StatusBar/StatusBar.jsx'
import TabBar from './components/TabBar/TabBar.jsx'
import MiniPlayer from './components/MiniPlayer/MiniPlayer.jsx'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx'
import TweaksPanel from './components/TweaksPanel/TweaksPanel.jsx'
import { ListenNowClassic, ListenNowEditorial, ListenNowGenreLed, Browse, Library, AlbumDetail, ArtistDetail, PlaylistDetail } from './screens/screens.jsx'
import { GenreDetail, Onboarding, SearchTab } from './screens/extra-screens.jsx'
import { NowPlayingClassic, NowPlayingLyrics, NowPlayingAmbient } from './screens/NowPlaying.jsx'
import { RadioScreen, TopChartsScreen, ReplayScreen } from './screens/RadioScreen.jsx'
import { LyricsFullScreen, QueueSheet, SearchResults, ProfileScreen, AddToPlaylistSheet } from './screens/PlayerSheets.jsx'
import { TRACKS, EDITORIAL_HERO } from './data.js'
import {
  Z_INDEX,
  TIMING,
  COLORS,
  LAYOUT,
  DENSITY_SIZES,
  GENRE_FILTER_MAP,
  TWEAK_DEFAULTS,
} from './constants.js'


/**
 * App Component
 * Main music player app with multi-screen navigation and customizable settings
 */
function AppContent() {
  const [tweaks, setTweaks]     = useState(TWEAK_DEFAULTS)
  const [tab, setTab]           = useState('listen')
  const [current, setCurrent]   = useState(TRACKS[2])
  const [playing, setPlaying]   = useState(true)
  const [progress, setProgress] = useState(0.32)
  const [shuffle, setShuffle]   = useState(false)
  const [repeat, setRepeat]     = useState(false)
  const [showNowPlaying, setShowNowPlaying] = useState(false)
  const [albumOpen, setAlbumOpen]       = useState(null)
  const [artistOpen, setArtistOpen]     = useState(null)
  const [playlistOpen, setPlaylistOpen] = useState(null)
  const [genreOpen, setGenreOpen]       = useState(null)
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [showQueue, setShowQueue]           = useState(false)
  const [showLyrics, setShowLyrics]         = useState(false)
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [showProfile, setShowProfile]       = useState(false)
  const [showReplay, setShowReplay]         = useState(false)
  const [showCharts, setShowCharts]         = useState(false)
  const [addToPlaylist, setAddToPlaylist]   = useState(null)
  const [tweakOpen, setTweakOpen]           = useState(false)

  const setTweak = (key, val) => setTweaks(t => ({ ...t, [key]: val }))

  const { lang, dark, density } = tweaks

  useEffect(() => {
    window.__showOnboarding = () => setShowOnboarding(true)
    window.__showReplay     = () => setShowReplay(true)
    window.__showCharts     = () => setShowCharts(true)
    window.__openQueue      = () => setShowQueue(true)
    window.__openLyrics     = () => setShowLyrics(true)
    window.__openProfile    = () => setShowProfile(true)
    window.__openSearchResults = () => setShowSearchResults(true)
  }, [])

  useEffect(() => {
    if (!playing) return
    const id = setInterval(
      () => setProgress((p) => (p + TIMING.playbackIncrement) % 1),
      TIMING.progressInterval
    )
    return () => clearInterval(id)
  }, [playing])

  const filteredTracks = useMemo(() => {
    if (tweaks.featuredGenre === 'all') return TRACKS
    const allowed =
      GENRE_FILTER_MAP[tweaks.featuredGenre] || ['pop', 'rock', 'indie', 'tpop']
    const matches = TRACKS.filter((t) => allowed.includes(t.genre))
    return matches.length >= 6 ? matches : TRACKS
  }, [tweaks.featuredGenre])

  const play = (track) => {
    setCurrent(track)
    setPlaying(true)
    if (current?.id !== track.id) setProgress(0)
  }
  const toggle = () => setPlaying((p) => !p)
  const skip = () => {
    const i = TRACKS.findIndex((t) => t.id === current?.id)
    play(TRACKS[(i + 1) % TRACKS.length])
  }
  const prev = () => {
    const i = TRACKS.findIndex((t) => t.id === current?.id)
    play(TRACKS[(i - 1 + TRACKS.length) % TRACKS.length])
  }

  const screenProps = {
    tracks: filteredTracks,
    currentId: current?.id,
    onPlay: play,
    onOpenAlbum: (t) => setAlbumOpen(t),
    onOpenArtist: (a) => setArtistOpen(a),
    onOpenPlaylist: (p) => setPlaylistOpen(p),
    onOpenGenre: (g) => setGenreOpen(g),
    lang,
    dark,
    density,
  }

  const screen = (() => {
    switch (tab) {
      case 'listen':
        if (tweaks.listenLayout === 'editorial')
          return <ListenNowEditorial {...screenProps} />
        if (tweaks.listenLayout === 'genre')
          return <ListenNowGenreLed {...screenProps} />
        return <ListenNowClassic {...screenProps} />
      case 'browse':
        return <Browse {...screenProps} onShowCharts={() => setShowCharts(true)} />
      case 'radio':
        return <RadioScreen tracks={filteredTracks} lang={lang} dark={dark} onPlay={play} onOpenAlbum={(t) => setAlbumOpen(t)} />
      case 'library':
        return <Library {...screenProps} onOpenProfile={() => setShowProfile(true)} />
      case 'search':
        return <SearchTab {...screenProps} onShowResults={() => setShowSearchResults(true)} />
      default:
        return <ListenNowClassic {...screenProps} />
    }
  })()

  const nowPlayingProps = {
    track: current,
    playing,
    progress,
    shuffle,
    repeat,
    onClose: () => setShowNowPlaying(false),
    onToggle: toggle,
    onSkip: skip,
    onPrev: prev,
    onShuffle: () => setShuffle(s => !s),
    onRepeat: () => setRepeat(r => !r),
    onSeek: (p) => setProgress(p),
    lang,
  }
  const NowPlayingComponent =
    tweaks.nowPlaying === 'lyrics'
      ? NowPlayingLyrics
      : tweaks.nowPlaying === 'ambient'
        ? NowPlayingAmbient
        : NowPlayingClassic

  return (
    <div
      data-theme={dark ? 'dark' : undefined}
      style={{
        maxWidth: LAYOUT.maxWidth,
        margin: '0 auto',
        minHeight: '100dvh',
        background: dark ? COLORS.dark.canvas : COLORS.canvas,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <StatusBar dark={dark} />
      <div
        id="main-scroll"
        style={{
          position: 'absolute',
          top: LAYOUT.statusBarHeight,
          left: 0,
          right: 0,
          bottom: 0,
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {screen}
      </div>

      <MiniPlayer
        track={current}
        playing={playing}
        progress={progress}
        onToggle={toggle}
        onOpen={() => setShowNowPlaying(true)}
        lang={lang}
        dark={dark}
      />

      <TabBar
        active={tab}
        onChange={(id) => {
          setTab(id)
          setTweakOpen(false)
        }}
        lang={lang}
        variant={tweaks.tabBar}
        dark={dark}
      />

      <TweaksPanel
        tweaks={tweaks}
        setTweak={setTweak}
        open={tweakOpen}
        onToggle={() => setTweakOpen((o) => !o)}
        onShowOnboarding={() => setShowOnboarding(true)}
      />

      {albumOpen && (
        <AlbumDetail
          track={albumOpen}
          tracks={filteredTracks}
          currentId={current?.id}
          onPlay={play}
          onClose={() => setAlbumOpen(null)}
          lang={lang}
          dark={dark}
        />
      )}
      {artistOpen && (
        <ArtistDetail
          artist={artistOpen}
          tracks={filteredTracks}
          currentId={current?.id}
          onPlay={play}
          onOpenAlbum={(t) => setAlbumOpen(t)}
          onClose={() => setArtistOpen(null)}
          lang={lang}
          dark={dark}
        />
      )}
      {playlistOpen && (
        <PlaylistDetail
          playlist={playlistOpen}
          tracks={filteredTracks}
          currentId={current?.id}
          onPlay={play}
          onClose={() => setPlaylistOpen(null)}
          lang={lang}
          dark={dark}
        />
      )}
      {genreOpen && (
        <GenreDetail
          genre={genreOpen}
          tracks={filteredTracks}
          currentId={current?.id}
          onPlay={play}
          onClose={() => setGenreOpen(null)}
          onOpenAlbum={(t) => setAlbumOpen(t)}
          onOpenArtist={(a) => setArtistOpen(a)}
          lang={lang}
          dark={dark}
        />
      )}
      {showOnboarding && (
        <Onboarding
          onClose={() => setShowOnboarding(false)}
          lang={lang}
          dark={dark}
        />
      )}
      {showNowPlaying && current && <NowPlayingComponent {...nowPlayingProps} />}

      {showQueue && (
        <QueueSheet tracks={filteredTracks} current={current} onClose={() => setShowQueue(false)} onPlay={play} lang={lang} dark={dark} />
      )}
      {showLyrics && current && (
        <LyricsFullScreen track={current} playing={playing} progress={progress} onClose={() => setShowLyrics(false)} onToggle={toggle} lang={lang} dark={dark} />
      )}
      {showSearchResults && (
        <SearchResults tracks={filteredTracks} query={lang === 'en' ? 'bodyslam' : 'บอดี้สแลม'} onClose={() => setShowSearchResults(false)} onPlay={play} onOpenAlbum={(t) => setAlbumOpen(t)} onOpenArtist={(a) => setArtistOpen(a)} lang={lang} dark={dark} />
      )}
      {showProfile && (
        <ProfileScreen tracks={filteredTracks} onClose={() => setShowProfile(false)} onShowReplay={() => { setShowProfile(false); setShowReplay(true) }} lang={lang} dark={dark} />
      )}
      {showReplay && (
        <ReplayScreen tracks={filteredTracks} onClose={() => setShowReplay(false)} onPlay={play} lang={lang} dark={dark} />
      )}
      {showCharts && (
        <TopChartsScreen tracks={filteredTracks} currentId={current?.id} onClose={() => setShowCharts(false)} onPlay={play} onOpenAlbum={(t) => setAlbumOpen(t)} lang={lang} dark={dark} />
      )}
      {addToPlaylist && (
        <AddToPlaylistSheet track={addToPlaylist} onClose={() => setAddToPlaylist(null)} lang={lang} dark={dark} />
      )}
    </div>
  )
}

/**
 * App - Root component with error boundary
 */
export default function App() {
  return (
    <ErrorBoundary>
      <AppContent />
    </ErrorBoundary>
  )
}
