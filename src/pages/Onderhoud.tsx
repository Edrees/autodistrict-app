import { Link as RouterLink } from 'react-router-dom'
import { Box, Link } from '@mui/material'
import PageHeader from '../components/PageHeader'
import { BulletList, Prose, Section, SubHeading } from '../components/ui'

function Onderhoud() {
  return (
    <>
      <PageHeader title="Auto Onderhoud bij Auto District - Betrouwbaar & Transparant" />
      <Section>
        <Box sx={{ maxWidth: 780 }}>
          <Prose sx={{ fontSize: '1.15rem' }}>
            Is uw auto toe aan een kleine beurt, grote beurt of specifiek
            fabrieksonderhoud? Bij <strong>Auto District Poeldijk</strong> is
            uw voertuig in deskundige handen. Als{' '}
            <strong>RDW-erkend garagebedrijf</strong> en gecertificeerd{' '}
            <strong>VAG-specialist</strong> (Volkswagen, Audi, Seat, Skoda)
            onderhouden wij alle merken en modellen volgens de officiële
            fabrieksvoorschriften. Zo blijft uw auto betrouwbaar, veilig en
            behoudt deze zijn waarde.
          </Prose>

          <SubHeading>Onze werkwijze: Eerlijk advies vooraf</SubHeading>
          <Prose>
            Wij geloven in helder en eerlijk zakendoen. Voordat we aan de slag
            gaan, voeren we een grondige controle uit van de algehele staat van
            uw auto én raadplegen we de onderhoudshistorie. Op basis daarvan
            maken we een passende offerte op maat. Blijkt er tijdens het
            onderhoud extra reparatie nodig te zijn? Dan nemen we altijd eerst
            contact met u op. U weet dus precies waar u aan toe bent en komt
            achteraf nooit voor verrassingen te staan.
          </Prose>

          <SubHeading>Dealerkwaliteit met Partslink</SubHeading>
          <Prose>
            Bij Auto District kiest u zelf de onderdelen die bij uw budget
            passen:
            <BulletList
              items={[
                <>
                  <strong>Originele dealeronderdelen:</strong> Dankzij onze
                  koppeling met Partslink kunnen wij alle originele onderdelen
                  rechtstreeks via de officiële merkdealer leveren en monteren
                </>,
                <>
                  <strong>Kwalitatieve alternatieven:</strong> Kiest u liever
                  voor een voordeliger alternatief? Wij werken uitsluitend met
                  hoogwaardige A-merk onderdelen (zoals Bosch, Continental, Mann
                  en SKF) die voldoen aan de strengste fabriekseisen.
                </>,
              ]}
            />
            Dankzij ons netwerk met drie grote automaterialenpartners in de
            regio - die wel vier keer per dag onderdelen leveren - hebben we
            benodigde filters of onderdelen altijd razendsnel in huis.
          </Prose>

          <SubHeading>Digitaal en fysiek serviceboekje altijd up-to-date</SubHeading>
          <Prose>
            Het correct bijhouden van de onderhoudshistorie is essentieel. Na de
            onderhoudsbeurt vullen wij netjes uw fysieke onderhoudsboekje in.
            <BulletList
              items={[
                <>
                  <strong>Heeft uw auto geen fysiek boekje meer?</strong> Geen
                  probleem, wij kunnen een universeel onderhoudsboekje voor u
                  verzorgen.
                </>,
                <>
                  <strong>Digitaal Service Register (DSR):</strong> Voor
                  moderne voertuigen (waaronder VAG en andere jonge bouwjaren)
                  registreren wij de onderhoudshistorie officieel in het
                  digitale fabriekssysteem van de dealer. Hierdoor blijft uw
                  eventuele fabrieksgarantie en mobiliteitsgarantie
                  gewaarborgd.
                </>,
              ]}
            />
          </Prose>

          <SubHeading>Extra service van het huis</SubHeading>
          <Prose>
            Wij vinden dat service verder gaat dan alleen sleutelen onder de
            motorkap. Als het onderhoud aan uw auto succesvol is afgerond,
            stofzuigen wij uw auto volledig uit. Zo stapt u niet alleen in een
            technisch perfecte auto, maar ook in een heerlijk schone auto!
          </Prose>

          <SubHeading>Plan direct uw onderhoud in</SubHeading>
          <Prose>
            Is uw kilometerstand bereikt, brandt er een onderhoudsmelding op uw
            dashboard of is het een jaar geleden dat uw auto gecontroleerd is?
            Neem vandaag nog contact op met ons team in Poeldijk of vraag direct
            een vrijblijvende prijsopgave aan via onze{' '}
            <Link component={RouterLink} to="/contact/">
              Contactpagina
            </Link>
            .
          </Prose>
        </Box>
      </Section>
    </>
  )
}

export default Onderhoud
