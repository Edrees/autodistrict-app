import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Link,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import storagePagePic from '../assets/auto-district-bandenopslag.jpeg'

function Bandenopslag() {
  const theme = useTheme()
  const isSmallOrLarger = useMediaQuery(theme.breakpoints.up('sm'))

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
        <Grid size={{ xs: 12 }}>
          <Typography
            variant={isSmallOrLarger ? 'h6' : 'body1'}
            gutterBottom
            sx={{
              fontWeight: theme.typography.fontWeightBold,
            }}
          >
            Professionele Bandenservice & Opslag
          </Typography>
          <Typography sx={{ textAlign: { md: 'justify' }, mb: 2 }}>
            Bent u op zoek naar een betrouwbare bandenservice in Poeldijk? Sinds
            2022 is
            <strong> Auto District</strong> een officiële en hooggewaardeerde
            montagepartner van{' '}
            <Link
              href="https://www.bandenconcurrent.nl/garages/poeldijk/19718-auto-district/"
              target="_blank"
              sx={{
                fontWeight: 900,
                textDecoration: 'none',
                color: theme.palette.secondary.main,
              }}
            >
              BandenConcurrent
            </Link>{' '}
            (gemiddelde klantbeoordeling: 9,7!) . U bestelt uw nieuwe zomer-,
            winter- of all-season banden eenvoudig online, waarna ze
            rechtstreeks bij onze garage worden geleverd. Wij zorgen vervolgens
            voor een snelle, vakkundige montage en nauwkeurige balancering.
          </Typography>
          <Typography sx={{ textAlign: { md: 'justify' }, mb: 2 }}>
            De zomer- en winterbanden of complete wielensets kunnen we
            aansluitend voor u opslaan. De wielen liggen droog in ons beveiligde
            magazijn. Hierdoor hoeft u de zware wielen niet zelf bij elke wissel
            mee te slepen en houdt u thuis extra opbergruimte over. Bovendien
            krijgt u van ons automatisch een herinnering wanneer het weer tijd
            is voor de seizoenswissel!
          </Typography>
        </Grid>

        <Grid
          size={{ xs: 12 }}
          sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}
        >
          <Paper
            elevation={2}
            sx={{
              padding: 2,
              display: 'flex',
              maxWidth: 640,
              width: '100%',
            }}
          >
            <img
              src={storagePagePic}
              alt="Auto District Bandenopslag"
              width="100%"
            />
          </Paper>
        </Grid>

        {/* Voordelen Grid onder de afbeelding */}
        <Grid size={{ xs: 12 }}>
          <Grid container spacing={2}>
            {voordelen.map((voordeel, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <Card
                  variant="outlined"
                  sx={{
                    height: '100%',
                    borderRadius: 1,
                    borderColor: 'divider',
                  }}
                >
                  <CardContent sx={{ p: 2 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: 1.5,
                        alignItems: 'flex-start',
                      }}
                    >
                      {/* Inline SVG Vinkje in de primaire huiskleur */}
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={theme.palette.primary.main}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ marginTop: '2px', flexShrink: 0 }}
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <Box>
                        <Typography
                          variant="body1"
                          component="h4"
                          sx={{
                            fontWeight: theme.typography.fontWeightBold,
                            mb: 0.5,
                          }}
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
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Bandenopslag
