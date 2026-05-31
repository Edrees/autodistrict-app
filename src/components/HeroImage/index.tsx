import { Autoplay, Navigation, FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import pic1 from '../../assets/hpHeroImage1.jpeg'
import pic2 from '../../assets/hpHeroImage2.jpeg'
import pic3 from '../../assets/hpHeroImage3.jpeg'
import pic4 from '../../assets/hpHeroImage4.jpeg'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import './styles.css'
import { Typography } from '@mui/material'

export default function App() {
  const heroImages: string[] = [pic1, pic2, pic3, pic4, pic1, pic2, pic3, pic4]

  return (
    <div style={{ position: 'relative', overflow: 'hidden', width: '100%' }}>
      <Swiper
        className="hero-image-swiper"
        spaceBetween={24}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation, FreeMode]}
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
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
          textAlign: 'center',
          color: 'white',
          textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
          fontSize: '2rem',
          fontWeight: 'bold',
          pointerEvents: 'none',
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
        }}
      >
        Betrouwbaar auto-onderhoud & reparatie in Poeldijk
        <Typography sx={{ mb: 1, fontWeight: 500 }}>
          Vakkundige service voor alle merken & modellen
        </Typography>
      </div>
    </div>
  )
}
