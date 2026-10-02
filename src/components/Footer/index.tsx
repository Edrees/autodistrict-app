import React, { useEffect } from 'react'
import { Box, Container, Link, Typography } from '@mui/material'
import { CONTACT } from '../../constants/company'

interface FooterLinkProps {
  text: string
  url: string
}

const footerLinks: FooterLinkProps[] = [
  {
    text: 'SKF Homepage',
    url: 'https://www.skf.com/be/nl',
  },
  {
    text: 'Continental Benelux',
    url: 'https://www.continental-industry.com/en/topnavi/company/location-profiles/benelux',
  },
  {
    text: 'REPXPERT',
    url: 'https://www.repxpert.nl/nl',
  },
  {
    text: 'Banden Concurrent Partner',
    url: 'https://www.bandenconcurrent.nl/garages/poeldijk/19718-auto-district/',
  },
  {
    text: 'Turbos Hoet - Turbo Partner Pro',
    url: 'https://turbopartner.th-group.eu/turbopartnerpro/',
  },
]

const FooterHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <Typography
      component="h2"
      sx={{
        fontWeight: 700,
        fontSize: 14,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color: 'text.primary',
        mb: 2,
      }}
    >
      {children}
    </Typography>
  )
}

const footerLinkSx = {
  fontWeight: 400,
  fontSize: 15,
  color: 'text.secondary',
  '&:hover': { color: 'primary.light' },
}

function Footer() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://grwapi.net/widget.min.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: { xs: 5, md: 6 },
            py: { xs: 6, md: 8 },
          }}
        >
          <Box>
            <FooterHeading>Partners</FooterHeading>
            <Box
              component="ul"
              sx={{ listStyle: 'none', p: 0, m: 0, display: 'grid', gap: 1 }}
            >
              {footerLinks.map((item) => (
                <li key={item.url}>
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={footerLinkSx}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </Box>
          </Box>
          <Box>
            <FooterHeading>Adres</FooterHeading>
            <Typography
              component="address"
              sx={{
                fontStyle: 'normal',
                color: 'text.secondary',
                fontSize: 15,
              }}
            >
              {CONTACT.addressLines.map((line) => (
                <Box key={line} component="span" sx={{ display: 'block' }}>
                  {line}
                </Box>
              ))}
            </Typography>
            <Box sx={{ mt: 2, display: 'grid', gap: 1 }}>
              <Link href={`mailto:${CONTACT.email}`} sx={footerLinkSx}>
                {CONTACT.email}
              </Link>
              <Link href={CONTACT.phoneHref} sx={footerLinkSx}>
                {CONTACT.phoneDisplay}
              </Link>
            </Box>
          </Box>
          <Box>
            <FooterHeading>Reviews</FooterHeading>
            <Box
              sx={{
                // review-widget.net injects plain HTML with a white card.
                // These selectors outrank its stylesheet so the card follows
                // the footer colours instead.
                '& .review-widget_net .grw-net-widget': {
                  fontFamily: 'inherit',
                  // The widget centres itself with auto margins; align it
                  // left under the "Reviews" heading like the other columns.
                  marginLeft: 0,
                  marginRight: 0,
                },
                '& .review-widget_net .grw-net-widget .grw-net-widget-four': {
                  backgroundColor: 'transparent',
                  border: 1,
                  borderColor: 'divider',
                  borderRadius: 1,
                  transition: 'border-color 0.2s ease',
                  '&:hover': { borderColor: 'primary.main' },
                },
                '& .review-widget_net .grw-net-widget .grw-net-text-big, & .review-widget_net .grw-net-widget .grw-net-text-extra-big':
                  { color: 'text.primary' },
                '& .review-widget_net .grw-net-widget .grw-net-text-small': {
                  color: 'text.secondary',
                },
                '& .review-widget_net .branding a': {
                  color: 'text.secondary',
                  fontWeight: 400,
                  '&:hover': { color: 'primary.light' },
                },
              }}
            >
              <div
                className="review-widget_net"
                data-uuid="89c01f66-4b4a-4fc8-a8f8-efcc4bc3fbcc"
                data-template="10"
                data-filter=""
                data-lang="en"
                data-theme="light"
              >
                <Link
                  href="https://www.review-widget.net/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://grwapi.net/assets/spinner/spin.svg"
                    title="Review Widget"
                    alt="review-widget.net"
                    loading="lazy"
                  />
                </Link>
              </div>
            </Box>
          </Box>
        </Box>
      </Container>
      <Box sx={{ borderTop: 1, borderColor: 'divider', py: 2.5 }}>
        <Container maxWidth="lg">
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            © {new Date().getFullYear()} Auto District. Alle rechten
            voorbehouden.
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}

export default Footer
