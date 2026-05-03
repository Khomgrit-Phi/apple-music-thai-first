import React from 'react'
import { COPY, GENRE_FAMILIES } from '../data.js'

export function LiveBadge({ children }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      fontSize: 12, fontWeight: 500, color: '#FA233B',
      letterSpacing: 0, lineHeight: 1, textTransform: 'uppercase',
      fontFamily: 'var(--am-font-thai)',
    }}>
      <span style={{
        width: 6, height: 6, borderRadius: 9999,
        background: '#FA233B', animation: 'amPulse 1.2s ease infinite',
      }}/>
      {children}
    </span>
  )
}

export function GenreScroll({ items, active, onChange, lang = 'th', dark = false }) {
  return (
    <div style={{
      display: 'flex', gap: 10, padding: '8px 16px',
      overflowX: 'auto', scrollbarWidth: 'none',
    }}>
      {items.map((g) => {
        const on = g.id === active
        const label = lang === 'en' ? g.en : g.th
        return (
          <button key={g.id} onClick={() => onChange(g.id)} style={{
            flexShrink: 0, height: 34, padding: '0 16px', borderRadius: 9999,
            fontSize: 13, fontWeight: 500, letterSpacing: 0, lineHeight: 1,
            background: on ? '#FA233B' : dark ? 'rgba(255,255,255,0.1)' : '#F5F5F7',
            color: on ? '#fff' : dark ? '#fff' : '#1D1D1F', border: 0, cursor: 'pointer',
            fontFamily: lang === 'en' ? 'var(--am-font-text)' : 'var(--am-font-thai)',
            transition: 'background 150ms ease',
          }}>{label}</button>
        )
      })}
    </div>
  )
}

export function Equalizer() {
  return (
    <span style={{
      position: 'absolute', right: 8, bottom: 8,
      display: 'flex', gap: 2, alignItems: 'flex-end', height: 14,
    }}>
      {[0, 0.2, 0.4].map((d, i) => (
        <span key={i} style={{
          display: 'block', width: 3, background: '#fff', borderRadius: 2,
          height: [8, 14, 6][i],
          animation: `amEq 0.7s ease infinite alternate`,
          animationDelay: `${d}s`,
        }}/>
      ))}
    </span>
  )
}
