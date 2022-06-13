import {
  Box,
  Container,
  Grid,
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

function Reparatie() {
  const isSmallOrLarger = useMediaQuery(useTheme().breakpoints.up('sm'))
  return (
    <Container maxWidth={false} disableGutters>
      <Typography
        variant={isSmallOrLarger ? 'h6' : 'body1'}
        gutterBottom
        sx={{
          fontWeight: useTheme().typography.fontWeightBold,
        }}
      >
        Reparatie
      </Typography>
      <Typography sx={{ textAlign: { md: 'justify' } }} mb={2}>
        Heeft u andere problemen met de auto of constateren we defecten. Ook die
        kunnen we oplossen. Van het vervangen van uw koppeling tot aan de
        distributie.
      </Typography>
      <Typography sx={{ textAlign: { md: 'justify' } }} mb={2}>
        Wij zorgen dat de auto weer gemaakt is en uw veilig de weg op kan.
      </Typography>
      <Typography sx={{ textAlign: { md: 'justify' } }} mb={2}>
        Wilt u liever alles origineel ook dat is geen probleem. Wij werken met
        Partslink en daardoor kunnen we alles via de dealer krijgen wat mogelijk
        is.
      </Typography>
      <Typography sx={{ textAlign: { md: 'justify' } }} mb={2}>
        Uiteraard vullen we uw service/onderhoudsboekje in na het uitvoeren van
        het onderhoud. Beschikt u niet over een boekje ook die kunnen we
        universeel leveren.
      </Typography>
      <Typography sx={{ textAlign: { md: 'justify' } }} mb={2}>
        Als alles netjes gedaan is stofzuigen we de auto zodat u in een schone
        auto weer naar huis kan.
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
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

export default Reparatie
