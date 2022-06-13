import SwiperCore, { Autoplay, Navigation, FreeMode } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import pic1 from '../../assets/hpHeroImage1.jpeg'
import pic2 from '../../assets/hpHeroImage2.jpeg'
import pic3 from '../../assets/hpHeroImage3.jpeg'
import pic4 from '../../assets/hpHeroImage4.jpeg'

import 'swiper/css'
import 'swiper/css/pagination'

import './styles.css'

SwiperCore.use([Autoplay, Navigation])

export default function App() {
  const heroImages = [pic1, pic2, pic3, pic4]

  return (
    <>
      <Swiper
        className="hero-image-swiper"
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[FreeMode]}
        freeMode={true}
        slidesPerView={3}
        loop={true}
      >
        {heroImages.map((img, index) => (
          <SwiperSlide key={index}>
            <img alt="Auto District" src={img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
