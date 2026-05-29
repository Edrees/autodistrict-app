import { Container, Typography, useMediaQuery, useTheme } from '@mui/material'

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
        Onderhoud
      </Typography>
      <Typography sx={{ textAlign: { md: 'justify' }, mb: 2 }}>
        Auto District voert ook het onderhoud van uw auto uit. We controleren
        eerst de algehele staat van de auto en uw service/obderhoudsboekje. Aan
        de hand hiervan maken we een passende offerte en word het juiste
        vervangen.
      </Typography>
      <Typography sx={{ textAlign: { md: 'justify' }, mb: 2 }}>
        Met een klein magazijn hebben we de meest voorkomende filters/onderdelen
        invoorraad. Mochten we het toch niet op voorraad hebben dan heeft 1 van
        de 3 automaterialen partners het wel die 4x per dag rijden.
      </Typography>
      <Typography sx={{ textAlign: { md: 'justify' }, mb: 2 }}>
        Wilt u liever alles origineel ook dat is geen probleem. Wij werken met
        Partslink en daardoor kunnen we alles via de dealer krijgen wat mogelijk
        is.
      </Typography>
      <Typography sx={{ textAlign: { md: 'justify' }, mb: 2 }}>
        Uiteraard vullen we uw service/onderhoudsboekje in na het uitvoeren van
        het onderhoud. Beschikt u niet over een boekje ook die kunnen we
        universeel leveren.
      </Typography>
      <Typography sx={{ textAlign: { md: 'justify' }, mb: 2 }}>
        Als alles netjes gedaan is stofzuigen we de auto zodat u in een schone
        auto weer naar huis kan.
      </Typography>
    </Container>
  )
}

export default Onderhoud
