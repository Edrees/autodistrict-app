import { useEffect } from 'react'
import {
  Container,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import homePagePic from '../assets/auto-district-homepage.jpeg'
import homePagePicRdw from '../assets/auto-district-rdw.jpeg'

export default function Home() {
  const isSmallOrLarger = useMediaQuery(useTheme().breakpoints.up('sm'))

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
    <Container maxWidth={false} disableGutters>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant={isSmallOrLarger ? 'h6' : 'body1'}
            component="div"
            gutterBottom
            sx={{
              fontWeight: useTheme().typography.fontWeightBold,
            }}
          >
            Welkom bij Auto District
          </Typography>
          {/* </Grid>
        <Grid item xs={12}> */}
          <Typography variant="body1" component="div" align="justify">
            Auto District staat voor een langdurige relatie met de klant op
            basis van eerlijkheid & helder zaken doen. Kwaliteit & deskundigheid
            staan bij ons hoog in het vaandel. Wij hopen u graag van dienst te
            mogen zijn!
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: 'flex', justifyContent: 'center' }}
          mb={8}
        >
          <Paper
            elevation={2}
            sx={{
              padding: 2,
              display: 'flex',
            }}
          >
            <img src={homePagePic} alt="Auto District Poeldijk" width="100%" />
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          mb={8}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Paper
            elevation={2}
            sx={{
              padding: 4,
            }}
          >
            <Typography variant="h4" sx={{ alignSelf: 'center' }}>
              Google Reviews
            </Typography>
            <div
              className="review-widget_net"
              data-uuid="89c01f66-4b4a-4fc8-a8f8-efcc4bc3fbcc"
              data-template="2"
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
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography mb={2} align="justify">
            Auto District is een RDW erkend garagebedrijf en voert de APK uit
            aan alle voertuigen die onder APK2 vallen.
          </Typography>
          <Typography align="justify">
            Alle monteurs die werkzaam zijn bij Auto District beschikken over de
            juiste papieren en zijn allemaal APK-keurmeester. Ook werken we
            flexibel en daarom kunnen we uw Auto altijd snel inplannen voor een
            Algemen Periodieke Keuring.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            elevation={2}
            sx={{
              padding: 2,
              display: 'flex',
            }}
          >
            <img src={homePagePicRdw} alt="Auto District RDW" width="100%" />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
