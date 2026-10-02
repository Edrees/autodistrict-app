import type { ReactNode } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Button, Stack, Typography } from '@mui/material'

import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import {
  FeatureCard,
  FeatureGrid,
  ImageFrame,
  Prose,
  Section,
  SectionHeading,
  ServiceCardGrid,
  TwoColumn,
  UspList,
} from '../components/ui'
import { SERVICE_CARDS } from '../constants/services'
import { BOOKING_PATH, getYearsActive } from '../constants/company'
import { BRAND_RED, DISPLAY_FONT } from '../theme'

import homePagePic from '../assets/auto-district-homepage.jpeg'
import homePagePicRdw from '../assets/auto-district-rdw.jpeg'
import pic1 from '../assets/hpHeroImage1.jpeg'
import pic2 from '../assets/hpHeroImage2.jpeg'
import pic3 from '../assets/hpHeroImage3.jpeg'
import pic4 from '../assets/hpHeroImage4.jpeg'
import pic5 from '../assets/hpHeroImage5.jpg'
import pic6 from '../assets/hpHeroImage6.jpg'
import pic7 from '../assets/hpHeroImage7.jpg'
import pic8 from '../assets/hpHeroImage8.jpg'

interface ServicesUSPProps {
  title: string
  desc: ReactNode
}

interface TrustItemsProps {
  title: string
  desc: string
}

const workshopImages: string[] = [pic1, pic8, pic2, pic7, pic3, pic6, pic4, pic5]

const trustItems: TrustItemsProps[] = [
  {
    title: 'RDW-Erkend & Gecertificeerd',
    desc: 'Al onze monteurs zijn gediplomeerde APK-keurmeesters.',
  },
  {
    title: 'DSG Specialist',
    desc: 'Diepgaande expertise in Volkswagen, Audi, SEAT en Škoda.',
  },
  {
    title: 'Eerlijk & Transparant',
    desc: 'Nooit onverwachte kosten. Wij bellen altijd vóór een reparatie.',
  },
  {
    title: 'Klantbeoordeling 5.0 / 5',
    desc: 'Trots op onze honderden positieve Google-reviews van tevreden rijders!',
  },
]

const processSteps = [
  {
    title: 'Check en offerte',
    text: 'We bekijken de algehele staat van de auto en uw onderhoudsboekje. Op basis daarvan krijgt u een passende offerte.',
  },
  {
    title: 'Uw akkoord',
    text: 'Pas als u toestemming geeft gaan we aan het werk. Origineel via de dealer of een goed alternatief: u kiest.',
  },
  {
    title: 'Klaar, en schoon',
    text: 'Boekje ingevuld, storing gewist, auto gestofzuigd. U rijdt weg zoals het hoort.',
  },
]

