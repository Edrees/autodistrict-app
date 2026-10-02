import { useEffect, useState, type ReactNode } from 'react'
import { Box, Link, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import MailIcon from '@mui/icons-material/Mail'
import PhoneIcon from '@mui/icons-material/Phone'
import PageHeader from '../components/PageHeader'
import { Section } from '../components/ui'
import { CONTACT } from '../constants/company'
import {
  OPENING_HOURS,
  getGarageNow,
  getOpenStatus,
} from '../constants/openingHours'
import { BRAND_RED, BRAND_RED_TEXT } from '../theme'

const OPEN_GREEN = '#3fb950'

const contactRows: {
  icon: ReactNode
  label: string
  href: string
  external?: boolean
}[] = [
  { icon: <MailIcon />, label: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: <PhoneIcon />, label: CONTACT.phoneDisplay, href: CONTACT.phoneHref },
  {
    icon: <LocationOnIcon />,
    label: CONTACT.addressShort,
    href: CONTACT.mapsHref,
    external: true,
  },
]

const SmallHeading = ({ children }: { children: ReactNode }) => (
  <Typography variant="h3" component="h2" sx={{ mb: 2.5 }}>
    {children}
  </Typography>
)

/* Re-checks every 30 seconds so the badge flips at opening/closing time
   without a page reload. */
function useOpenStatus() {
  const [now, setNow] = useState(() => new Date())
  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 30_000)
    return () => window.clearInterval(timer)
  }, [])
  return { status: getOpenStatus(now), today: getGarageNow(now).dayIndex }
}

function OpenBadge({ isOpen, detail }: { isOpen: boolean; detail: string }) {
  const color = isOpen ? OPEN_GREEN : BRAND_RED
  const textColor = isOpen ? OPEN_GREEN : BRAND_RED_TEXT
  return (
    <Box
      role="status"
      aria-live="polite"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1.25,
        mb: 2.5,
        px: 1.75,
        py: 0.75,
        borderRadius: 999,
        border: 1,
        borderColor: color,
        backgroundColor: isOpen
          ? 'rgba(63, 185, 80, 0.1)'
          : 'rgba(232, 0, 0, 0.12)',
      }}
    >
      <Box
        aria-hidden="true"
        sx={{
          width: 9,
          height: 9,
          borderRadius: '50%',
          backgroundColor: color,
          boxShadow: `0 0 8px ${color}`,
        }}
      />
      <Typography component="span" sx={{ fontWeight: 700, color: textColor }}>
        {isOpen ? 'Nu geopend' : 'Nu gesloten'}
      </Typography>
      {detail && (
        <Typography
          component="span"
          variant="body2"
          sx={{ color: 'text.secondary' }}
        >
          - {detail}
        </Typography>
      )}
    </Box>
  )
}

export default function Contact() {
  const { status, today: huidigeDagIndex } = useOpenStatus()

  return (
    <>
      <PageHeader title="Auto District Poeldijk" />
      <Section>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '5fr 7fr' },
            gap: { xs: 6, md: 8 },
          }}
        >
          <Box>
            <SmallHeading>Contact</SmallHeading>
            <Box sx={{ display: 'grid', gap: 2, mb: 6 }}>
              {contactRows.map((row) => (
                <Link
                  key={row.href}
                  href={row.href}
                  target={row.external ? '_blank' : undefined}
                  rel={row.external ? 'noopener noreferrer' : undefined}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    color: 'text.primary',
                    fontSize: '1.05rem',
                    '& svg': { color: BRAND_RED, fontSize: 22 },
                    '&:hover': { color: BRAND_RED_TEXT },
                  }}
                >
                  {row.icon}
                  {row.label}
                </Link>
              ))}
            </Box>

            <SmallHeading>Openingstijden</SmallHeading>
            <OpenBadge isOpen={status.isOpen} detail={status.detail} />
            <Box component="dl" sx={{ m: 0, display: 'grid', gap: 0.5 }}>
              {OPENING_HOURS.map((item, index) => {
                const isVandaag = index === huidigeDagIndex
                const isGesloten = !item.open
                const tijd = isGesloten
                  ? 'Gesloten'
                  : `${item.open} - ${item.close}`
                return (
                  <Box
                    key={item.dag}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      gap: 2,
                      py: 1,
                      px: 1.5,
                      borderRadius: 1,
                      borderLeft: '3px solid',
                      borderColor: isVandaag ? BRAND_RED : 'transparent',
                      backgroundColor: isVandaag
                        ? 'rgba(232, 0, 0, 0.1)'
                        : 'transparent',
                    }}
                  >
                    <Typography
                      component="dt"
                      sx={{
                        fontWeight: isVandaag ? 700 : 400,
                        color: isVandaag ? 'text.primary' : 'text.secondary',
                      }}
                    >
                      {item.dag} {isVandaag && '(Vandaag)'}
                    </Typography>
                    <Typography
                      component="dd"
                      sx={{
                        m: 0,
                        fontWeight: isVandaag || isGesloten ? 700 : 500,
                        color: isVandaag
                          ? BRAND_RED_TEXT
                          : isGesloten
                            ? 'text.secondary'
                            : 'text.primary',
                      }}
                    >
                      {tijd}
                    </Typography>
                  </Box>
                )
              })}
            </Box>
          </Box>

          <Box>
            <SmallHeading>Route</SmallHeading>
            <Box
              sx={{
                borderRadius: 1,
                overflow: 'hidden',
                border: 1,
                borderColor: 'divider',
                lineHeight: 0,
              }}
            >
              <iframe
                title="Auto District locatie"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2452.0!2d4.1833!3d52.0167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b5b5b5b5b5b5%3A0x0!2sJupiter+39-B%2C+2685+LV+Poeldijk!5e0!3m2!1snl!2snl!4v1"
                width="100%"
                height="440"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </Box>
        </Box>
      </Section>
    </>
  )
}
