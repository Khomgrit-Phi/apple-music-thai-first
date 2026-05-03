import { useState, useEffect } from 'react'
import Icon from '../Icon/Icon.jsx'
import { COPY } from '../../data.js'

export default function TabBar({ active = 'listen', onChange, lang = 'th', dark = false }) {
  const [shrunk, setShrunk] = useState(false)
  const t = COPY[lang]
  const isThai = lang !== 'en'

  const items = [
    { id: 'listen',  icon: 'house.fill', iconInactive: 'house',  label: t.listenNow },
    { id: 'browse',  icon: 'compass',    iconInactive: 'compass', label: t.browse },
    { id: 'radio',   icon: 'radio',      iconInactive: 'radio',   label: t.radio },
    { id: 'library', icon: 'grid.fill',  iconInactive: 'grid',    label: t.library },
    { id: 'search',  icon: 'search',     iconInactive: 'search',  label: t.search },
  ]

  useEffect(() => {
    const scrollEl = document.getElementById('main-scroll')
    if (!scrollEl) return
    const onScroll = () => setShrunk(scrollEl.scrollTop > 40)
    scrollEl.addEventListener('scroll', onScroll, { passive: true })
    return () => scrollEl.removeEventListener('scroll', onScroll)
  }, [])

  const glassBg     = dark ? 'rgba(30,30,32,0.75)' : 'rgba(255,255,255,0.72)'
  const glassFilter = 'saturate(200%) blur(24px)'
  const glassBorder = dark
    ? '0.5px solid rgba(255,255,255,0.14)'
    : '0.5px solid rgba(255,255,255,0.55)'
  const glassShadow = dark
    ? '0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -0.5px 0 rgba(0,0,0,0.30)'
    : '0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.8)'

  const tabHeight     = shrunk ? 52 : 68
  const itemHeight    = shrunk ? 44 : 56
  const inactiveColor = dark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)'

  return (
    <div
      role="tablist"
      aria-label="Main navigation"
      style={{
        position: 'absolute',
        left: 12,
        right: 12,
        bottom: 8,
        height: tabHeight,
        borderRadius: 22,
        background: glassBg,
        backdropFilter: glassFilter,
        WebkitBackdropFilter: glassFilter,
        border: glassBorder,
        boxShadow: glassShadow,
        display: 'flex',
        alignItems: 'center',
        padding: '0 4px',
        zIndex: 200,
        transition: `height 250ms cubic-bezier(0.32,0.72,0,1)`,
      }}
    >
      {items.map((it) => {
        const isActive = active === it.id
        return (
          <button
            key={it.id}
            role="tab"
            aria-selected={isActive}
            aria-label={it.label}
            onClick={() => onChange?.(it.id)}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: itemHeight,
              borderRadius: 16,
              background: isActive ? 'rgba(250,35,59,0.12)' : 'transparent',
              border: isActive ? '0.5px solid rgba(250,35,59,0.25)' : '0.5px solid transparent',
              color: isActive ? '#FF375F' : inactiveColor,
              cursor: 'pointer',
              padding: 0,
              gap: 3,
              transition: 'background 200ms ease, height 250ms cubic-bezier(0.32,0.72,0,1)',
            }}
          >
            <Icon name={isActive ? it.icon : it.iconInactive} size={22} />
            <span
              aria-hidden="true"
              style={{
                fontSize: 10,
                letterSpacing: 0,
                fontWeight: isActive ? 600 : 500,
                fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
                color: isActive ? '#FF375F' : inactiveColor,
                opacity: shrunk ? 0 : 1,
                maxHeight: shrunk ? 0 : 14,
                overflow: 'hidden',
                lineHeight: 1,
                transition: 'opacity 200ms ease, max-height 200ms ease',
              }}
            >
              {it.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}
