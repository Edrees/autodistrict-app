import {
  Container,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import aboutUsPagePic from '../assets/auto-district-overons.jpeg'

function OverOns() {
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
            gutterBottom
            sx={{
              fontWeight: useTheme().typography.fontWeightBold,
            }}
          >
            Wie zijn we
          </Typography>
          <Typography sx={{ textAlign: { md: 'justify' } }}>
            We zijn een jong gemotiveerd team met veel passie voor het vak. Na
            16 jaar ervaring blijven we telkens weer bijscholen op het gebied
            van de allernieuwste technieken in de autowereld met als doel u zo
            goed mogelijk van dienst te kunnen zijn.
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
              src={aboutUsPagePic}
              alt="Auto District Poeldijk"
              width="100%"
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default OverOns