const servicesUSP: ServicesUSPProps[] = [
  {
    title: 'APK Keuring',
    desc: (
      <>
        Snel en flexibel ingepland. Onze{' '}
        <strong>gecertificeerde keurmeesters</strong> controleren uw auto
        grondig volgens de RDW-richtlijnen.
      </>
    ),
  },
  {
    title: 'Onderhoud & Reparatie',
    desc: (
      <>
        Grote of kleine beurt? Wij onderhouden elk merk met behoud van
        fabrieksgarantie en voor zover mogelijk vullen we u (digitale) service
        boekje in.
      </>
    ),
  },
  {
    title: 'Airco Service & Lekdetectie',
    desc: (
      <>
        Blijf koel in de zomer en voorkom storingen. Wij verzorgen het complete
        onderhoud, vullen aircosystemen <strong>(R134a & R1234yf)</strong> én
        sporen micro-lekkages nauwkeurig op met formeergas.
      </>
    ),
  },
  {
    title: 'DSG & Automaat Service',
    desc: (
      <>
        Haperingen of toe aan onderhoud? Wij zijn gespecialiseerd in het
        verversen automaat olie, repareren en inleren van{' '}
        <strong>DSG-versnellingsbakken</strong>.
      </>
    ),
  },
  {
    title: 'Autosleutels & Afstandsbedieningen Inleren',
    desc: (
      <>
        Kwijt, stuk of een extra sleutel nodig? Wij{' '}
        <strong>
          programmeren en inleren autosleutels en afstandsbedieningen
        </strong>{' '}
        voor de meeste merken en modellen.
      </>
    ),
  },
  {
    title: 'Banden & Professionele Montage',
    desc: (
      <>
        Bestel uw banden online via <strong>BandenConcurrent</strong> en kies
        Auto District Poeldijk als uw vaste <strong>montagepartner</strong>. Wij
        verzorgen de complete demontage, montage, balancering én veilige
        seizoensopslag.
      </>
    ),
  },
  {
    title: 'Diagnose & Storingen',
    desc: (
      <>
        Brandt er een storingslampje? Met{' '}
        <strong>geavanceerde diagnose-apparatuur</strong> achterhalen en
        verhelpen we snel de exacte oorzaak.
      </>
    ),
  },
  {
    title: 'Lekdetectie & Rookgas Diagnose',
    desc: (
      <>
        Heeft u last van een onverklaarbare storing, vermogensverlies of vocht?
        Met behulp van <strong>geavanceerde rookmachines</strong> sporen wij
        lucht-, vacuüm- en vloeistoflekkages snel en schadevrij op.
      </>
    ),
  },
  {
    title: 'Walnut Blasting (Kleppen stralen)',
    desc: (
      <>
        Ervaar je vermogensverlies of een onregelmatig stationair toerental? Met{' '}
        <strong>walnut blasting</strong> reinigen wij de inlaatkanalen en
        kleppen van direct ingespoten motoren grondig, zonder deze te
        beschadigen.
      </>
    ),
  },
  {
    title: 'Elektronische Distributie Service',
    desc: (
      <>
        De distributieriem is het hart van uw motor. Wij{' '}
        <strong>
          vervangen en stellen uw distributieriem of -ketting elektronisch
        </strong>{' '}
        uiterst nauwkeurig af, zodat uw motor weer perfect op tijd loopt.
      </>
    ),
  },
]

