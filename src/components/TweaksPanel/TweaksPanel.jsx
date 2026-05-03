import React from 'react'
import {
  Z_INDEX,
  TIMING,
  EFFECTS,
  COLORS,
  STYLES,
} from '../../constants.js'

/**
 * TweaksPanel Component
 * A settings/tweaks drawer for theme, language, layout, and content preferences
 *
 * @component
 * @param {Object} props
 * @param {Object} props.tweaks - Current tweak settings
 * @param {Function} props.setTweak - Callback to update a tweak value
 * @param {boolean} props.open - Whether panel is open
 * @param {Function} props.onToggle - Callback to toggle panel visibility
 * @param {Function} props.onShowOnboarding - Callback to show onboarding screen
 */
function TweaksPanel({ tweaks, setTweak, open, onToggle, onShowOnboarding }) {
  const dark = tweaks.dark

  return (
    <>
      {/* Tweaks Toggle Button */}
      <button
        onClick={onToggle}
        aria-label="Open settings"
        aria-expanded={open}
        style={{
          position: 'absolute',
          bottom: 160,
          right: 16,
          zIndex: Z_INDEX.tweakButton,
          width: 40,
          height: 40,
          borderRadius: 9999,
          background: dark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.12)',
          ...EFFECTS.blur,
          border: 0,
          cursor: 'pointer',
          color: dark ? '#fff' : COLORS.ink,
          ...STYLES.flexCenter,
          fontSize: 18,
          transition: `background ${TIMING.bgTransition}`,
        }}
      >
        ⚙
      </button>

      {/* Tweaks Panel Drawer */}
      {open && (
        <div
          role="dialog"
          aria-label="Settings panel"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: Z_INDEX.tweakPanel,
            background: dark
              ? STYLES.glassmorphicDark.background
              : STYLES.glassmorphicLight.background,
            ...EFFECTS.glassmorphic,
            borderTop: dark
              ? STYLES.glassmorphicDark.borderTop
              : STYLES.glassmorphicLight.borderTop,
            borderRadius: '20px 20px 0 0',
            padding: '16px 20px 40px',
            maxHeight: '70%',
            overflowY: 'auto',
            animation: `amSheetIn ${TIMING.sheetIn} ease`,
          }}
        >
          {/* Header */}
          <div style={STYLES.flexBetween}>
            <span
              style={{
                fontSize: 17,
                fontWeight: 600,
                color: dark ? '#fff' : COLORS.ink,
                fontFamily: 'var(--am-font-thai)',
              }}
            >
              ตัวเลือก
            </span>
            <button
              onClick={onToggle}
              aria-label="Close settings"
              style={{
                background: 'transparent',
                border: 0,
                cursor: 'pointer',
                color: dark
                  ? 'rgba(255,255,255,0.6)'
                  : 'rgba(0,0,0,0.55)',
                fontSize: 20,
                padding: 0,
                width: 24,
                height: 24,
                ...STYLES.flexCenter,
              }}
            >
              ✕
            </button>
          </div>

          {/* Language Section */}
          <TweakSection label="ภาษา / Language" dark={dark} />
          <TweakRadio
            label="ภาษา"
            value={tweaks.lang}
            options={[
              { value: 'th', label: 'ไทย' },
              { value: 'en', label: 'EN' },
            ]}
            onChange={(v) => setTweak('lang', v)}
            dark={dark}
          />

          {/* Theme Section */}
          <TweakSection label="ธีม / Theme" dark={dark} />
          <TweakToggle
            label="Dark mode"
            value={tweaks.dark}
            onChange={(v) => setTweak('dark', v)}
            dark={dark}
          />
          <TweakRadio
            label="ความหนาแน่น"
            value={tweaks.density}
            options={['compact', 'regular', 'comfy']}
            onChange={(v) => setTweak('density', v)}
            dark={dark}
          />

          {/* Layout Section */}
          <TweakSection label="เลย์เอาต์ / Layout" dark={dark} />
          <TweakRadio
            label="Listen Now"
            value={tweaks.listenLayout}
            options={[
              { value: 'classic', label: 'Classic' },
              { value: 'editorial', label: 'Editorial' },
              { value: 'genre', label: 'Genre-led' },
            ]}
            onChange={(v) => setTweak('listenLayout', v)}
            dark={dark}
          />
          <TweakRadio
            label="Now Playing"
            value={tweaks.nowPlaying}
            options={[
              { value: 'classic', label: 'Classic' },
              { value: 'lyrics', label: 'Lyrics' },
              { value: 'ambient', label: 'Ambient' },
            ]}
            onChange={(v) => setTweak('nowPlaying', v)}
            dark={dark}
          />
          <TweakRadio
            label="Tab bar"
            value={tweaks.tabBar}
            options={[
              { value: 'default', label: 'Default' },
              { value: 'pill', label: 'Pill' },
            ]}
            onChange={(v) => setTweak('tabBar', v)}
            dark={dark}
          />

          {/* Content Section */}
          <TweakSection label="เนื้อหา / Content" dark={dark} />
          <TweakRadio
            label="Featured genre"
            value={tweaks.featuredGenre}
            options={[
              { value: 'all', label: 'All' },
              { value: 'tpop', label: 'T-Pop' },
              { value: 'luktung', label: 'Luk Thung' },
              { value: 'indie', label: 'Indie' },
            ]}
            onChange={(v) => setTweak('featuredGenre', v)}
            dark={dark}
          />

          {/* Screens Section */}
          <TweakSection label="หน้าจอ / Screens" dark={dark} />
          <button
            onClick={() => {
              onToggle()
              onShowOnboarding?.()
            }}
            style={{
              width: '100%',
              padding: '10px 14px',
              borderRadius: 10,
              border: 0,
              cursor: 'pointer',
              textAlign: 'left',
              background: dark ? 'rgba(255,255,255,0.08)' : '#F5F5F7',
              color: dark ? '#fff' : COLORS.ink,
              fontSize: 14,
              fontFamily: 'var(--am-font-thai)',
              marginBottom: 8,
              transition: `background ${TIMING.bgTransition}`,
            }}
          >
            แสดง Onboarding
          </button>
        </div>
      )}
    </>
  )
}

