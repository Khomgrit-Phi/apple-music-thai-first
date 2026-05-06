import { motion } from 'framer-motion'
import { glass } from '../../tokens/glass.js'

export function GlassContainer({ children, variant = 'dark', style, ...props }) {
  const tokens = glass[variant] || glass.dark
  return (
    <motion.div
      layout
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      style={{
        ...tokens,
        ...style,
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function GlassButton({ children, onClick, style, variant = 'dark', ...props }) {
  const tokens = glass[variant] || glass.dark
  return (
    <motion.button
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.04 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      onClick={onClick}
      style={{
        border: 0,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: tokens.background,
        backdropFilter: tokens.backdropFilter,
        WebkitBackdropFilter: tokens.WebkitBackdropFilter,
        boxShadow: tokens.boxShadow,
        ...style,
      }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
