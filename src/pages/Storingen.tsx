import {
  Container,
  List,
  ListItem,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'

function Storingen() {
  const isSmallOrLarger = useMediaQuery(useTheme().breakpoints.up('sm'))
  return (
    <Container maxWidth={false} disableGutters>
      <Typography
        variant={isSmallOrLarger ? 'h6' : 'body1'}
        component="div"
        gutterBottom
        sx={{
          fontWeight: useTheme().typography.fontWeightBold,
        }}
      >
        Storingen
      </Typography>
      <List dense>
        <ListItem disablePadding>
          Heeft u een storingslampje wat brand of een melding in uw auto? Dat is
          geen probleem we hebben diverse uitleesapparaat waaronder:
        </ListItem>
        <ListItem disablePadding>- ODIS voor de VAG modellen</ListItem>
        <ListItem disablePadding>- VCDS voor de VAG modellen</ListItem>
        <ListItem disablePadding>- Autel voor alle auto merken</ListItem>
        <ListItem disablePadding>- Delphi voor alle auto merken</ListItem>
      </List>
      <Typography sx={{ textAlign: { md: 'justify' }, mb: 2 }}>
        We kunnen uw storing uitlezen, diagnose stellen en als de storing is
        verholpen weer wissen.
      </Typography>
      <Typography sx={{ textAlign: { md: 'justify' }, mb: 2 }}>
        Ook hebben we een GYS acculader. Hiermee zorgen we dat de accu geladen
        blijft tijdens de diagnose zodat de accu niet leeg raakt.
      </Typography>
      <Typography sx={{ textAlign: { md: 'justify' }, mb: 2 }}>
        Uiteraard maken we eerst een offerte en vragen we toestemming voordat we
        de reparatie uitvoeren.
      </Typography>
    </Container>
  )
}

export default Storingen
