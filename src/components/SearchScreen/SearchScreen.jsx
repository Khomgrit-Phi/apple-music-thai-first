import React, { useState } from 'react'
import styles from './SearchScreen.module.css'

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13 13l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export default function SearchScreen() {
  const [query, setQuery] = useState('')

  const recentSearches = ['ลูกทุ่ง', 'BNK48', 'พลัค ได่ขึ้น', 'เพลงใจช่วย']
  const trendingSearches = ['กำลังเป็นที่นิยม', 'ใหม่ล่าสุด', 'ร้อนแรงสัปดาห์นี้']

  return (
    <div className={styles.screen}>
      <div className={styles.searchBox}>
        <SearchIcon />
        <input
          type="search"
          placeholder="ค้นหาเพลง, ศิลปิน"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.input}
        />
      </div>

      {!query ? (
        <>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>การค้นหาล่าสุด</h2>
            <div className={styles.chips}>
              {recentSearches.map((search) => (
                <button
                  key={search}
                  className={`${styles.chip} ${styles.recent}`}
                  onClick={() => setQuery(search)}
                >
                  {search}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>กำลังเป็นที่นิยม</h2>
            <div className={styles.chips}>
              {trendingSearches.map((search) => (
                <button
                  key={search}
                  className={styles.chip}
                  onClick={() => setQuery(search)}
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>🔍</div>
          <p className={styles.emptyText}>ไม่พบผลลัพธ์สำหรับ "{query}"</p>
        </div>
      )}

      <div style={{ height: 180 }} />
    </div>
  )
}
