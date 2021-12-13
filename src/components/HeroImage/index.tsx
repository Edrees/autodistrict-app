import { makeStyles } from '@mui/styles'
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import pic1 from '../../assets/homepageHeroImage1.png'
import pic2 from '../../assets/homepageHeroImage2.png'
import pic3 from '../../assets/homepageHeroImage3.png'
import pic4 from '../../assets/homepageHeroImage4.png'

const settings = {
  adaptiveHeight: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const useStyles = makeStyles(() => ({
  heroImage: {
    objectFit: 'none',
    width: '100%',
  },
  heroButtonWrapper: {
    '&&': {
      height: '100%',
      padding: useTheme().spacing(2),
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
}))

export default function HeroImage() {
  const classes = useStyles()
  const isSmallOrLarger = useMediaQuery(useTheme().breakpoints.up('sm'))

  return (
    <Slider {...settings}>
      <Box sx={{ position: 'relative' }}>
        <img
          className={classes.heroImage}
          alt="Auto District"
          src={pic1}
          // style={{ width: 1280 }}
        />
        <Box className={classes.heroButtonWrapper}>
          <Button
            variant="contained"
            color="error"
            href="/diensten"
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
        </Box>
      </Box>

      <Box sx={{ position: 'relative' }}>
        <img
          className={classes.heroImage}
          alt="Auto District"
          src={pic2}
          // style={{ width: 1280 }}
        />
        <Box className={classes.heroButtonWrapper}>
          <Button
            variant="contained"
            color="error"
            href="/diensten"
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
        </Box>
      </Box>

      <Box sx={{ position: 'relative' }}>
        <img
          className={classes.heroImage}
          alt="Auto District"
          src={pic3}
          // style={{ width: 1280 }}
        />
        <Box className={classes.heroButtonWrapper}>
          <Button
            variant="contained"
            color="error"
            href="/diensten"
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
        </Box>
      </Box>
      <Box sx={{ position: 'relative' }}>
        <img
          className={classes.heroImage}
          alt="Auto District"
          src={pic4}
          // style={{ width: 1280 }}
        />
        <Box className={classes.heroButtonWrapper}>
          <Button
            variant="contained"
            color="error"
            href="/contact"
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
        </Box>
      </Box>
    </Slider>
  )
}
