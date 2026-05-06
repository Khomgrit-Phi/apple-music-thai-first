import styles from './GlobalNav.module.css'

export default function GlobalNav({ title = 'Apple Music', rightAction }) {
  return (
    <nav className={styles.nav}>
      <span className={styles.title}>{title}</span>
      <div className={styles.right}>
        {rightAction}
        <div
          aria-label="Profile"
          style={{
            width: 34,
            height: 34,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FFB340 0%, #FF6B00 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 14,
            fontWeight: 700,
            color: '#fff',
            flexShrink: 0,
            cursor: 'pointer',
            letterSpacing: 0,
          }}
          onClick={() => window.__openProfile && window.__openProfile()}
        >
          K
        </div>
      </div>
    </nav>
  )
}
