import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { lazy, Suspense } from 'react'
import Icon from '../Icon/Icon.jsx'
import { COPY } from '../../data.js'
import { useScrollCollapse } from '../../hooks/useScrollCollapse.js'

const FluidGlass = lazy(() => import('../FluidGlass'))

const SPRING = { type: 'spring', stiffness: 400, damping: 30 }

export default function TabBar({ active = 'listen', onChange, lang = 'th', dark = false, useFluidGlass = false }) {
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

  /* 🔥 styles used in both modes */
  const glassBg = dark
    ? 'rgba(30,30,32,0.1)'
    : 'rgba(255,255,255,0.1)'

  const glassFilter = 'blur(12px) saturate(200%) brightness(1.08)'

  const glassBorder = dark
    ? '0.5px solid rgba(255,255,255,0.14)'
    : '0.5px solid rgba(255,255,255,0.55)'

  const glassShadow = dark
    ? '0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.12)'
    : '0 8px 32px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.85)'

  const inactiveColor = dark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)'

  // FluidGlass bar mode navigation items
  const navItems = items.map(it => ({
    label: it.label,
    link: `#${it.id}`
  }))

  // If using FluidGlass mode, render it with custom overlay
  if (useFluidGlass) {
    const fallbackStyle = {
      position: 'fixed',
      bottom: 8,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'min(calc(100% - 24px), 366px)',
      height: '68px',
      borderRadius: 22,
      zIndex: 200,
      background: glassBg,
      backdropFilter: glassFilter,
      WebkitBackdropFilter: glassFilter,
      border: glassBorder,
      boxShadow: glassShadow,
    }

    return (
      <Suspense fallback={<div style={fallbackStyle} />}>
        <motion.div
          role="tablist"
          aria-label="Main navigation"
          layout
          animate={{ height: collapsed ? 52 : 68 }}
          transition={SPRING}
          style={{
            position: 'fixed',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'min(calc(100% - 24px), 366px)',
            bottom: 8,
            borderRadius: 22,
            zIndex: 200,
            overflow: 'hidden',
            height: collapsed ? 52 : 68,
            background: glassBg,
            backdropFilter: glassFilter,
            WebkitBackdropFilter: glassFilter,
            border: glassBorder,
            boxShadow: glassShadow,
            backgroundImage:
              'radial-gradient(rgba(206, 156, 156, 0.04) 1px, transparent 1px)',
            backgroundSize: '3px 3px',
          }}
        >
          {/* FluidGlass background in bar mode */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.8 }}>
            <FluidGlass 
              mode="bar"
              barProps={{
                navItems: [] // Suppress 3D labels to avoid overlap with HTML buttons
              }}
            />
          </div>

          {/* Interactive tab buttons overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            padding: '0 4px',
            pointerEvents: 'auto',
            zIndex: 1,
          }}>
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
                    whileTap={{ scale: 0.97 }}
                    transition={SPRING}
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: collapsed ? 44 : 56,
                      borderRadius: 16,
                      background: 'transparent',
                      border: '0.5px solid transparent',
                      color: isActive ? '#FF375F' : inactiveColor,
                      cursor: 'pointer',
                      padding: 0,
                      gap: 3,
                      position: 'relative',
                    }}
                  >
                    {/* subtle native highlight */}
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        transition={SPRING}
                        style={{
                          position: 'absolute',
                          inset: 6,
                          borderRadius: 12,
                          background: dark
                            ? 'rgba(255,255,255,0.06)'
                            : 'rgba(0,0,0,0.04)',
                          pointerEvents: 'none',
                        }}
                      />
                    )}

                    <Icon
                      name={isActive ? it.icon : it.iconInactive}
                      size={22}
                      style={{
                        opacity: isActive ? 1 : 0.85,
                        transform: isActive ? 'scale(1.04)' : 'scale(1)',
                        transition: 'all 0.2s ease',
                      }}
                    />

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
                            letterSpacing: isActive ? '-0.01em' : '0',
                            fontWeight: isActive ? 600 : 500,
                            fontFamily: isThai
                              ? 'var(--am-font-thai)'
                              : 'var(--am-font-text)',
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
          </div>
        </motion.div>
      </Suspense>
    )
  }

  // Standard glass effect (non-FluidGlass mode)
  return (
    <motion.div
      role="tablist"
      aria-label="Main navigation"
      layout
      animate={{ height: collapsed ? 52 : 68 }}
      transition={SPRING}
      style={{
        position: 'fixed',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'min(calc(100% - 24px), 366px)',
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

        /* subtle micro-noise */
        backgroundImage:
          'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '3px 3px',
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
              whileTap={{ scale: 0.97 }} /* 🔥 fixed */
              transition={SPRING}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: collapsed ? 44 : 56,
                borderRadius: 16,

                /* ❌ removed fake red bg */
                background: 'transparent',
                border: '0.5px solid transparent',

                color: isActive ? '#FF375F' : inactiveColor,
                cursor: 'pointer',
                padding: 0,
                gap: 3,
                position: 'relative',
              }}
            >
              {/* 🔥 subtle native highlight (no layout impact) */}
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  transition={SPRING}
                  style={{
                    position: 'absolute',
                    inset: 6,
                    borderRadius: 12,
                    background: dark
                      ? 'rgba(255,255,255,0.06)'
                      : 'rgba(0,0,0,0.04)',
                    pointerEvents: 'none',
                  }}
                />
              )}

              <Icon
                name={isActive ? it.icon : it.iconInactive}
                size={22}
                style={{
                  opacity: isActive ? 1 : 0.85,
                  transform: isActive ? 'scale(1.04)' : 'scale(1)',
                  transition: 'all 0.2s ease',
                }}
              />

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
                      letterSpacing: isActive ? '-0.01em' : '0',
                      fontWeight: isActive ? 600 : 500,
                      fontFamily: isThai
                        ? 'var(--am-font-thai)'
                        : 'var(--am-font-text)',
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