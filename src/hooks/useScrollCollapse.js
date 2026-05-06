import { useState, useEffect, useRef } from 'react'

export function useScrollCollapse(scrollElementId = 'main-scroll', threshold = 10) {
  const [collapsed, setCollapsed] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const el = document.getElementById(scrollElementId)
    if (!el) return

    const onScroll = () => {
      const y = el.scrollTop
      const delta = y - lastY.current
      if (Math.abs(delta) < threshold) return
      setCollapsed(delta > 0 && y > 40)
      lastY.current = y
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [scrollElementId, threshold])

  return collapsed
}
