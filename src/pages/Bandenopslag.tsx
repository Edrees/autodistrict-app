import {
  Container,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import storagePagePic from '../assets/auto-district-bandenopslag.jpeg'

function Bandenopslag() {
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
            Bandenopslag
          </Typography>
          <Typography sx={{ textAlign: { md: 'justify' } }}>
            De zomer en winter banden of wielen kunnen we voor u opslaan. De
            wielen liggen droog in ons magazijn. Hierdoor hoeft u de wielen niet
            zelf elke wissel mee te nemen en u houd ook nog extra opberg ruimte
            over.
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
              maxWidth: 640,
            }}
          >
            <img
              src={storagePagePic}
              alt="Auto District Bandenopslag"
              width="100%"
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Bandenopslag
