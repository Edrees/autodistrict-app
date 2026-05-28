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

  return (
    <Container maxWidth={false} disableGutters>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Typography
            variant={isSmallOrLarger ? 'h6' : 'body1'}
            gutterBottom
            sx={{
              fontWeight: useTheme().typography.fontWeightBold,
            }}
          >
            Welkom bij Auto District
          </Typography>
          <Typography sx={{ textAlign: { md: 'justify' } }}>
            Auto District staat voor een langdurige relatie met de klant op
            basis van eerlijkheid & helder zaken doen. Kwaliteit & deskundigheid
            staan bij ons hoog in het vaandel. Wij hopen u graag van dienst te
            mogen zijn!
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12 }}
          sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}
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
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography sx={{ mb: 2 }} align="justify">
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
        <Grid size={{ xs: 12, md: 6 }}>
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
