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
        ons hoog in het vaandel. Wij hopen u graag van dienst te mogen zijn in
        de toekomst!
      </Typography>
      <Grid container spacing={2}>
        <Grid
          item
          xs={0}
          md={1}
          sx={{ display: { xs: 'none', sm: 'block' } }}
        ></Grid>
        <Grid
          item
          xs={12}
          md={10}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Box sx={{ maxWidth: 800, py: 2 }}>
            <img src={homePagePic} alt="Auto District Poeldijk" width="100%" />
          </Box>
        </Grid>
        <Grid
          item
          xs={0}
          md={1}
          sx={{ display: { xs: 'none', sm: 'block' } }}
        ></Grid>
      </Grid>
    </Container>
  )
}
