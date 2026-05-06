import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import Icon from '../Icon/Icon.jsx'
import { COPY } from '../../data.js'
import { useScrollCollapse } from '../../hooks/useScrollCollapse.js'

const SPRING = { type: 'spring', stiffness: 400, damping: 30 }

export default function TabBar({ active = 'listen', onChange, lang = 'th', dark = false }) {
  const collapsed = useScrollCollapse('main-scroll')
  const t = COPY[lang]
  const isThai = lang !== 'en'

  const items = [
    { id: 'listen',  icon: 'house.fill', iconInactive: 'house',  label: t.listenNow },
    { id: 'browse',  icon: 'compass',    iconInactive: 'compass', label: t.browse },
    { id: 'radio',   icon: 'radio',      iconInactive: 'radio',   label: t.radio },
    { id: 'library', icon: 'grid.fill',  iconInactive: 'grid',    label: t.library },
    { id: 'search',  icon: 'search',     iconInactive: 'search',  label: t.search },
  ]

  const glassBg     = dark ? 'rgba(30,30,32,0.75)' : 'rgba(255,255,255,0.72)'
  const glassFilter = 'saturate(200%) blur(24px)'
  const glassBorder = dark
    ? '0.5px solid rgba(255,255,255,0.14)'
    : '0.5px solid rgba(255,255,255,0.55)'
  const glassShadow = dark
    ? '0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -0.5px 0 rgba(0,0,0,0.30)'
    : '0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.8)'
  const inactiveColor = dark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)'

  return (
    <motion.div
      role="tablist"
      aria-label="Main navigation"
      layout
      animate={{ height: collapsed ? 52 : 68 }}
      transition={SPRING}
      style={{
        position: 'absolute',
        left: 12,
        right: 12,
        bottom: 8,
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
        overflow: 'hidden',
      }}
    >
      <LayoutGroup>
        {items.map((it) => {
          const isActive = active === it.id
          return (
            <motion.button
              key={it.id}
              layout
              role="tab"
              aria-selected={isActive}
              aria-label={it.label}
              onClick={() => onChange?.(it.id)}
              whileTap={{ scale: 0.92 }}
              transition={SPRING}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: collapsed ? 44 : 56,
                borderRadius: 16,
                background: isActive ? 'rgba(250,35,59,0.12)' : 'transparent',
                border: isActive ? '0.5px solid rgba(250,35,59,0.25)' : '0.5px solid transparent',
                color: isActive ? '#FF375F' : inactiveColor,
                cursor: 'pointer',
                padding: 0,
                gap: 3,
              }}
            >
              <Icon name={isActive ? it.icon : it.iconInactive} size={22} />
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    key="label"
                    aria-hidden="true"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 14 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.18 }}
                    style={{
                      fontSize: 10,
                      letterSpacing: 0,
                      fontWeight: isActive ? 600 : 500,
                      fontFamily: isThai ? 'var(--am-font-thai)' : 'var(--am-font-text)',
                      color: isActive ? '#FF375F' : inactiveColor,
                      overflow: 'hidden',
                      lineHeight: 1,
                      display: 'block',
                    }}
                  >
                    {it.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          )
        })}
      </LayoutGroup>
    </motion.div>
  )
}
