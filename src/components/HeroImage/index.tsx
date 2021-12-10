import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import pic1 from '../../assets/heroImage1.png'
import pic2 from '../../assets/heroImage2.png'
import pic3 from '../../assets/heroImage3.png'
import pic4 from '../../assets/heroImage4.png'
// import { useTheme } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(() => ({
  heroImage: {
    objectFit: 'none',
  },
}))

export default function HeroImage() {
  var settings = {
    arrows: false,
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const classes = useStyles()

  return (
    <Slider {...settings}>
      <img className={classes.heroImage} alt="Auto District" src={pic1} />
      <img className={classes.heroImage} alt="Auto District" src={pic2} />
      <img className={classes.heroImage} alt="Auto District" src={pic3} />
      <img className={classes.heroImage} alt="Auto District" src={pic4} />
    </Slider>
  )
}
