import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import caro1 from '../../assets/caro-1.jpg'
import caro2 from '../../assets/caro-2.jpg'
import caro3 from '../../assets/caro-3.jpg'

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
  return (
    <Slider {...settings}>
      <img alt="Auto District" src={caro1} />
      <img alt="Auto District" src={caro2} />
      <img alt="Auto District" src={caro3} />
    </Slider>
  )
}
