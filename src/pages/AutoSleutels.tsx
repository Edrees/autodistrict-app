import {
  Container,
  List,
  ListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'

function AutoSleutels() {
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
        Sleutels & Afstandsbedieningen Inleren
      </Typography>
      <Typography sx={{ textAlign: { md: 'justify' }, mb: 2 }}>
        Heeft u een extra autosleutel nodig, werkt uw huidige afstandsbediening
        niet meer naar behoren, of bent u uw reservesleutel kwijt? Wij helpen u
        snel en vakkundig weer op weg. Het programmeren en inleren van moderne
        autosleutels is specialistisch werk. Dankzij onze geavanceerde
        apparatuur kunnen wij sleutels en afstandsbedieningen inleren voor
        vrijwel alle gangbare automerken.
      </Typography>

      <Typography
        variant={isSmallOrLarger ? 'h6' : 'body1'}
        component="div"
        gutterBottom
        sx={{
          fontWeight: useTheme().typography.fontWeightBold,
        }}
      >
        Onze specialisaties
      </Typography>
      <Typography component="div" sx={{ textAlign: { md: 'justify' }, mb: 2 }}>
        Wij zijn volledig uitgerust voor het programmeren van sleutels voor
        diverse merken, met specifieke expertise in de VAG-groep:
        <List dense component="ul" sx={{ listStyleType: 'disc', pl: 4 }}>
          <ListItem disablePadding sx={{ display: 'list-item' }}>
            Volkswagen (VW) (o.a. Golf, Polo, Passat, Tiguan)
          </ListItem>
          <ListItem disablePadding sx={{ display: 'list-item' }}>
            Audi (o.a. A3, A4, A6, Q-modellen)
          </ListItem>
          <ListItem disablePadding sx={{ display: 'list-item' }}>
            Seat & Skoda
          </ListItem>
          <ListItem disablePadding sx={{ display: 'list-item' }}>
            En vele andere automerken!
          </ListItem>
        </List>
      </Typography>

      <Typography
        variant={isSmallOrLarger ? 'h6' : 'body1'}
        component="div"
        gutterBottom
        sx={{
          fontWeight: useTheme().typography.fontWeightBold,
        }}
      >
        Waarom uw sleutel bij ons laten inleren?
      </Typography>
      <List dense component="ul" sx={{ listStyleType: 'disc', pl: 4 }}>
        <ListItem disablePadding sx={{ display: 'list-item' }}>
          Moderne software: Wij programmeren de startonderbreker (transponder)
          en de afstandsbediening zodat deze perfect communiceren met uw auto.
        </ListItem>
        <ListItem disablePadding sx={{ display: 'list-item' }}>
          Klaar terwijl u wacht: In de meeste gevallen kunnen wij de sleutel
          direct inleren terwijl u geniet van een kop koffie.
        </ListItem>
        <ListItem disablePadding sx={{ display: 'list-item' }}>
          Betaalbaar alternatief: Dezelfde kwaliteit en service als bij de
          officiële merkdealer, maar dan voor een scherpere prijs.
        </ListItem>
      </List>

      <Typography
        variant={isSmallOrLarger ? 'h6' : 'body1'}
        component="div"
        gutterBottom
        sx={{
          fontWeight: useTheme().typography.fontWeightBold,
        }}
      >
        Wat neemt u mee naar de afspraak?
      </Typography>
      <Typography component="div" sx={{ textAlign: { md: 'justify' }, mb: 2 }}>
        Wij zijn volledig uitgerust voor het programmeren van sleutels voor
        diverse merken, met specifieke expertise in de VAG-groep:
        <List dense component="ol" sx={{ listStyleType: 'decimal', pl: 4 }}>
          <ListItem disablePadding sx={{ display: 'list-item' }}>
            De auto zelf (wij moeten de software rechtstreeks op het voertuig
            aansluiten).
          </ListItem>
          <ListItem disablePadding sx={{ display: 'list-item' }}>
            Alle momenteel werkende sleutels van de auto.
          </ListItem>
          <ListItem disablePadding sx={{ display: 'list-item' }}>
            Een geldig legitimatiebewijs en het kentekenbewijs.
          </ListItem>
        </List>
      </Typography>

      <Typography
        variant={isSmallOrLarger ? 'h6' : 'body1'}
        component="div"
        gutterBottom
        sx={{
          fontWeight: useTheme().typography.fontWeightBold,
        }}
      >
        Direct een afspraak maken of benieuwd naar de kosten?
      </Typography>
      <Typography sx={{ textAlign: { md: 'justify' }, mb: 2 }}>
        De exacte prijs en duur zijn afhankelijk van het merk, model en het
        bouwjaar van uw auto. Neem vrijblijvend contact met ons op voor een
        prijsopgave op maat of om direct een afspraak in te plannen.
      </Typography>
    </Container>
  )
}

export default AutoSleutels
