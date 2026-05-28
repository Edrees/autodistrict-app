import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import slider1 from '../assets/slider-1.jpeg'
import slider2 from '../assets/slider-2.jpeg'
import slider3 from '../assets/slider-3.jpeg'
import slider4 from '../assets/slider-4.jpeg'
import slider5 from '../assets/slider-5.jpeg'

function DSG() {
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
        DSG
      </Typography>
      <List dense>
        <ListItem disablePadding>
          Heeft u een VAG auto met een DSG versnellingsbak dan bent u bij ons
          aan het juiste adres. <br />
          Wij kunnen:
        </ListItem>
        <ListItem disablePadding>
          - Onderhoud uitvoeren aan de DSG-versnellingsbak.
        </ListItem>
        <ListItem disablePadding>
          - DSG-koppeling vervangen en afstellen.
        </ListItem>
        <ListItem disablePadding>- Megatronic vervangen en inleren.</ListItem>
        <ListItem disablePadding>
          - Wij kunnen alles origineel monteren en als u liever een ander
          goedkoop alternatief wilt kunnen we die ook aanbieden via onze
          leveranciers.
        </ListItem>
      </List>

      <Grid container spacing={2}>
        <Grid
          size={{ xs: 12 }}
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Box sx={{ maxWidth: '100%', pt: 2 }}>
            <Swiper
              slidesPerView={3}
              spaceBetween={8}
              centeredSlides={true}
              loop={true}
              loopFillGroupWithBlank={true}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              navigation={true}
            >
              <SwiperSlide>
                <img src={slider1} alt="Auto District Poeldijk" width="100%" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slider2} alt="Auto District Poeldijk" width="100%" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slider3} alt="Auto District Poeldijk" width="100%" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slider4} alt="Auto District Poeldijk" width="100%" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={slider5} alt="Auto District Poeldijk" width="100%" />
              </SwiperSlide>
            </Swiper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default DSG
