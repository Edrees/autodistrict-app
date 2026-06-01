import {
  Container,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import aircoPagePic from '../assets/auto-district-airco.jpeg'

function Airco() {
  const isSmallOrLarger = useMediaQuery(useTheme().breakpoints.up('sm'))

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        minHeight: useTheme().spacing(50),
        padding: { xs: useTheme().spacing(4), md: useTheme().spacing(5) },
        borderRadius: 1,
        backgroundColor: 'white',
        boxShadow: 1,
      }}
    >
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Typography
            variant={isSmallOrLarger ? 'h6' : 'body1'}
            component="div"
            gutterBottom
            sx={{
              fontWeight: useTheme().typography.fontWeightBold,
            }}
          >
            Professionele Airco Service bij Auto District
          </Typography>
          <Typography sx={{ textAlign: { md: 'justify' }, mb: 2 }}>
            Werkt uw airconditioning niet meer optimaal, blaast deze lauwe lucht
            of wilt u storingen in de zomer voorkomen? Bij{' '}
            <strong>Auto District Poeldijk</strong> bent u aan het juiste adres
            voor compleet en vakkundig airco-onderhoud. Met onze geavanceerde{' '}
            <strong>MAHLE aircomachines</strong>
            onderhouden en vullen wij aircosystemen van elk type voertuig. Of uw
            auto nu is uitgerust met het oudere{' '}
            <strong>R134a koudemiddel</strong> of het modernere,
            milieuvriendelijke <strong>R1234yf koudemiddel</strong>: wij hebben
            voor beide systemen de juiste expertise en apparatuur in huis. Mocht
            uw airco defect of volledig leeg zijn, dan sporen wij lekkages
            nauwkeurig op met behulp van een gespecialiseerde afpersset met
            formeergas, een elektronische lekdetector of via{' '}
            <strong>UV-detectie</strong>. Na afloop van de servicebeurt ontvangt
            u van ons altijd een officiële uitdraai met de exacte specificaties
            van het onderhoud.
          </Typography>
        </Grid>
        <Grid
          size={{ xs: 12 }}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Paper
            elevation={2}
            sx={{
              padding: 2,
              display: 'flex',
            }}
          >
            <img
              src={aircoPagePic}
              alt="Auto District Airco Service"
              width="100%"
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Airco
