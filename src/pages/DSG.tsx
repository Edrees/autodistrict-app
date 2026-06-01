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
import { Autoplay } from 'swiper/modules'

import slider1 from '../assets/slider-1.jpeg'
import slider2 from '../assets/slider-2.jpeg'
import slider3 from '../assets/slider-3.jpeg'
import slider4 from '../assets/slider-4.jpeg'
import slider5 from '../assets/slider-5.jpeg'

function DSG() {
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
        component="div"
        gutterBottom
        sx={{
          fontWeight: useTheme().typography.fontWeightBold,
        }}
      >
        DSG
      </Typography>
      <Typography component="div" sx={{ textAlign: { md: 'justify' }, mb: 2 }}>
        Heeft u een VAG auto met een DSG versnellingsbak dan bent u bij ons aan
        het juiste adres. <br />
        Wij kunnen:
        <List dense component="ul" sx={{ listStyleType: 'disc', pl: 4 }}>
          <ListItem disablePadding sx={{ display: 'list-item' }}>
            Onderhoud uitvoeren aan de DSG-versnellingsbak.
          </ListItem>
          <ListItem disablePadding sx={{ display: 'list-item' }}>
            DSG-koppeling vervangen en afstellen.
          </ListItem>
          <ListItem disablePadding sx={{ display: 'list-item' }}>
            Megatronic vervangen en inleren.
          </ListItem>
          <ListItem disablePadding sx={{ display: 'list-item' }}>
            Wij kunnen alles origineel monteren en als u liever een ander
            goedkoop alternatief wilt kunnen we die ook aanbieden via onze
            leveranciers.
          </ListItem>
        </List>
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

export default DSG
