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
        Professionele Autoreparatie bij Auto District
      </Typography>
      <Typography sx={{ textAlign: { md: 'justify' }, mb: 2 }}>
        Heeft uw auto een defect of zijn er onderdelen aan vervanging toe? Van
        het vernieuwen van remmen tot het vervangen van de distributieriem: bij
        Auto District Poeldijk lossen we elk probleem vakkundig op zodat u snel
        weer veilig de weg op kunt. Wij werken volledig transparant en geven u
        altijd vooraf een duidelijke prijsopgave. Hierbij heeft u zelf de keuze
        tussen originele fabrieksonderdelen via Partslink of voordeligere,
        hoogwaardige A-merk onderdelen die voldoen aan de strengste
        fabriekseisen.
        <br />
        <br />
        Na de reparatie zorgen wij dat uw administratie direct klopt door de
        werkzaamheden netjes te noteren in uw fysieke onderhoudsboekje of
        officieel te registreren in het Digitaal Service Register (DSR) van de
        fabriek. Als extra service van het huis leveren we uw auto niet alleen
        technisch hersteld af, maar stofzuigen wij uw auto ook nog volledig uit.
        Neem vandaag nog contact met ons op voor een afspraak of een
        vrijblijvende prijsopgave op maat!
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
