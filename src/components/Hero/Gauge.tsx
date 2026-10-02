import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import { BRAND_RED } from '../../theme'

// Dashboard gauge: 270° sweep, starts bottom-left (135°) and ends bottom-right (45°).
const START = 135
const SWEEP = 270
const C = 100

// Start-up sweep: needle runs to full scale, then settles on the reading.
const SWEEP_DELAY_MS = 300
const SWEEP_DURATION_MS = 2600
const PEAK_AT = 0.45 // share of the duration spent going up to full scale

const polar = (r: number, deg: number) => {
  const rad = (deg * Math.PI) / 180
  return { x: C + r * Math.cos(rad), y: C + r * Math.sin(rad) }
}

const arc = (r: number, from: number, to: number) => {
  const a = polar(r, from)
  const b = polar(r, to)
  const large = to - from > 180 ? 1 : 0
  return `M ${a.x.toFixed(2)} ${a.y.toFixed(2)} A ${r} ${r} 0 ${large} 1 ${b.x.toFixed(2)} ${b.y.toFixed(2)}`
}

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

/* Gauge value at progress p (0..1) of the start-up sweep. */
const sweepValue = (p: number, max: number, value: number) =>
  p < PEAK_AT
    ? max * easeInOutCubic(p / PEAK_AT)
    : max + (value - max) * easeInOutCubic((p - PEAK_AT) / (1 - PEAK_AT))

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

interface GaugeProps {
  max: number
  value: number
  /** Distance between numbered ticks. */
  step: number
  /** Small ticks between two numbered ticks. */
  minorPerStep?: number
  /** Decimals shown in the digital readout. */
  decimals?: number
  unit: string
  ariaLabel: string
  /** Start of the red zone, in gauge units. */
  redlineFrom?: number
}

export default function Gauge({
  max,
  value,
  step,
  minorPerStep = 4,
  decimals = 0,
  unit,
  ariaLabel,
  redlineFrom,
}: GaugeProps) {
  // The needle and the digital readout share this value, so the number
  // follows the needle during the sweep.
  const [current, setCurrent] = useState(() =>
    prefersReducedMotion() ? value : 0
  )

  useEffect(() => {
    if (prefersReducedMotion()) {
      setCurrent(value)
      return
    }
    let frame = 0
    let startTime: number | null = null

    const tick = (now: number) => {
      if (startTime === null) startTime = now + SWEEP_DELAY_MS
      const progress = Math.min(
        Math.max((now - startTime) / SWEEP_DURATION_MS, 0),
        1
      )
      setCurrent(sweepValue(progress, max, value))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [max, value])

  const angleOf = (v: number) => START + (SWEEP * v) / max

  const readout = current.toLocaleString('nl-NL', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  const majors = Array.from(
    { length: Math.floor(max / step) + 1 },
    (_, i) => i * step
  )
  const minorCount = Math.floor(max / step) * minorPerStep
  const minors = Array.from(
    { length: minorCount + 1 },
    (_, i) => (i * step) / minorPerStep
  ).filter((v) => v % step !== 0)

  return (
    <Box
      component="svg"
      viewBox="0 0 200 200"
      role="img"
      aria-label={ariaLabel}
      sx={{
        width: '100%',
        height: 'auto',
        color: 'text.primary',
        display: 'block',
      }}
    >
      <circle
        cx={C}
        cy={C}
        r={97}
        fill="#0d0e11"
        stroke="rgba(255,255,255,0.14)"
        strokeWidth={1.5}
      />
      <path
        d={arc(88, START, START + SWEEP)}
        fill="none"
        stroke="rgba(255,255,255,0.14)"
        strokeWidth={1}
      />
      {redlineFrom !== undefined && (
        <path
          d={arc(88, angleOf(redlineFrom), START + SWEEP)}
          fill="none"
          stroke={BRAND_RED}
          strokeWidth={4}
        />
      )}

      {minors.map((v) => {
        const a = angleOf(v)
        const p1 = polar(84, a)
        const p2 = polar(88, a)
        return (
          <line
            key={`m${v}`}
            x1={p1.x}
            y1={p1.y}
            x2={p2.x}
            y2={p2.y}
            stroke="rgba(255,255,255,0.35)"
            strokeWidth={1}
          />
        )
      })}

      {majors.map((v) => {
        const a = angleOf(v)
        const p1 = polar(78, a)
        const p2 = polar(88, a)
        const label = polar(66, a)
        return (
          <g key={`M${v}`}>
            <line
              x1={p1.x}
              y1={p1.y}
              x2={p2.x}
              y2={p2.y}
              stroke="currentColor"
              strokeWidth={2}
            />
            <text
              x={label.x}
              y={label.y}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={max >= 200 ? 9 : 10}
              fontWeight={600}
              fill="currentColor"
              opacity={0.75}
            >
              {v}
            </text>
          </g>
        )
      })}

      <text
        x={C}
        y={138}
        textAnchor="middle"
        fontSize={22}
        fontWeight={800}
        fill="currentColor"
        style={{ fontVariantNumeric: 'tabular-nums' }}
      >
        {readout}
      </text>
      <text
        x={C}
        y={154}
        textAnchor="middle"
        fontSize={9}
        fill="currentColor"
        opacity={0.6}
      >
        {unit}
      </text>

      <g transform={`rotate(${angleOf(current)} ${C} ${C})`}>
        <line
          x1={C - 12}
          y1={C}
          x2={C + 80}
          y2={C}
          stroke={BRAND_RED}
          strokeWidth={2.5}
          strokeLinecap="round"
        />
      </g>
      <circle
        cx={C}
        cy={C}
        r={6}
        fill="#0a0b0d"
        stroke={BRAND_RED}
        strokeWidth={2}
      />
    </Box>
  )
}
