import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import slider1 from '../assets/slider-1.jpeg'
import slider2 from '../assets/slider-2.jpeg'
import slider3 from '../assets/slider-3.jpeg'
import slider4 from '../assets/slider-4.jpeg'
import slider5 from '../assets/slider-5.jpeg'

function Reparatie() {
  const isSmallOrLarger = useMediaQuery(useTheme().breakpoints.up('sm'))
  const sliderImages: string[] = [slider1, slider2, slider3, slider4, slider5]

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
      <Typography
        variant={isSmallOrLarger ? 'h6' : 'body1'}
        gutterBottom
        sx={{
          fontWeight: useTheme().typography.fontWeightBold,
        }}
      >
        Reparatie
      </Typography>
      <Typography sx={{ textAlign: { md: 'justify' }, mb: 2 }}>
        Heeft u andere problemen met de auto of constateren we defecten. Ook die
        kunnen we oplossen. Van het vervangen van uw koppeling tot aan de
        distributie.
        <br />
        <br />
        Wij zorgen dat de auto weer gemaakt is en uw veilig de weg op kan.
        <br />
        <br />
        Wilt u liever alles origineel ook dat is geen probleem. Wij werken met
        Partslink en daardoor kunnen we alles via de dealer krijgen wat mogelijk
        is.
        <br />
        <br />
        Uiteraard vullen we uw service/onderhoudsboekje in na het uitvoeren van
        het onderhoud. Beschikt u niet over een boekje ook die kunnen we
        universeel leveren.
        <br />
        <br />
        Als alles netjes gedaan is stofzuigen we de auto zodat u in een schone
        auto weer naar huis kan.
      </Typography>

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
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay]}
            >
              {sliderImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img} alt="Auto District Poeldijk" width="100%" />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Reparatie
