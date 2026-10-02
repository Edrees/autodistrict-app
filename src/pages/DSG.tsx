import { Box } from '@mui/material'
import PageHeader from '../components/PageHeader'
import Gallery from '../components/Gallery'
import { BulletList, Prose, Section } from '../components/ui'

import slider1 from '../assets/slider-1.jpeg'
import slider2 from '../assets/slider-2.jpeg'
import slider3 from '../assets/slider-3.jpeg'
import slider4 from '../assets/slider-4.jpeg'
import slider5 from '../assets/slider-5.jpeg'

const sliderImages: string[] = [slider1, slider2, slider3, slider4, slider5]

const dsgServices = [
  'Onderhoud uitvoeren aan de DSG-versnellingsbak.',
  'DSG-koppeling vervangen en afstellen.',
  'Megatronic vervangen en inleren.',
  'Wij kunnen alles origineel monteren en als u liever een ander goedkoop alternatief wilt kunnen we die ook aanbieden via onze leveranciers.',
]

function DSG() {
  return (
    <>
      <PageHeader title="DSG" />
      <Section>
        <Box sx={{ maxWidth: 780, mb: { xs: 5, md: 7 } }}>
          <Prose sx={{ fontSize: '1.15rem' }}>
            Heeft u een VAG auto met een DSG versnellingsbak dan bent u bij ons
            aan het juiste adres. Wij kunnen:
            <BulletList items={dsgServices} />
          </Prose>
        </Box>
        <Gallery
          images={sliderImages}
          alt="Auto District Poeldijk"
          delay={6000}
        />
      </Section>
    </>
  )
}

export default DSG
