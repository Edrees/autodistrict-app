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
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import slider1 from '../assets/slider-1.jpeg'
import slider2 from '../assets/slider-2.jpeg'
import slider3 from '../assets/slider-3.jpeg'
import slider4 from '../assets/slider-4.jpeg'
import slider5 from '../assets/slider-5.jpeg'

function Service() {
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
        Service
      </Typography>
      <List dense>
        <ListItem sx={{ fontWeight: 'bold' }} disablePadding>
          Onderhoud
        </ListItem>
        <ListItem disablePadding>
          Bij Auto District kunt u terecht voor een onderhoudsbeurt aan uw auto
        </ListItem>
      </List>
      <List dense>
        <ListItem sx={{ fontWeight: 'bold' }} disablePadding>
          Reparatie
        </ListItem>
        <ListItem disablePadding>
          Bij Auto District kunt u terecht voor alle reparaties aan uw auto
        </ListItem>
      </List>
      <List dense>
        <ListItem sx={{ fontWeight: 'bold' }} disablePadding>
          APK
        </ListItem>
        <ListItem disablePadding>
          Bij Auto District kunt u terecht voor een APK (Algemeen Periodieke
          Keuring) voor elk merk en type auto
        </ListItem>
      </List>

      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ maxWidth: '100%', pt: 2 }}>
            <Swiper
              slidesPerView={3}
              spaceBetween={16}
              centeredSlides={true}
              loop={true}
              loopFillGroupWithBlank={true}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              navigation={true}
              className="mySwiper"
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

export default Service
