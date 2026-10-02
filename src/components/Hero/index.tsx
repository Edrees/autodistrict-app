import { Link as RouterLink } from 'react-router-dom'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { keyframes } from '@mui/material/styles'
import Gauge from './Gauge'
import heroImage from '../../assets/hpHeroImage1.jpeg'
import { BRAND_RED } from '../../theme'
import { BOOKING_PATH, CONTACT, RATING } from '../../constants/company'

// The warning lamp stays lit while the gauges do their sweep, then goes out.
const lampOut = keyframes`
  0%, 70% { opacity: 1; }
  100% { opacity: 0.15; }
`

export default function Hero() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
        backgroundImage: `linear-gradient(90deg, rgba(10,11,13,0.97) 25%, rgba(10,11,13,0.72) 100%), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.2fr 1fr' },
            gap: { xs: 6, md: 8 },
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography sx={{ mb: 2, fontWeight: 500, color: 'text.secondary' }}>
              RDW-erkend garagebedrijf in Poeldijk
            </Typography>
            <Typography variant="h1" component="h1">
              Betrouwbaar auto onderhoud & reparatie in Poeldijk
            </Typography>
            <Typography
              sx={{
                mt: 3,
                maxWidth: 520,
                fontSize: '1.2rem',
                color: 'text.secondary',
              }}
            >
              Vakkundige service voor alle merken & modellen
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ mt: 4, alignItems: { xs: 'flex-start', sm: 'center' } }}
            >
              <Button
                variant="contained"
                size="large"
                component={RouterLink}
                to={BOOKING_PATH}
              >
                Afspraak maken
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                href={CONTACT.phoneHref}
              >
                Bel {CONTACT.phoneDisplay}
              </Button>
            </Stack>
            <Box sx={{ mt: 3 }}>
              <Typography
                component="span"
                sx={{ color: BRAND_RED, letterSpacing: 2 }}
                aria-hidden="true"
              >
                ★★★★★
              </Typography>
              <Typography component="span" sx={{ ml: 1, fontWeight: 700 }}>
                {RATING.score}
              </Typography>
              <Typography
                component="span"
                sx={{ ml: 1, color: 'text.secondary' }}
              >
                op Google
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              maxWidth: 520,
              width: '100%',
              justifySelf: { md: 'end' },
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              sx={{ mb: 1.5, alignItems: 'center' }}
            >
              <Box
                aria-hidden="true"
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  backgroundColor: BRAND_RED,
                  boxShadow: `0 0 10px ${BRAND_RED}`,
                  animation: `${lampOut} 3.2s ease-out 0.3s both`,
                  '@media (prefers-reduced-motion: reduce)': {
                    animation: 'none',
                    opacity: 0.15,
                  },
                }}
              />
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Systeemcheck
              </Typography>
            </Stack>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1.15fr 1fr',
                gap: 1,
                alignItems: 'center',
              }}
            >
              <Gauge
                max={8}
                step={1}
                value={2}
                decimals={1}
                unit="x1000 rpm"
                redlineFrom={7}
                ariaLabel="Toerenteller op 2,0 keer 1000 toeren per minuut"
              />
              <Gauge
                max={240}
                step={20}
                minorPerStep={2}
                value={80}
                unit="km/h"
                ariaLabel="Snelheidsmeter op 80 kilometer per uur"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
