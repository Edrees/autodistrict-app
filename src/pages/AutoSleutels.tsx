import { Box } from '@mui/material'
import PageHeader from '../components/PageHeader'
import { BulletList, Prose, Section, SubHeading } from '../components/ui'

const merken = [
  'Volkswagen (VW) (o.a. Golf, Polo, Passat, Tiguan)',
  'Audi (o.a. A3, A4, A6, Q-modellen)',
  'Seat & Skoda',
  'En vele andere automerken!',
]

const waarom = [
  <>
    <strong>Moderne software:</strong> Wij programmeren de startonderbreker
    (transponder) en de afstandsbediening zodat deze perfect communiceren met
    uw auto.
  </>,
  <>
    <strong>Klaar terwijl u wacht:</strong> In de meeste gevallen kunnen wij de
    sleutel direct inleren terwijl u geniet van een kop koffie.
  </>,
  <>
    <strong>Betaalbaar alternatief:</strong> Dezelfde kwaliteit en service als
    bij de officiële merkdealer, maar dan voor een scherpere prijs.
  </>,
]

const meenemen = [
  'De auto zelf (wij moeten de software rechtstreeks op het voertuig aansluiten).',
  'Alle momenteel werkende sleutels van de auto.',
  'Een geldig legitimatiebewijs en het kentekenbewijs.',
]

function AutoSleutels() {
  return (
    <>
      <PageHeader title="Sleutels & Afstandsbedieningen Inleren" />
      <Section>
        <Box sx={{ maxWidth: 780 }}>
          <Prose sx={{ fontSize: '1.15rem' }}>
            Heeft u een extra autosleutel nodig, werkt uw huidige
            afstandsbediening niet meer naar behoren, of bent u uw
            reservesleutel kwijt? Wij helpen u snel en vakkundig weer op weg.
            Het programmeren en inleren van moderne autosleutels is
            specialistisch werk. Dankzij onze geavanceerde apparatuur kunnen wij
            sleutels en afstandsbedieningen inleren voor vrijwel alle gangbare
            automerken.
          </Prose>

          <SubHeading>Onze specialisaties</SubHeading>
          <Prose>
            Wij zijn volledig uitgerust voor het programmeren van sleutels voor
            diverse merken, met specifieke expertise in de VAG-groep:
            <BulletList items={merken} />
          </Prose>

          <SubHeading>Waarom uw sleutel bij ons laten inleren?</SubHeading>
          <BulletList items={waarom} />

          <SubHeading>Wat neemt u mee naar de afspraak?</SubHeading>
          <Prose>
            Wij zijn volledig uitgerust voor het programmeren van sleutels voor
            diverse merken, met specifieke expertise in de VAG-groep:
            <BulletList items={meenemen} ordered />
          </Prose>

          <SubHeading>
            Direct een afspraak maken of benieuwd naar de kosten?
          </SubHeading>
          <Prose>
            De exacte prijs en duur zijn afhankelijk van het merk, model en het
            bouwjaar van uw auto. Neem vrijblijvend contact met ons op voor een
            prijsopgave op maat of om direct een afspraak in te plannen.
          </Prose>
        </Box>
      </Section>
    </>
  )
}

export default AutoSleutels
