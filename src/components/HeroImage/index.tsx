import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import SwiperCore, { Autoplay, Navigation, FreeMode } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

import pic1 from '../../assets/hpHeroImage1.jpeg'
import pic2 from '../../assets/hpHeroImage2.jpeg'
import pic3 from '../../assets/hpHeroImage3.jpeg'
import pic4 from '../../assets/hpHeroImage4.jpeg'

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

import './styles.css'

SwiperCore.use([Autoplay, Navigation])

const useStyles = makeStyles(() => ({
  heroImage: {
    objectFit: 'none',
    width: '100%',
  },
  heroButtonWrapper: {
    '&&': {
      height: '100%',
      // padding: useTheme().spacing(2),
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  heroText: {
    '&&': {
      fontWeight: 400,
      [useTheme().breakpoints.up('sm')]: {},
    },
  },
  heroLink: {
    textDecoration: 'none',
  },
}))

export default function App() {
  const classes = useStyles()
  const isSmallOrLarger = useMediaQuery(useTheme().breakpoints.up('sm'))

  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        className="mySwiper"
        modules={[FreeMode]}
        freeMode={true}
        slidesPerView={3}
        loop={true}
      >
        <SwiperSlide>
          <img alt="Auto District" src={pic1} />
          <Box className={classes.heroButtonWrapper}>
            <Link to="/diensten" className={classes.heroLink}>
              <Button
                variant="contained"
                color="error"
                size={isSmallOrLarger ? 'medium' : 'small'}
              >
                <Typography
                  variant={isSmallOrLarger ? 'h5' : 'body1'}
                  component="div"
                  className={classes.heroText}
                >
                  Onderhoud
                </Typography>
              </Button>
            </Link>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <img alt="Auto District" src={pic2} />
          <Box className={classes.heroButtonWrapper}>
            <Link to="/diensten" className={classes.heroLink}>
              <Button
                variant="contained"
                color="error"
                size={isSmallOrLarger ? 'medium' : 'small'}
              >
                <Typography
                  variant={isSmallOrLarger ? 'h5' : 'body1'}
                  component="div"
                  className={classes.heroText}
                >
                  Reparatie
                </Typography>
              </Button>
            </Link>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <img alt="Auto District" src={pic3} />
          <Box className={classes.heroButtonWrapper}>
            <Link to="/diensten" className={classes.heroLink}>
              <Button
                variant="contained"
                color="error"
                size={isSmallOrLarger ? 'medium' : 'small'}
              >
                <Typography
                  variant={isSmallOrLarger ? 'h5' : 'body1'}
                  component="div"
                  className={classes.heroText}
                >
                  APK
                </Typography>
              </Button>
            </Link>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <img alt="Auto District" src={pic4} />
          <Box className={classes.heroButtonWrapper}>
            <Link to="/contact" className={classes.heroLink}>
              <Button
                variant="contained"
                color="error"
                size={isSmallOrLarger ? 'medium' : 'small'}
              >
                <Typography
                  variant={isSmallOrLarger ? 'h5' : 'body1'}
                  component="div"
                  className={classes.heroText}
                >
                  Contact
                </Typography>
              </Button>
            </Link>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
