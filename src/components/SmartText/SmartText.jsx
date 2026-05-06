const THAI_RE = /[฀-๿]/

export default function SmartText({ children, style, size, weight, color, ...props }) {
  const text = typeof children === 'string' ? children : ''
  const isThai = THAI_RE.test(text)

  return (
    <span
      style={{
        fontFamily: isThai
          ? '"Sukhumvit Set", "Helvetica Neue", sans-serif'
          : '"Sukhumvit Set", -apple-system, "Helvetica Neue", sans-serif',
        lineHeight: isThai ? 1.52 : 1.3,
        fontSize: size,
        fontWeight: weight,
        color,
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  )
}
