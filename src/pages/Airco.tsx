import { Box } from '@mui/material'
import PageHeader from '../components/PageHeader'
import {
  FeatureCard,
  FeatureGrid,
  ImageFrame,
  Prose,
  Section,
  SubHeading,
  TwoColumn,
} from '../components/ui'
import aircoPagePic from '../assets/auto-district-airco.jpeg'

const voordelen = [
  {
    titel: 'Extreme precisie',
    beschrijving:
      'Formeergas bevat waterstofmoleculen. Omdat deze extreem klein zijn, ontsnappen ze door het kleinste onzichtbare haarscheurtje.',
  },
  {
    titel: "Geavanceerde 'Sniffer'-technologie",
    beschrijving:
      'Met een elektronische detector lopen we het systeem na. Bij een lekkage geeft de detector direct een signaal.',
  },
  {
    titel: '100% Milieuvriendelijk',
    beschrijving:
      'We testen zonder schadelijk koelmiddel te verliezen. Formeergas is volledig veilig voor mens en milieu.',
  },
  {
    titel: 'Kostenbesparend',
    beschrijving:
      'Door de exacte locatie direct te vinden, vervangen we alleen wat écht kapot is. Dat voorkomt onnodige kosten.',
  },
]

function Airco() {
  return (
    <>
      <PageHeader title="Professionele Airco Service bij Auto District" />
      <Section>
        <TwoColumn ratio="1.2fr 1fr" align="start">
          <Box>
            <Prose sx={{ fontSize: '1.15rem' }}>
              Werkt uw airconditioning niet meer optimaal, blaast deze lauwe
              lucht of wilt u storingen in de zomer voorkomen? Bij{' '}
              <strong>Auto District Poeldijk</strong> bent u aan het juiste
              adres voor compleet en vakkundig airco-onderhoud. Met onze
              geavanceerde <strong>MAHLE aircomachines</strong> onderhouden en
              vullen wij aircosystemen van elk type voertuig. Of uw auto nu is
              uitgerust met het oudere <strong>R134a koudemiddel</strong> of het
              modernere, milieuvriendelijke{' '}
              <strong>R1234yf koudemiddel</strong>: wij hebben voor beide
              systemen de juiste expertise en apparatuur in huis. Mocht uw airco
              defect of volledig leeg zijn, dan sporen wij lekkages nauwkeurig
              op met behulp van een gespecialiseerde afpersset met formeergas,
              een elektronische lekdetector of via{' '}
              <strong>UV-detectie</strong>. Na afloop van de servicebeurt
              ontvangt u van ons altijd een officiële uitdraai met de exacte
              specificaties van het onderhoud.
            </Prose>

            <SubHeading>Lekdetectie met Formeergas: Hoe werkt het?</SubHeading>
            <Prose>
              Wanneer uw airconditioning snel koelvermogen verliest, is de kans
              groot dat er ergens een lek zit. Het simpelweg blijven bijvullen
              van koelmiddel zonder de oorzaak aan te pakken is wettelijk
              verboden en zonde van uw geld. Omdat micro-lekkages met het blote
              oog vaak onzichtbaar zijn, zetten wij <strong>formeergas</strong>{' '}
              in voor een 100% betrouwbare diagnose.
            </Prose>
          </Box>
          <ImageFrame src={aircoPagePic} alt="Auto District Airco Service" />
        </TwoColumn>

        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <FeatureGrid>
            {voordelen.map((voordeel) => (
              <FeatureCard key={voordeel.titel} title={voordeel.titel}>
                {voordeel.beschrijving}
              </FeatureCard>
            ))}
          </FeatureGrid>
        </Box>
      </Section>
    </>
  )
}

export default Airco
