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

function Onderhoud() {
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
        Onderhoud
      </Typography>
      <Typography variant="body1" component="div" align="justify" mb={2}>
        Auto District voert ook het onderhoud van uw auto uit. We controleren
        eerst de algehele staat van de auto en uw service/obderhoudsboekje. Aan
        de hand hiervan maken we een passende offerte en word het juiste
        vervangen.
      </Typography>
      <Typography variant="body1" component="div" align="justify" mb={2}>
        Met een klein magazijn hebben we de meest voorkomende filters/onderdelen
        invoorraad. Mochten we het toch niet op voorraad hebben dan heeft 1 van
        de 3 automaterialen partners het wel die 4x per dag rijden.
      </Typography>
      <Typography variant="body1" component="div" align="justify" mb={2}>
        Wilt u liever alles origineel ook dat is geen probleem. Wij werken met
        Partslink en daardoor kunnen we alles via de dealer krijgen wat mogelijk
        is.
      </Typography>
      <Typography variant="body1" component="div" align="justify" mb={2}>
        Uiteraard vullen we uw service/onderhoudsboekje in na het uitvoeren van
        het onderhoud. Beschikt u niet over een boekje ook die kunnen we
        universeel leveren.
      </Typography>
      <Typography variant="body1" component="div" align="justify" mb={2}>
        Als alles netjes gedaan is stofzuigen we de auto zodat u in een schone
        auto weer naar huis kan.
      </Typography>

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

export default Onderhoud
