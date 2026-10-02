import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Container, Typography } from '@mui/material'
import type { SxProps, Theme } from '@mui/material/styles'
import { BRAND_RED, DISPLAY_FONT } from '../../theme'
import type { ServiceCard } from '../../constants/services'
import { SERVICE_PAGES_ENABLED } from '../../constants/features'

/*
 * Fades and slides its content up the first time it scrolls into view.
 * Runs once per element; content stays in the DOM (fine for SEO) and is shown
 * immediately when the user prefers reduced motion or the browser lacks
 * IntersectionObserver.
 */
export function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px' }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <Box
      ref={ref}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(32px)',
        transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
        transitionDelay: `${delay}ms`,
        '@media (prefers-reduced-motion: reduce)': {
          opacity: 1,
          transform: 'none',
          transition: 'none',
        },
      }}
    >
      {children}
    </Box>
  )
}

/*
 * Vertical rhythm for a full-width band. `tone="paper"` gives the lighter band.
 * `reveal` animates the content in on first scroll (the band itself stays put).
 */
export function Section({
  children,
  id,
  tone = 'default',
  reveal = false,
  sx,
}: {
  children: ReactNode
  id?: string
  tone?: 'default' | 'paper'
  reveal?: boolean
  sx?: SxProps<Theme>
}) {
  return (
    <Box
      component="section"
      id={id}
      sx={[
        {
          py: { xs: 7, md: 10 },
          ...(tone === 'paper' && {
            backgroundColor: 'background.paper',
            borderTop: 1,
            borderBottom: 1,
            borderColor: 'divider',
          }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Container maxWidth="lg">
        {reveal ? <Reveal>{children}</Reveal> : children}
      </Container>
    </Box>
  )
}

export function SectionHeading({
  title,
  intro,
  component = 'h2',
}: {
  title: ReactNode
  intro?: ReactNode
  component?: 'h2' | 'h3'
}) {
  return (
    <Box sx={{ maxWidth: 760, mb: { xs: 4, md: 5 } }}>
      <Typography variant="h2" component={component}>
        {title}
      </Typography>
      {intro && (
        <Typography sx={{ mt: 2, color: 'text.secondary' }}>{intro}</Typography>
      )}
    </Box>
  )
}

/* Sub-heading inside a text page. */
export function SubHeading({ children }: { children: ReactNode }) {
  return (
    <Typography
      variant="h3"
      component="h2"
      sx={{ mt: { xs: 5, md: 6 }, mb: 1.5 }}
    >
      {children}
    </Typography>
  )
}

/* Body copy: muted colour, bold phrases lift to the primary text colour. */
export function Prose({
  children,
  sx,
}: {
  children: ReactNode
  sx?: SxProps<Theme>
}) {
  return (
    <Typography
      component="div"
      sx={[
        { color: 'text.secondary', mb: 2, '& p': { m: 0, mb: 2 } },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Typography>
  )
}

/* Red dash bullets, or red numbers when `ordered`. */
export function BulletList({
  items,
  ordered = false,
}: {
  items: ReactNode[]
  ordered?: boolean
}) {
  return (
    <Box
      component={ordered ? 'ol' : 'ul'}
      sx={{
        listStyle: 'none',
        p: 0,
        m: 0,
        my: 2,
        display: 'grid',
        gap: 1.5,
        counterReset: 'item',
      }}
    >
      {items.map((item, index) => (
        <Box
          component="li"
          key={index}
          sx={{
            position: 'relative',
            pl: ordered ? 4 : 2.5,
            color: 'text.secondary',
            '&::before': ordered
              ? {
                  counterIncrement: 'item',
                  content: 'counter(item)',
                  position: 'absolute',
                  left: 0,
                  top: '-0.1em',
                  fontFamily: DISPLAY_FONT,
                  fontWeight: 900,
                  fontSize: '1.4rem',
                  color: BRAND_RED,
                }
              : {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  top: '0.8em',
                  width: 10,
                  height: 2,
                  backgroundColor: BRAND_RED,
                },
          }}
        >
          {item}
        </Box>
      ))}
    </Box>
  )
}

/* Real <img> in a thin frame, with an optional caption. */
export function ImageFrame({
  src,
  alt,
  caption,
  maxWidth,
}: {
  src: string
  alt: string
  caption?: ReactNode
  maxWidth?: number
}) {
  return (
    <Box component="figure" sx={{ m: 0, mx: 'auto', maxWidth, width: '100%' }}>
      <Box
        component="img"
        src={src}
        alt={alt}
        loading="lazy"
        sx={{
          display: 'block',
          width: '100%',
          height: 'auto',
          borderRadius: 1,
          border: 1,
          borderColor: 'divider',
        }}
      />
      {caption && (
        <Typography
          component="figcaption"
          variant="body2"
          sx={{ mt: 1.5, color: 'text.secondary' }}
        >
          {caption}
        </Typography>
      )}
    </Box>
  )
}

/* Amber top rule + title + text. Used for trust points and "voordelen". */
export function FeatureCard({
  title,
  children,
}: {
  title: ReactNode
  children: ReactNode
}) {
  return (
    <Box sx={{ borderTop: 2, borderColor: BRAND_RED, pt: 2.5, height: '100%' }}>
      <Typography variant="h4" component="h3">
        {title}
      </Typography>
      <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
        {children}
      </Typography>
    </Box>
  )
}

export function FeatureGrid({
  children,
  columns = 4,
}: {
  children: ReactNode
  columns?: 2 | 3 | 4
}) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: columns === 3 ? '1fr' : '1fr 1fr',
          md: `repeat(${columns}, 1fr)`,
        },
        gap: { xs: 3, md: 4 },
      }}
    >
      {children}
    </Box>
  )
}

/* Service tiles: links to the sub-pages, or plain tiles while the
   sub-pages are switched off (see constants/features.ts). */
export function ServiceCardGrid({ services }: { services: ServiceCard[] }) {
  const tileSx = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 1,
    p: { xs: 2, md: 2.5 },
    minHeight: 140,
    borderRadius: 1,
    border: 1,
    borderColor: 'divider',
    backgroundColor: 'background.paper',
    color: 'text.primary',
    textDecoration: 'none',
  } as const

  const linkSx = {
    ...tileSx,
    transition:
      'border-color 0.2s ease, transform 0.2s ease, background-color 0.2s ease',
    '&:hover': {
      borderColor: BRAND_RED,
      transform: 'translateY(-2px)',
    },
    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
      '&:hover': { transform: 'none' },
    },
  }

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr 1fr',
          sm: 'repeat(3, 1fr)',
          md: 'repeat(4, 1fr)',
        },
        gap: 2,
      }}
    >
      {services.map(({ name, desc, Icon, path }) => {
        const content = (
          <>
            <Icon sx={{ color: BRAND_RED, fontSize: 34 }} />
            <Typography
              sx={{
                fontFamily: DISPLAY_FONT,
                fontWeight: 800,
                fontSize: '1.5rem',
                lineHeight: 1.1,
                mt: 'auto',
              }}
            >
              {name}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {desc}
            </Typography>
          </>
        )
        return SERVICE_PAGES_ENABLED ? (
          <Box key={path} component={RouterLink} to={path} sx={linkSx}>
            {content}
          </Box>
        ) : (
          <Box key={path} sx={tileSx}>
            {content}
          </Box>
        )
      })}
    </Box>
  )
}