export default function Home() {
  const stats = [
    {
      value: `${getYearsActive()}+`,
      text: 'jaar in het vak, en nog steeds bijscholen op de nieuwste techniek',
    },
    { value: '100%', text: 'van de monteurs is APK-keurmeester' },
    {
      value: 'APK2',
      text: 'alle voertuigen in deze categorie, door ons gekeurd en afgemeld',
    },
    {
      value: '4×',
      text: 'per dag leveren onze drie partners, dus de auto wacht zelden',
    },
  ]

  return (
    <>
      <Hero />

      <Section reveal>
        <SectionHeading title="Onze diensten" />
        <ServiceCardGrid services={SERVICE_CARDS} />
        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <FeatureGrid>
            {trustItems.map((item) => (
              <FeatureCard key={item.title} title={item.title}>
                {item.desc}
              </FeatureCard>
            ))}
          </FeatureGrid>
        </Box>
      </Section>

      <Section tone="paper" reveal>
        <TwoColumn ratio="1fr 1fr">
          <Box>
            <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
              Auto District Poeldijk: Transparant en deskundig autoonderhoud
            </Typography>
            <Prose>
              <p>
                Zoekt u een vakkundige garage in het Westland waar eerlijkheid
                nog heel gewoon is? Welkom bij Auto District in Poeldijk! Als
                RDW-erkend autobedrijf bieden wij u de perfecte combinatie van
                dealerkwaliteit en de persoonlijke service van een dorpsgarage.
                Wij staan voor vakkennis, heldere communicatie en betaalbare
                tarieven voor elk type auto.
              </p>
              <p>
                Of uw voertuig nu toe is aan de jaarlijkse APK-keuring, een
                grote beurt, of specifiek onderhoud zoals een
                DSG-transmissieservice: ons team staat voor u klaar. Wij zijn
                uitgerust met de modernste diagnose- en uitleesapparatuur en
                werken uitsluitend met hoogwaardige(eventueel) originele
                onderdelen. Hierdoor blijft uw auto in absolute topconditie en
                behoudt deze zijn waarde.
              </p>
              <p>
                Onze filosofie is simpel: wij behandelen uw auto alsof het die
                van onszelf is. Dat betekent dat we altijd vooraf met u
                overleggen, helder advies geven zonder technisch jargon en
                flexibel met uw agenda meedenken. Van een kleine ingreep tot een
                complete motorreparatie, wij werken snel en efficiënt zodat u in
                no-time weer veilig op de weg zit. Ervaar het zelf en kom gerust
                eens langs in onze werkplaats!
              </p>
            </Prose>
          </Box>
          <ImageFrame
            src={homePagePic}
            alt="Auto District Poeldijk"
            caption="Vakmanschap met een glimlach. Maak kennis met de monteurs van Auto District Poeldijk."
          />
        </TwoColumn>
      </Section>

      <Section reveal>
        <SectionHeading
          title="Geen verrassingen op de factuur."
          intro="Zo weet u vooraf waar u aan toe bent. Geen werk waar u niet om vroeg, geen regel op de factuur die u niet zag aankomen."
        />
        <Box
          component="ol"
          sx={{
            listStyle: 'none',
            p: 0,
            m: 0,
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: { xs: 4, md: 5 },
          }}
        >
          {processSteps.map((step, index) => (
            <Box
              component="li"
              key={step.title}
              sx={{ borderTop: 2, borderColor: BRAND_RED, pt: 3 }}
            >
              <Typography
                sx={{
                  fontFamily: DISPLAY_FONT,
                  fontWeight: 900,
                  fontSize: '3.5rem',
                  lineHeight: 1,
                  color: BRAND_RED,
                }}
              >
                {index + 1}
              </Typography>
              <Typography variant="h3" component="h3" sx={{ mt: 1.5 }}>
                {step.title}
              </Typography>
              <Typography sx={{ mt: 1.5, color: 'text.secondary' }}>
                {step.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Section>

      <Section tone="paper" reveal>
        <SectionHeading title="Waarvoor kunt u bij Auto District terecht?" />
        <UspList items={servicesUSP} />
      </Section>

      <Section reveal>
        <TwoColumn ratio="1fr 1.1fr">
          <ImageFrame src={homePagePicRdw} alt="Auto District RDW" />
          <Box>
            <Typography variant="h2" component="h2">
              Erkend door de RDW. Elke monteur een keurmeester.
            </Typography>
            <Prose sx={{ mt: 2 }}>
              Is uw auto toe aan de Algemene Periodieke Keuring? Als RDW-erkend
              autobedrijf keuren wij alle voertuigen binnen de APK2-categorie.
              Bij Auto District sleutelen alleen échte vakmensen aan uw auto: al
              onze monteurs beschikken over de juiste papieren en zijn erkende
              APK-keurmeesters. Door onze flexibele werkwijze stemmen we de
              afspraak soepel af op uw agenda en plannen we de keuring altijd
              snel voor u in.
            </Prose>
            <Stack direction="row" spacing={3} sx={{ mt: 3, alignItems: 'center' }}>
              <Button variant="contained" component={RouterLink} to={BOOKING_PATH}>
                APK inplannen
              </Button>
              <Button
                component={RouterLink}
                to="/diensten/"
                color="inherit"
                sx={{ px: 0 }}
              >
                Alle diensten bekijken
              </Button>
            </Stack>
          </Box>
        </TwoColumn>

        <Box
          sx={{
            mt: { xs: 6, md: 10 },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' },
            borderTop: 1,
            borderColor: 'divider',
          }}
        >
          {stats.map((stat, index) => (
            <Box
              key={stat.value}
              sx={{
                py: 3,
                pr: 2,
                pl: { xs: index % 2 === 1 ? 2 : 0, md: index === 0 ? 0 : 3 },
                borderLeft: {
                  xs: index % 2 === 1 ? 1 : 0,
                  md: index === 0 ? 0 : 1,
                },
                borderColor: 'divider',
              }}
            >
              <Typography
                sx={{
                  fontFamily: DISPLAY_FONT,
                  fontWeight: 900,
                  fontSize: '3rem',
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                {stat.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Section>

      <Section tone="paper" reveal>
        <SectionHeading title="In de werkplaats" />
        <Gallery images={workshopImages} alt="Werkplaats Auto District" />
      </Section>
    </>
  )
}
