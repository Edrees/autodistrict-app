import {
  Container,
  List,
  ListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'

function Onderhoud() {
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
        gutterBottom
        sx={{
          fontWeight: useTheme().typography.fontWeightBold,
        }}
      >
        Auto Onderhoud bij Auto District - Betrouwbaar & Transparant
      </Typography>
      <Typography sx={{ textAlign: { md: 'justify' }, mb: 2 }}>
        Is uw auto toe aan een kleine beurt, grote beurt of specifiek
        fabrieksonderhoud? Bij <strong>Auto District Poeldijk</strong> is uw
        voertuig in deskundige handen. Als{' '}
        <strong>RDW-erkend garagebedrijf</strong> en gecertificeerd
        <strong>VAG-specialist</strong> (Volkswagen, Audi, Seat, Skoda)
        onderhouden wij alle merken en modellen volgens de officiële
        fabrieksvoorschriften. Zo blijft uw auto betrouwbaar, veilig en behoudt
        deze zijn waarde.
      </Typography>

      <Typography
        variant={isSmallOrLarger ? 'h6' : 'body1'}
        gutterBottom
        sx={{
          fontWeight: useTheme().typography.fontWeightBold,
        }}
      >
        Onze werkwijze: Eerlijk advies vooraf
      </Typography>
      <Typography sx={{ textAlign: { md: 'justify' }, mb: 2 }}>
        Wij geloven in helder en eerlijk zakendoen. Voordat we aan de slag gaan,
        voeren we een grondige controle uit van de algehele staat van uw auto én
        raadplegen we de onderhoudshistorie. Op basis daarvan maken we een
        passende offerte op maat. Blijkt er tijdens het onderhoud extra
        reparatie nodig te zijn? Dan nemen we altijd eerst contact met u op. U
        weet dus precies waar u aan toe bent en komt achteraf nooit voor
        verrassingen te staan.
      </Typography>

      <Typography
        variant={isSmallOrLarger ? 'h6' : 'body1'}
        gutterBottom
        sx={{
          fontWeight: useTheme().typography.fontWeightBold,
        }}
      >
        Dealerkwaliteit met Partslink
      </Typography>
      <Typography component="div" sx={{ textAlign: { md: 'justify' }, mb: 2 }}>
        Bij Auto District kiest u zelf de onderdelen die bij uw budget passen:
        <List dense component="ul" sx={{ listStyleType: 'disc', pl: 4 }}>
          <ListItem disablePadding sx={{ display: 'list-item' }}>
            <strong>Originele dealeronderdelen:</strong> Dankzij onze koppeling
            met Partslink kunnen wij alle originele onderdelen rechtstreeks via
            de officiële merkdealer leveren en monteren
          </ListItem>
          <ListItem disablePadding sx={{ display: 'list-item' }}>
            <strong>Kwalitatieve alternatieven:</strong> Kiest u liever voor een
            voordeliger alternatief? Wij werken uitsluitend met hoogwaardige
            A-merk onderdelen (zoals Bosch, Continental en SKF) die voldoen aan
            de strengste fabriekseisen.
          </ListItem>
        </List>
        Dankzij ons netwerk met drie grote automaterialenpartners in de regio -
        die wel vier keer per dag onderdelen leveren - hebben we benodigde
        filters of onderdelen altijd razendsnel in huis.
      </Typography>

      <Typography
        variant={isSmallOrLarger ? 'h6' : 'body1'}
        gutterBottom
        sx={{
          fontWeight: useTheme().typography.fontWeightBold,
        }}
      >
        Digitaal en fysiek serviceboekje altijd up-to-date
      </Typography>
      <Typography component="div" sx={{ textAlign: { md: 'justify' }, mb: 2 }}>
        Het correct bijhouden van de onderhoudshistorie is essentieel. Na de
        onderhoudsbeurt vullen wij netjes uw fysieke onderhoudsboekje in.
        <List dense component="ul" sx={{ listStyleType: 'disc', pl: 4 }}>
          <ListItem disablePadding sx={{ display: 'list-item' }}>
            <strong>Heeft uw auto geen fysiek boekje meer?</strong> Geen
            probleem, wij kunnen een universeel onderhoudsboekje voor u
            verzorgen.
          </ListItem>
          <ListItem disablePadding sx={{ display: 'list-item' }}>
            <strong>Digitaal Service Register (DSR):</strong> Voor moderne
            voertuigen (waaronder VAG en andere jonge bouwjaren) registreren wij
            de onderhoudshistorie officieel in het digitale fabriekssysteem van
            de dealer. Hierdoor blijft uw eventuele fabrieksgarantie en
            mobiliteitsgarantie gewaarborgd.
          </ListItem>
        </List>
        Dankzij ons netwerk met drie grote automaterialenpartners in de regio -
        die wel vier keer per dag onderdelen leveren - hebben we benodigde
        filters of onderdelen altijd razendsnel in huis.
      </Typography>

      <Typography
        variant={isSmallOrLarger ? 'h6' : 'body1'}
        gutterBottom
        sx={{
          fontWeight: useTheme().typography.fontWeightBold,
        }}
      >
        Extra service van het huis
      </Typography>
      <Typography sx={{ textAlign: { md: 'justify' }, mb: 2 }}>
        Wij vinden dat service verder gaat dan alleen sleutelen onder de
        motorkap. Als het onderhoud aan uw auto succesvol is afgerond,
        stofzuigen wij uw auto volledig uit. Zo stapt u niet alleen in een
        technisch perfecte auto, maar ook in een heerlijk schone auto!
      </Typography>

      <Typography
        variant={isSmallOrLarger ? 'h6' : 'body1'}
        gutterBottom
        sx={{
          fontWeight: useTheme().typography.fontWeightBold,
        }}
      >
        Plan direct uw onderhoud in
      </Typography>
      <Typography sx={{ textAlign: { md: 'justify' }, mb: 2 }}>
        Is uw kilometerstand bereikt, brandt er een onderhoudsmelding op uw
        dashboard of is het een jaar geleden dat uw auto gecontroleerd is? Neem
        vandaag nog contact op met ons team in Poeldijk of vraag direct een
        vrijblijvende prijsopgave aan via onze Contactpagina.
      </Typography>
    </Container>
  )
}

export default Onderhoud
