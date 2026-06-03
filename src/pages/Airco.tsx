import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined'
import aircoPagePic from '../assets/auto-district-airco.jpeg'

function Airco() {
  const theme = useTheme()
  const isSmallOrLarger = useMediaQuery(theme.breakpoints.up('sm'))

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

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        minHeight: theme.spacing(50),
        padding: { xs: theme.spacing(4), md: theme.spacing(5) },
        borderRadius: 1,
        backgroundColor: 'white',
        boxShadow: 1,
      }}
    >
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, lg: 7 }} sx={{ mb: 4 }}>
          <Typography
            variant={isSmallOrLarger ? 'h6' : 'body1'}
            component="div"
            gutterBottom
            sx={{
              fontWeight: theme.typography.fontWeightBold,
            }}
          >
            Professionele Airco Service bij Auto District
          </Typography>
          <Typography sx={{ textAlign: { md: 'justify' }, mb: 2 }}>
            Werkt uw airconditioning niet meer optimaal, blaast deze lauwe lucht
            of wilt u storingen in de zomer voorkomen? Bij{' '}
            <strong>Auto District Poeldijk</strong> bent u aan het juiste adres
            voor compleet en vakkundig airco-onderhoud. Met onze geavanceerde{' '}
            <strong>MAHLE aircomachines</strong> onderhouden en vullen wij
            aircosystemen van elk type voertuig. Of uw auto nu is uitgerust met
            het oudere <strong>R134a koudemiddel</strong> of het modernere,
            milieuvriendelijke <strong>R1234yf koudemiddel</strong>: wij hebben
            voor beide systemen de juiste expertise en apparatuur in huis. Mocht
            uw airco defect of volledig leeg zijn, dan sporen wij lekkages
            nauwkeurig op met behulp van een gespecialiseerde afpersset met
            formeergas, een elektronische lekdetector of via{' '}
            <strong>UV-detectie</strong>. Na afloop van de servicebeurt ontvangt
            u van ons altijd een officiële uitdraai met de exacte specificaties
            van het onderhoud.
          </Typography>

          <Typography
            variant={isSmallOrLarger ? 'h6' : 'body1'}
            component="div"
            gutterBottom
            sx={{
              fontWeight: theme.typography.fontWeightBold,
              mb: 1,
            }}
          >
            Lekdetectie met Formeergas: Hoe werkt het?
          </Typography>
          <Typography sx={{ textAlign: { md: 'justify' }, mb: 3 }}>
            Wanneer uw airconditioning snel koelvermogen verliest, is de kans
            groot dat er ergens een lek zit. Het simpelweg blijven bijvullen van
            koelmiddel zonder de oorzaak aan te pakken is wettelijk verboden en
            zonde van uw geld. Omdat micro-lekkages met het blote oog vaak
            onzichtbaar zijn, zetten wij <strong>formeergas</strong> in voor een
            100% betrouwbare diagnose.
          </Typography>

          <Grid container spacing={2}>
            {voordelen.map((voordeel, index) => (
              <Grid size={{ xs: 12, sm: 6 }} key={index}>
                <Card
                  variant="outlined"
                  sx={{
                    height: '100%',
                    borderRadius: 1,
                    borderColor: 'divider',
                  }}
                >
                  <CardContent sx={{ p: 2 }}>
                    <Stack
                      sx={{ direction: 'row', alignItems: 'flex-start' }}
                      spacing={1.5}
                    >
                      <CheckCircleOutlineOutlinedIcon
                        color="primary"
                        sx={{ mt: 0.3, fontSize: 20 }}
                      />
                      <Box>
                        <Typography
                          variant="body1"
                          component="h4"
                          sx={{ fontWeight: 'bold', mb: 0.5 }}
                        >
                          {voordeel.titel}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ lineHeight: 1.5 }}
                        >
                          {voordeel.beschrijving}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          size={{ xs: 12, lg: 5 }}
          sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}
        >
          <Paper
            elevation={2}
            sx={{
              padding: 2,
              display: 'flex',
              alignSelf: 'center',
            }}
          >
            <img
              src={aircoPagePic}
              alt="Auto District Airco Service"
              width="100%"
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Airco
