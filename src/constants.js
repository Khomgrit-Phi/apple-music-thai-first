/**
 * Application Constants
 * Centralized hardcoded values for z-index, animations, timing, and shared styles
 */

// ── Z-Index Stack ──────────────────────────────────────────────────────────
export const Z_INDEX = {
  tweakButton: 400,
  tweakPanel: 500,
  miniPlayer: 150,
  modal: 300,
  overlay: 350,
}

// ── Animation & Timing ──────────────────────────────────────────────────────
export const TIMING = {
  sheetIn: '250ms',
  bgTransition: '200ms',
  buttonTransition: '150ms',
  iconTransition: '150ms',
  seekTransition: '100ms',
  progressInterval: 100, // ms
  playbackIncrement: 0.003, // per interval
}

// ── Effects ────────────────────────────────────────────────────────────────
export const EFFECTS = {
  glassmorphic: {
    backdropFilter: 'saturate(180%) blur(20px)',
    WebkitBackdropFilter: 'saturate(180%) blur(20px)',
  },
  blur: {
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
  },
}

// ── Colors (mapped to design tokens) ────────────────────────────────────────
export const COLORS = {
  primary: '#FA233B',
  primaryFocus: '#FF375F',
  primaryOnDark: '#FF6B81',

  ink: '#1D1D1F',
  bodyMuted: 'rgba(0, 0, 0, 0.55)',
  inkMuted80: '#333333',
  inkMuted48: '#7A7A7A',
  bodyOnDark: '#FFFFFF',

  canvas: '#FFFFFF',
  canvasParchment: '#F5F5F7',
  surfacePearl: '#FAFAFC',
  dividerSoft: '#F0F0F0',
  hairline: '#E0E0E0',

  dark: {
    canvas: '#000000',
    canvasParchment: '#1C1C1E',
    surfaceTile1: '#272729',
    surfaceTile2: '#2A2A2C',
    surfaceBlack: '#1C1C1E',
    dividerSoft: '#2C2C2E',
    hairline: '#3A3A3C',
  },
}

// ── Shared Style Objects ────────────────────────────────────────────────────
export const STYLES = {
  // Frosted glass effect (reusable)
  glassmorphicLight: {
    background: 'rgba(255, 255, 255, 0.97)',
    ...EFFECTS.glassmorphic,
    borderTop: '0.5px solid #E0E0E0',
  },
  glassmorphicDark: {
    background: 'rgba(28, 28, 30, 0.97)',
    ...EFFECTS.glassmorphic,
    borderTop: '0.5px solid rgba(255, 255, 255, 0.12)',
  },

  // Layout containers
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // Text ellipsis
  textEllipsis: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
}

// ── Tweaks Panel Defaults ──────────────────────────────────────────────────
export const TWEAK_DEFAULTS = {
  lang: 'th',
  dark: false,
  density: 'compact',
  listenLayout: 'classic',
  nowPlaying: 'lyrics',
  tabBar: 'default',
  featuredGenre: 'all',
}

// ── Layout Constants ───────────────────────────────────────────────────────
export const LAYOUT = {
  maxWidth: 390,
  statusBarHeight: 44,
  miniPlayerHeight: 64,
  miniPlayerBottom: 91,
  tabBarHeight: 49,
  minPadding: 8,
  sidePadding: 16,
}

// ── Density Size Mapping ───────────────────────────────────────────────────
export const DENSITY_SIZES = {
  compact: 130,
  regular: 148,
  comfy: 168,
}

// ── Genre Filter Mapping ───────────────────────────────────────────────────
export const GENRE_FILTER_MAP = {
  all: ['pop', 'rock', 'indie', 'tpop'],
  tpop: ['tpop', 'pop'],
  luktung: ['pop'],
  morlam: ['pop', 'rock'],
  indie: ['indie', 'pop'],
}
