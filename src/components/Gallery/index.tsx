import type { CSSProperties } from 'react'
import { Box } from '@mui/material'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BRAND_RED } from '../../theme'

import 'swiper/css'
import 'swiper/css/navigation'
import './styles.css'

interface GalleryProps {
  images: string[]
  alt: string
  delay?: number
}

/* Photo carousel: 1 slide on phones, 2 on tablets, 3 on desktop. */
export default function Gallery({ images, alt, delay = 4000 }: GalleryProps) {
  return (
    <Box sx={{ position: 'relative' }}>
      <Swiper
        className="ad-gallery"
        modules={[Autoplay, Navigation]}
        navigation
        loop
        autoplay={{ delay, disableOnInteraction: false }}
        spaceBetween={16}
        slidesPerView={1.15}
        breakpoints={{
          600: { slidesPerView: 2 },
          900: { slidesPerView: 3 },
        }}
        style={{ '--swiper-navigation-color': BRAND_RED } as CSSProperties}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`${alt} ${index + 1}`} loading="lazy" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
