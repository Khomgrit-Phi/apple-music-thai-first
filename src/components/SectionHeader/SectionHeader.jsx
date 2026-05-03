import React from 'react'
import { COPY } from '../../data.js'

export default function SectionHeader({ title, link, onLinkClick, lang = 'th', dark = false }) {
  const isThai = lang !== 'en'
  const t = COPY[lang] || COPY.th
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      padding: '24px 16px 12px',
    }}>
      <h2 style={{
        margin: 0,
        fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-display)',
        fontSize: 20, fontWeight: 600,
        lineHeight: isThai ? 1.37 : 1.30,
        letterSpacing: 0,
        color: dark ? '#fff' : '#1D1D1F',
      }}>{title}</h2>
      {link !== false && link !== null && (
        <a onClick={onLinkClick} style={{
          fontSize: 14, color: '#FA233B', fontWeight: 500,
          letterSpacing: 0, cursor: 'pointer',
          fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
          lineHeight: isThai ? 1.52 : 1.45,
        }}>{link ?? t.seeAll}</a>
      )}
    </div>
  )
}
