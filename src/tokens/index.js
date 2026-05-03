export const colors = {
  primary:           '#FA233B',
  primaryFocus:      '#FF375F',
  primaryOnDark:     '#FF6B81',
  onPrimary:         '#FFFFFF',

  ink:               '#1D1D1F',
  bodyMuted:         'rgba(0,0,0,0.55)',
  inkMuted80:        '#333333',
  inkMuted48:        '#7A7A7A',
  bodyOnDark:        '#FFFFFF',

  canvas:            '#FFFFFF',
  canvasParchment:   '#F5F5F7',
  surfacePearl:      '#FAFAFC',
  surfaceTile1:      '#272729',
  surfaceTile2:      '#2A2A2C',
  surfaceTile3:      '#252527',
  surfaceBlack:      '#000000',
  surfaceChip:       'rgba(210,210,215,0.64)',

  dividerSoft:       '#F0F0F0',
  hairline:          '#E0E0E0',

  success:           '#30D158',
  warning:           '#FF9F0A',
  danger:            '#FF453A',
  info:              '#0A84FF',

  dark: {
    ink:             '#FFFFFF',
    bodyMuted:       'rgba(255,255,255,0.55)',
    canvas:          '#000000',
    canvasParchment: '#1C1C1E',
    dividerSoft:     '#2C2C2E',
    hairline:        '#3A3A3C',
    primary:         '#FF375F',
    onPrimary:       '#FFFFFF',
  },
}

export const typography = {
  display:       { size: '32px', weight: 600, lineHeight: 1.25, letterSpacing: '-0.20px' },
  section:       { size: '20px', weight: 600, lineHeight: 1.30, letterSpacing: '0' },
  bodyStrong:    { size: '17px', weight: 600, lineHeight: 1.47, letterSpacing: '-0.374px' },
  body:          { size: '16px', weight: 400, lineHeight: 1.45, letterSpacing: '-0.374px' },
  caption:       { size: '14px', weight: 400, lineHeight: 1.45, letterSpacing: '-0.224px' },
  label:         { size: '12px', weight: 500, lineHeight: 1.0,  letterSpacing: '0.3px' },
  buttonLarge:   { size: '18px', weight: 300, lineHeight: 1.0,  letterSpacing: '0' },
  buttonUtility: { size: '14px', weight: 400, lineHeight: 1.29, letterSpacing: '-0.224px' },
  finePrint:     { size: '12px', weight: 400, lineHeight: 1.0,  letterSpacing: '-0.12px' },
  navLink:       { size: '12px', weight: 400, lineHeight: 1.0,  letterSpacing: '-0.12px' },
  thai: {
    lineHeightMult: 1.05,
    minLineHeight:  1.52,
    maxLines:       2,
  },
}

export const spacing = {
  xxs: '4px',
  xs:  '8px',
  sm:  '12px',
  md:  '16px',
  lg:  '24px',
  xl:  '32px',
  xxl: '48px',
  section: '80px',
  imageToTitle: '8px',
  titleToMeta:  '4px',
}

export const radius = {
  none: '0px',
  xs:   '5px',
  sm:   '8px',
  md:   '12px',
  lg:   '16px',
  xl:   '20px',
  pill: '9999px',
  full: '9999px',
}

export const motion = {
  fast:   '150ms',
  normal: '300ms',
  slow:   '500ms',
  easing: {
    default: 'ease-out',
    enter:   'cubic-bezier(0.32,0.72,0,1)',
    exit:    'cubic-bezier(0.32,0,0.67,0)',
    spring:  'cubic-bezier(0.34,1.56,0.64,1)',
  },
}

export const music = {
  miniPlayerH:   64,
  tabBarH:       83,
  albumCardSize: 148,
  nowPlayingArt: 280,
}
