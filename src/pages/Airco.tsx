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
    <Container maxWidth={false} disableGutters>
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
            Airco service
          </Typography>
          <Typography sx={{ textAlign: { md: 'justify' }, mb: 2 }}>
            Met onze MAHLE aircomachines kunnen het onderhoud uitvoeren van uw
            auto. Heeft u een ouder systeem met R134a of een nieuwer systeem met
            R1234yf? Dat maakt voor ons niet uit bij beide systemen kunnen we
            het onderhoud uitvoeren.
          </Typography>
          <Typography sx={{ textAlign: { md: 'justify' }, mb: 2 }}>
            Heeft u een niet werkende of leeg airco systeem. Dan kunnen wij
            diagnose stellen met ons afpersset met formeergas en onze
            lekdetector. Is het systeem al gevuld met UV dan hebben we ook
            hiervoor de juiste benodigdheden om de lekkage op te sporen.
          </Typography>
          <Typography sx={{ textAlign: { md: 'justify' }, mb: 2 }}>
            Nadat alles netjes werkt en gecontroleerd is. Krijgt u van ons een
            uitdraai met specificaties.
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
