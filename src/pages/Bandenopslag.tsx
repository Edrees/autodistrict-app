import { Box, Link } from '@mui/material'
import PageHeader from '../components/PageHeader'
import {
  FeatureCard,
  FeatureGrid,
  ImageFrame,
  Prose,
  Section,
  TwoColumn,
} from '../components/ui'
import storagePagePic from '../assets/auto-district-bandenopslag.jpeg'

const voordelen = [
  {
    titel: 'Vakkundige montage',
    beschrijving:
      'Inclusief professioneel balanceren en een snelle service zodat u direct weer veilig op weg kunt.',
  },
  {
    titel: 'Milieuvriendelijke afvoer',
    beschrijving:
      'Uw oude, versleten autobanden worden door ons natuurlijk volledig kosteloos afgevoerd.',
  },
  {
    titel: 'Veilige opslag in Poeldijk',
    beschrijving:
      'De banden liggen droog en verzekerd in ons magazijn. U ontvangt automatisch een wisselherinnering.',
  },
]

function Bandenopslag() {
  return (
    <>
      <PageHeader title="Professionele Bandenservice & Opslag" />
      <Section>
        <TwoColumn ratio="1.2fr 1fr" align="start">
          <Prose sx={{ fontSize: '1.15rem' }}>
            <p>
              Bent u op zoek naar een betrouwbare bandenservice in Poeldijk?
              Sinds 2022 is <strong>Auto District</strong> een officiële en
              hooggewaardeerde montagepartner van{' '}
              <Link
                href="https://www.bandenconcurrent.nl/garages/poeldijk/19718-auto-district/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ fontWeight: 800 }}
              >
                BandenConcurrent
              </Link>{' '}
              (gemiddelde klantbeoordeling: 9,7!). U bestelt uw nieuwe zomer-,
              winter- of all-season banden eenvoudig online, waarna ze
              rechtstreeks bij onze garage worden geleverd. Wij zorgen
              vervolgens voor een snelle, vakkundige montage en nauwkeurige
              balancering.
            </p>
            <p>
              De zomer- en winterbanden of complete wielensets kunnen we
              aansluitend voor u opslaan. De wielen liggen droog in ons
              beveiligde magazijn. Hierdoor hoeft u de zware wielen niet zelf
              bij elke wissel mee te slepen en houdt u thuis extra opbergruimte
              over. Bovendien krijgt u van ons automatisch een herinnering
              wanneer het weer tijd is voor de seizoenswissel!
            </p>
          </Prose>
          <ImageFrame src={storagePagePic} alt="Auto District Bandenopslag" />
        </TwoColumn>

        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <FeatureGrid columns={3}>
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

export default Bandenopslag
