import React, { useEffect } from 'react'
import {
  useTheme,
  Box,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from '@mui/material'

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
      variant="subtitle1"
      sx={{
        fontWeight: 700,
        fontSize: 16,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color: 'text.primary',
        mb: 1,
        px: 2,
      }}
    >
      {children}
    </Typography>
  )
}

function Footer() {
  const theme = useTheme()

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
      sx={{
        zIndex: 99,
        background: theme.palette.common.white,
      }}
    >
      <Container fixed maxWidth="lg" disableGutters>
        <Grid container sx={{ py: 3 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <FooterHeading>Partners</FooterHeading>
            <List dense disablePadding>
              {footerLinks.map((item, index) => (
                <ListItem key={`footer-link-${index}`}>
                  <Link
                    href={item.url}
                    target="_blank"
                    sx={{
                      textDecoration: 'none',
                      fontWeight: 400,
                      fontSize: 15,
                      color: 'text.secondary',
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                  >
                    {item.text}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <FooterHeading>Adres</FooterHeading>
            <List dense disablePadding>
              {['Auto District', 'Jupiter 39-B', '2685 LV Poeldijk'].map(
                (line) => (
                  <ListItem key={line}>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary', fontSize: 15 }}
                    >
                      {line}
                    </Typography>
                  </ListItem>
                )
              )}
            </List>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ margin: '0 auto', '& a': { border: 0 } }}>
              <div
                className="review-widget_net"
                data-uuid="89c01f66-4b4a-4fc8-a8f8-efcc4bc3fbcc"
                data-template="10"
                data-filter=""
                data-lang="en"
                data-theme="light"
              >
                <a
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
                </a>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          height: theme.spacing(5),
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: theme.palette.primary.main,
          color: theme.palette.common.white,
          textAlign: 'center',
        }}
      >
        © {new Date().getFullYear()} Auto District. Alle rechten voorbehouden.
      </Box>
    </Box>
  )
}

export default Footer
