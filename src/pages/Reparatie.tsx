import { Box } from '@mui/material'
import PageHeader from '../components/PageHeader'
import Gallery from '../components/Gallery'
import { Prose, Section } from '../components/ui'

import slider1 from '../assets/slider-1.jpeg'
import slider2 from '../assets/slider-2.jpeg'
import slider3 from '../assets/slider-3.jpeg'
import slider4 from '../assets/slider-4.jpeg'
import slider5 from '../assets/slider-5.jpeg'

const sliderImages: string[] = [slider1, slider2, slider3, slider4, slider5]

function Reparatie() {
  return (
    <>
      <PageHeader title="Professionele Autoreparatie bij Auto District" />
      <Section>
        <Box sx={{ maxWidth: 780, mb: { xs: 5, md: 7 } }}>
          <Prose sx={{ fontSize: '1.15rem' }}>
            Heeft uw auto een defect of zijn er onderdelen aan vervanging toe?
            Van het vernieuwen van remmen tot het vervangen van de
            distributieriem: bij Auto District Poeldijk lossen we elk probleem
            vakkundig op zodat u snel weer veilig de weg op kunt. Wij werken
            volledig transparant en geven u altijd vooraf een duidelijke
            prijsopgave. Hierbij heeft u zelf de keuze tussen originele
            fabrieksonderdelen via Partslink of voordeligere, hoogwaardige
            A-merk onderdelen die voldoen aan de strengste fabriekseisen.
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

export default Reparatie
