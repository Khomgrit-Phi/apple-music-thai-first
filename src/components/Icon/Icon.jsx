import React from 'react'

const PATHS = {
  'house': (c) => <><path d="M4 12 L14 4 L24 12 V22 a2 2 0 0 1-2 2H6 a2 2 0 0 1-2-2Z" stroke={c} strokeWidth="1.5" fill="none" strokeLinejoin="round"/><path d="M11 24V16h6v8" stroke={c} strokeWidth="1.5" fill="none" strokeLinejoin="round"/></>,
  'house.fill': (c) => <path d="M14 3.2L3.5 11.5a1.5 1.5 0 0 0-.5 1.1V22.5A1.5 1.5 0 0 0 4.5 24H10V16.5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1V24h5.5A1.5 1.5 0 0 0 25 22.5V12.6a1.5 1.5 0 0 0-.5-1.1Z" fill={c}/>,
  'compass': (c) => <><circle cx="14" cy="14" r="10.5" stroke={c} strokeWidth="1.5" fill="none"/><path d="M18 10L15 15L10 18L13 13Z" fill={c}/></>,
  'grid': (c) => <><rect x="4" y="4" width="9" height="9" rx="1.5" stroke={c} strokeWidth="1.5" fill="none"/><rect x="15" y="4" width="9" height="9" rx="1.5" stroke={c} strokeWidth="1.5" fill="none"/><rect x="4" y="15" width="9" height="9" rx="1.5" stroke={c} strokeWidth="1.5" fill="none"/><rect x="15" y="15" width="9" height="9" rx="1.5" stroke={c} strokeWidth="1.5" fill="none"/></>,
  'grid.fill': (c) => <><rect x="4" y="4" width="9" height="9" rx="1.5" fill={c}/><rect x="15" y="4" width="9" height="9" rx="1.5" fill={c}/><rect x="4" y="15" width="9" height="9" rx="1.5" fill={c}/><rect x="15" y="15" width="9" height="9" rx="1.5" fill={c}/></>,
  'search': (c) => <><circle cx="12" cy="12" r="7.5" stroke={c} strokeWidth="1.5" fill="none"/><path d="m17.5 17.5 5 5" stroke={c} strokeWidth="1.5" strokeLinecap="round" fill="none"/></>,
  'play.fill': (c) => <path d="M8 5.5a1 1 0 0 1 1.5-.87l13 8.5a1 1 0 0 1 0 1.74l-13 8.5A1 1 0 0 1 8 22.5Z" fill={c}/>,
  'pause.fill': (c) => <><rect x="7" y="5" width="5" height="18" rx="1.5" fill={c}/><rect x="16" y="5" width="5" height="18" rx="1.5" fill={c}/></>,
  'forward.fill': (c) => <path d="M4 6.5a1 1 0 0 1 1.5-.87L14 11V6.5a1 1 0 0 1 1.5-.87l9 6.5a1 1 0 0 1 0 1.74l-9 6.5A1 1 0 0 1 14 19.5V15l-8.5 5.37A1 1 0 0 1 4 19.5Z" fill={c}/>,
  'backward.fill': (c) => <path d="M24 6.5a1 1 0 0 0-1.5-.87L14 11V6.5a1 1 0 0 0-1.5-.87l-9 6.5a1 1 0 0 0 0 1.74l9 6.5A1 1 0 0 0 14 19.5V15l8.5 5.37A1 1 0 0 0 24 19.5Z" fill={c}/>,
  'shuffle': (c) => <><path d="M3 7h4l4 5" stroke={c} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 21h4l4-5" stroke={c} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/><path d="m17 7h6v6" stroke={c} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/><path d="m17 21h6v-6" stroke={c} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/><path d="m23 7-12 14" stroke={c} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></>,
  'repeat': (c) => <><path d="M5 11V9a3 3 0 0 1 3-3h15l-3-3" stroke={c} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/><path d="M23 17v2a3 3 0 0 1-3 3H5l3 3" stroke={c} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></>,
  'ellipsis': (c) => <><circle cx="6" cy="14" r="2" fill={c}/><circle cx="14" cy="14" r="2" fill={c}/><circle cx="22" cy="14" r="2" fill={c}/></>,
  'heart': (c) => <path d="M14 23.5s-9-5.5-9-12a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.5-9 12-9 12z" stroke={c} strokeWidth="1.5" fill="none" strokeLinejoin="round"/>,
  'heart.fill': (c) => <path d="M14 23.5s-9-5.5-9-12a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6.5-9 12-9 12z" fill={c}/>,
  'plus': (c) => <path d="M14 5V23M5 14H23" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>,
  'check': (c) => <path d="M5 14L11 20L23 8" stroke={c} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>,
  'chevron-down': (c) => <path d="m6 11 8 8 8-8" stroke={c} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>,
  'chevron-right': (c) => <path d="m11 6 8 8-8 8" stroke={c} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>,
  'chevron-left': (c) => <path d="m17 6-8 8 8 8" stroke={c} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>,
  'airplay': (c) => <><path d="M5 19h-1a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" stroke={c} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/><path d="m9 24 5-6 5 6z" fill={c}/></>,
  'list': (c) => <path d="M9 7H24M9 14H24M9 21H24M5 7h.01M5 14h.01M5 21h.01" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>,
  'mic': (c) => <><rect x="11" y="3" width="6" height="14" rx="3" stroke={c} strokeWidth="1.5" fill="none"/><path d="M6 13v1a8 8 0 0 0 16 0v-1M14 22v3" stroke={c} strokeWidth="1.5" fill="none" strokeLinecap="round"/></>,
  'download': (c) => <><path d="M14 4V19M8 13L14 19L20 13" stroke={c} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 23H23" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></>,
  'queue': (c) => <><path d="M4 7H22M4 14H22M4 21H16" stroke={c} strokeWidth="1.5" strokeLinecap="round"/><path d="m20 18 4 3-4 3z" fill={c}/></>,
  'sparkle': (c) => <path d="M14 4L16 11L23 13L16 15L14 22L12 15L5 13L12 11Z" fill={c}/>,
  'x': (c) => <path d="M7 7l14 14M21 7L7 21" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>,
  'settings': (c) => <><circle cx="14" cy="14" r="4" stroke={c} strokeWidth="1.5" fill="none"/><path d="M14 4v3M14 21v3M4 14h3M21 14h3M7 7l2 2M19 19l2 2M7 21l2-2M19 9l2-2" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></>,
  'radio': (c) => <><circle cx="14" cy="14" r="10.5" stroke={c} strokeWidth="1.5" fill="none"/><circle cx="14" cy="14" r="6" stroke={c} strokeWidth="1.5" fill="none"/><circle cx="14" cy="14" r="1.75" fill={c}/></>,
}

export default function Icon({ name, size = 22, color }) {
  const c = color || 'currentColor'
  const fn = PATHS[name]
  return (
    <svg
      width={size} height={size}
      viewBox="0 0 28 28"
      style={{ display: 'block', flexShrink: 0 }}
      aria-hidden="true"
    >
      {fn ? fn(c) : null}
    </svg>
  )
}