/* Title + description rows (the "Waarvoor kunt u terecht" list). */
export function UspList({
  items,
}: {
  items: { title: string; desc: ReactNode }[]
}) {
  return (
    <Box
      component="ul"
      sx={{
        listStyle: 'none',
        p: 0,
        m: 0,
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        columnGap: 6,
        rowGap: 3.5,
      }}
    >
      {items.map((usp) => (
        <Box
          component="li"
          key={usp.title}
          sx={{ position: 'relative', pl: 2.5 }}
        >
          <Box
            aria-hidden="true"
            sx={{
              position: 'absolute',
              left: 0,
              top: '0.75em',
              width: 10,
              height: 2,
              backgroundColor: BRAND_RED,
            }}
          />
          <Typography sx={{ fontWeight: 700 }}>{usp.title}</Typography>
          <Typography variant="body2" sx={{ mt: 0.5, color: 'text.secondary' }}>
            {usp.desc}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}

/* Two columns on desktop, stacked on mobile. */
export function TwoColumn({
  children,
  ratio = '1.1fr 1fr',
  align = 'center',
}: {
  children: ReactNode
  ratio?: string
  align?: 'center' | 'start'
}) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: ratio },
        gap: { xs: 4, md: 8 },
        alignItems: align,
      }}
    >
      {children}
    </Box>
  )
}
