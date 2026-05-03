import React from 'react'

export default function StatusBar({ dark = false }) {
  const fg = dark ? '#fff' : '#1D1D1F'
  return (
    <div style={{
      height: 44, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '0 24px', fontSize: 16, fontWeight: 600, color: fg, flexShrink: 0,
      position: 'relative', zIndex: 50,
    }}>
      <span style={{ fontFamily: '-apple-system, "SF Pro Display", system-ui' }}>9:41</span>
      <span style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        <svg width="18" height="12" viewBox="0 0 18 12">
          <path d="M0 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1ZM5 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1ZM10 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1ZM15 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1Z" fill={fg}/>
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12">
          <path d="M8 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM3 7a7 7 0 0 1 10 0l-1 1a5.5 5.5 0 0 0-8 0ZM0 4a11 11 0 0 1 16 0l-1 1a9.5 9.5 0 0 0-14 0Z" fill={fg}/>
        </svg>
        <svg width="26" height="13" viewBox="0 0 26 13">
          <rect x="0.5" y="0.5" width="22" height="12" rx="3" stroke={fg} fill="none" opacity="0.4"/>
          <rect x="2" y="2" width="18" height="9" rx="2" fill={fg}/>
          <rect x="23" y="4" width="2" height="5" rx="1" fill={fg} opacity="0.4"/>
        </svg>
      </span>
    </div>
  )
}
