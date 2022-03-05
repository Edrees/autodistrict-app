import { useEffect } from 'react'
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import homePagePic from '../assets/autodistrict-homepage.jpeg'

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
      <Typography variant="body1" component="div" align="justify">
        Auto District staat voor een langdurige relatie met de klant op basis
        van eerlijkheid & helder zaken doen. Kwaliteit & deskundigheid staan bij
        ons hoog in het vaandel. Wij hopen u graag van dienst te mogen zijn!
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ maxWidth: 800, pt: 2 }}>
            <img src={homePagePic} alt="Auto District Poeldijk" width="100%" />
          </Box>
        </Grid>
        {/* <Grid item xs={12}>
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
        </Grid> */}
      </Grid>
    </Container>
  )
}
