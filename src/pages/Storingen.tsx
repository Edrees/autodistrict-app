import {
  Container,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'

function Storingen() {
  const isSmallOrLarger = useMediaQuery(useTheme().breakpoints.up('sm'))
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        minHeight: useTheme().spacing(50),
        padding: { xs: useTheme().spacing(4), md: useTheme().spacing(5) },
        borderRadius: 1,
        backgroundColor: 'white',
        boxShadow: 1,
      }}
    >
      <Typography
        variant={isSmallOrLarger ? 'h6' : 'body1'}
        component="div"
        gutterBottom
        sx={{
          fontWeight: useTheme().typography.fontWeightBold,
        }}
      >
        Diagnose & Storingen Uitlezen bij Auto District
      </Typography>
      <Typography component="div" sx={{ textAlign: { md: 'justify' }, mb: 2 }}>
        Brandt er een storingslampje op uw dashboard of geeft uw auto een
        foutmelding? Geen paniek, bij <strong>Auto District Poeldijk</strong>{' '}
        lossen we elektronische en mechanische storingen snel en efficiënt voor
        u op. Met onze geavanceerde diagnoseapparatuur kunnen we elk automerk
        diepgaand uitlezen. Voor voertuigen uit de VAG-groep (Volkswagen, Audi,
        Seat, Skoda) gebruiken we de officiële dealersoftware{' '}
        <strong>ODIS en VCDS</strong>, waarmee we exact dezelfde
        diagnosemogelijkheden hebben als de merkdealer. Voor alle overige
        automerken zetten we universele topsystemen van{' '}
        <strong>Autel en Delphi</strong>
        in. Tijdens de volledige diagnose sluiten we uw auto aan op een
        professionele <strong>GYS acculader</strong>. Dit zorgt voor een
        constante en stabiele spanning, waardoor vitale computersystemen niet
        uitvallen en de accu gegarandeerd vol blijft.
        <br />
        <br />
        Nadat we de exacte oorzaak van de storing hebben gelokaliseerd, stellen
        we een gerichte diagnose. Wij geloven in volledige transparantie: we
        wissen de foutcodes pas definitief als het probleem écht is opgelost én
        we maken altijd <strong>eerst een heldere offerte vooraf</strong>. Pas
        na uw uitdrukkelijke toestemming gaan onze monteurs aan de slag met de
        reparatie, zodat u achteraf nooit voor verrassingen komt te staan. Als
        extra service van het huis leveren we uw auto na het verhelpen van de
        storing niet alleen technisch storingsvrij af, maar{' '}
        <strong>stofzuigen wij uw auto ook nog volledig uit</strong>. Heeft u
        een brandend lampje of een vage storing in uw auto? Neem direct contact
        op via onze{' '}
        <Link href="contact" sx={{ fontWeight: 700 }}>
          Contactpagina
        </Link>{' '}
        of kom langs in Poeldijk om uw auto vakkundig te laten uitlezen!
      </Typography>
    </Container>
  )
}

export default Storingen
