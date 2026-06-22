import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useMotionValue, useTransform } from 'framer-motion'

export default function AnimatedCounter({ target, duration = 2, suffix = '', label }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const unsub = rounded.on('change', (v) => setDisplay(v))
    return unsub
  }, [rounded])

  useEffect(() => {
    if (isInView) {
      animate(count, target, { duration, ease: 'easeOut' })
    }
  }, [isInView, count, target, duration])

  return (
    <div ref={ref} className="text-center">
      <div className="text-fluid-title font-heading font-bold text-primary" aria-live="polite">
        {display}
        {suffix}
      </div>
      {label && <p className="mt-2 text-sm text-muted md:text-base">{label}</p>}
    </div>
  )
}
