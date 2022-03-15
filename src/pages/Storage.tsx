import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
// import storagePagePic from '../assets/auto-district-overons.jpeg'

function Storage() {
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
        Wielopslag
      </Typography>
      <Typography variant="body1" component="div" align="justify">
        De zomer en winter banden of wielen kunnen we voor u opslaan. De wielen
        liggen droog in ons magazijn. Hierdoor hoeft u de wielen niet zelf elke
        wissel mee te nemen en u houd ook nog extra opberg ruimte over.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ maxWidth: 800, pt: 2 }}>
            {/* <img
              src={storagePagePic}
              alt="Auto District Poeldijk"
              width="100%"
            /> */}
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Storage