/**
 * TweakSection - A section header in the tweaks panel
 *
 * @param {Object} props
 * @param {string} props.label - Section label text
 * @param {boolean} props.dark - Dark mode enabled
 */
function TweakSection({ label, dark }) {
  return (
    <div
      style={{
        fontSize: 12,
        fontWeight: 600,
        color: dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.45)',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        marginTop: 18,
        marginBottom: 8,
      }}
    >
      {label}
    </div>
  )
}

/**
 * TweakToggle - A toggle switch control
 *
 * @param {Object} props
 * @param {string} props.label - Toggle label
 * @param {boolean} props.value - Current toggle state
 * @param {Function} props.onChange - Callback on toggle
 * @param {boolean} props.dark - Dark mode enabled
 */
function TweakToggle({ label, value, onChange, dark }) {
  const fg = dark ? '#fff' : COLORS.ink

  return (
    <div style={{ ...STYLES.flexBetween, marginBottom: 10 }}>
      <span style={{ fontSize: 15, color: fg }}>{label}</span>
      <button
        onClick={() => onChange(!value)}
        aria-pressed={value}
        style={{
          width: 48,
          height: 28,
          borderRadius: 9999,
          background: value ? COLORS.primary : dark ? 'rgba(255,255,255,0.2)' : '#E0E0E0',
          border: 0,
          cursor: 'pointer',
          position: 'relative',
          transition: `background ${TIMING.bgTransition}`,
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: 3,
            left: value ? 23 : 3,
            width: 22,
            height: 22,
            borderRadius: 9999,
            background: '#fff',
            transition: `left ${TIMING.bgTransition}`,
          }}
        />
      </button>
    </div>
  )
}

/**
 * TweakRadio - A radio button group control
 *
 * @param {Object} props
 * @param {string} props.label - Radio group label
 * @param {string} props.value - Currently selected value
 * @param {Array} props.options - Array of option objects or strings
 * @param {Function} props.onChange - Callback on selection change
 * @param {boolean} props.dark - Dark mode enabled
 */
function TweakRadio({ label, value, options, onChange, dark }) {
  const fg = dark ? '#fff' : COLORS.ink
  const opts = options.map((o) =>
    typeof o === 'string' ? { value: o, label: o } : o
  )

  return (
    <div style={{ marginBottom: 10 }}>
      <div
        style={{
          fontSize: 13,
          color: dark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.55)',
          marginBottom: 6,
        }}
      >
        {label}
      </div>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {opts.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            role="radio"
            aria-checked={value === opt.value}
            style={{
              padding: '5px 12px',
              borderRadius: 9999,
              fontSize: 13,
              fontWeight: 500,
              background:
                value === opt.value
                  ? COLORS.primary
                  : dark
                    ? 'rgba(255,255,255,0.1)'
                    : '#F5F5F7',
              color: value === opt.value ? '#fff' : fg,
              border: 0,
              cursor: 'pointer',
              transition: `background ${TIMING.buttonTransition}`,
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default React.memo(TweaksPanel)
