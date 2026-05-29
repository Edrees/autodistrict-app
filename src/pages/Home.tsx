import { Link } from 'react-router-dom'
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'

import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined'
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined'
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import AirOutlinedIcon from '@mui/icons-material/AirOutlined'
import TripOriginOutlinedIcon from '@mui/icons-material/TripOriginOutlined'
import CircleIcon from '@mui/icons-material/Circle'
import VerifiedIcon from '@mui/icons-material/Verified'

import homePagePic from '../assets/auto-district-homepage.jpeg'
import homePagePicRdw from '../assets/auto-district-rdw.jpeg'

export default function Home() {
  const isSmallOrLarger = useMediaQuery(useTheme().breakpoints.up('sm'))

  interface ServiceProps {
    name: string
    desc: string
    icon: React.ReactNode
    pageLink: string
  }

  interface ServicesUSPProps {
    title: string
    desc: string
  }

  const ourServiceBlockIconColor: string = '#d33535'
  const ourServiceBlockIconSize: number = 32

  const services: ServiceProps[] = [
    {
      name: 'Onderhoud',
      desc: 'APK, olie & filters',
      icon: (
        <BuildOutlinedIcon
          sx={{
            color: ourServiceBlockIconColor,
            fontSize: ourServiceBlockIconSize,
          }}
        />
      ),
      pageLink: 'onderhoud',
    },
    {
      name: 'Reparatie',
      desc: 'Motor & techniek',
      icon: (
        <HandymanOutlinedIcon
          sx={{
            color: ourServiceBlockIconColor,
            fontSize: ourServiceBlockIconSize,
          }}
        />
      ),
      pageLink: 'reparatie',
    },
    {
      name: 'Storingen',
      desc: 'Diagnose & herstel',
      icon: (
        <WarningAmberOutlinedIcon
          sx={{
            color: ourServiceBlockIconColor,
            fontSize: ourServiceBlockIconSize,
          }}
        />
      ),
      pageLink: 'storingen',
    },
    {
      name: 'DSG',
      desc: 'Versnellingsbak service',
      icon: (
        <SettingsOutlinedIcon
          sx={{
            color: ourServiceBlockIconColor,
            fontSize: ourServiceBlockIconSize,
          }}
        />
      ),
      pageLink: 'dsg',
    },
    {
      name: 'Airco',
      desc: 'Service & recharge',
      icon: (
        <AirOutlinedIcon
          sx={{
            color: ourServiceBlockIconColor,
            fontSize: ourServiceBlockIconSize,
          }}
        />
      ),
      pageLink: 'airco',
    },
    {
      name: 'Bandenopslag',
      desc: 'Opslag & wisselen',
      icon: (
        <TripOriginOutlinedIcon
          sx={{ color: ourServiceBlockIconColor, fontSize: 32 }}
        />
      ),
      pageLink: 'bandenopslag',
    },
  ]

  const servicesUSP: ServicesUSPProps[] = [
    {
      title: 'APK Keuring',
      desc: 'Snel en flexibel ingepland. Onze gecertificeerde keurmeesters controleren uw auto grondig volgens de RDW-richtlijnen.',
    },
    {
      title: 'Onderhoud & Reparatie',
      desc: 'Grote of kleine beurt? Wij onderhouden elk merk met behoud van fabrieksgarantie en vullen uw (digitale) serviceboekje netjes in.',
    },
    {
      title: 'DSG & Automaat Service',
      desc: 'Haperingen of toe aan onderhoud? Wij zijn gespecialiseerd in het spoelen, repareren en inleren van DSG-versnellingsbakken.',
    },
    {
      title: 'Diagnose & Storingen',
      desc: 'Brandt er een storingslampje? Met geavanceerde diagnose-apparatuur achterhalen en verhelpen we snel de exacte oorzaak.',
    },
    {
      title: 'Airco Service',
      desc: 'Blijf koel in de zomer en voorkom beslagen ramen in de winter. Wij verzorgen het complete onderhoud en vullen van uw aircosysteem.',
    },
    {
      title: 'Banden & Uitlijnen',
      desc: 'Nieuwe zomer-, winter- of all-season banden professioneel gemonteerd en gebalanceerd, inclusief veilige bandenopslag.',
    },
  ]

  return (
    <>
      <Container fixed maxWidth="lg" disableGutters>
        <Grid container spacing={2} sx={{ mb: 4, justifyContent: 'center' }}>
          {services.map((service, index) => (
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }} key={index}>
              <Paper>
                <Card
                  component={Link}
                  to={service.pageLink}
                  sx={{
                    width: 190,
                    height: 120,
                    margin: '0 auto',
                    borderRadius: 2,
                    border: 'none',
                    display: 'block',
                    textAlign: 'center',
                    textDecoration: 'none',
                    cursor: 'pointer',
                  }}
                  variant="outlined"
                >
                  <CardContent>
                    {service.icon}
                    <Typography variant="body1" sx={{ fontWeight: '500' }}>
                      {service.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary' }}
                    >
                      {service.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container
        sx={{
          minHeight: useTheme().spacing(50),
          padding: { xs: useTheme().spacing(4), md: useTheme().spacing(5) },
          borderRadius: 1,
          backgroundColor: 'white',
          boxShadow: 1,
        }}
      >
        <Grid container spacing={5}>
          <Grid size={{ xs: 12 }}>
            <Typography
              variant={isSmallOrLarger ? 'h6' : 'body1'}
              gutterBottom
              sx={{
                fontWeight: useTheme().typography.fontWeightBold,
              }}
            >
              Auto District Poeldijk: Transparant en deskundig autoonderhoud
            </Typography>
            <Typography sx={{ textAlign: { md: 'justify' } }}>
              Zoekt u een vakkundige garage in het Westland waar eerlijkheid nog
              heel gewoon is? Welkom bij Auto District in Poeldijk! Als
              RDW-erkend autobedrijf bieden wij u de perfecte combinatie van
              dealerkwaliteit en de persoonlijke service van een dorpsgarage.
              Wij staan voor vakkennis, heldere communicatie en betaalbare
              tarieven voor elk type auto.
              <br />
              <br />
              Of uw voertuig nu toe is aan de jaarlijkse APK-keuring, een grote
              beurt, of specifiek onderhoud zoals een DSG-transmissieservice:
              ons team staat voor u klaar. Wij zijn uitgerust met de modernste
              diagnose- en uitleesapparatuur en werken uitsluitend met
              hoogwaardige, originele onderdelen. Hierdoor blijft uw auto in
              absolute topconditie en behoudt deze zijn waarde.
              <br />
              <br />
              Onze filosofie is simpel: wij behandelen uw auto alsof het die van
              onszelf is. Dat betekent dat we altijd vooraf met u overleggen,
              helder advies geven zonder technisch jargon en flexibel met uw
              agenda meedenken. Van een kleine ingreep tot een complete
              motorreparatie, wij werken snel en efficiënt zodat u in no-time
              weer veilig op de weg zit. Ervaar het zelf en kom gerust eens
              langs in onze werkplaats!
            </Typography>
            <Typography
              variant={isSmallOrLarger ? 'h6' : 'body1'}
              gutterBottom
              sx={{
                fontWeight: useTheme().typography.fontWeightBold,
                mt: 4,
              }}
            >
              Waarvoor kunt u bij Auto District terecht?
            </Typography>

            <List>
              {servicesUSP.map((usp, index) => (
                <ListItem>
                  <ListItemIcon>
                    <CircleIcon fontSize="small" color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={usp.title} secondary={usp.desc} />
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Paper
              elevation={2}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: 'auto',
                padding: 2,
                maxWidth: 900,
              }}
            >
              <img
                src={homePagePic}
                alt="Auto District Poeldijk"
                width="100%"
              />
              <Typography
                sx={{
                  mt: 2,
                }}
              >
                Vakmanschap met een glimlach. Maak kennis met de monteurs van
                Auto District Poeldijk.
              </Typography>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Typography sx={{ mb: 2 }} align="justify">
              Is uw auto toe aan de Algemene Periodieke Keuring? Als RDW-erkend
              autobedrijf keuren wij alle voertuigen binnen de APK2-categorie.
              Bij Auto District sleutelen alleen échte vakmensen aan uw auto: al
              onze monteurs beschikken over de juiste papieren en zijn erkende
              APK-keurmeesters. Door onze flexibele werkwijze stemmen we de
              afspraak soepel af op uw agenda en plannen we de keuring altijd
              snel voor u in.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Paper
              elevation={2}
              sx={{
                padding: 2,
                display: 'flex',
                maxWidth: 400,
                margin: 'auto',
              }}
            >
              <img src={homePagePicRdw} alt="Auto District RDW" width="100%" />
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Paper
        sx={{
          maxWidth: 400,
          margin: 'auto',
          mt: 4,
        }}
      >
        <Card variant="outlined">
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                mb: 2,
              }}
            >
              <VerifiedIcon sx={{ color: 'green', mr: 2 }} fontSize="small" />
              <Typography
                variant="body1"
                component="span"
                sx={{ fontWeight: 700 }}
              >
                RDW-Erkend & Gecertificeerd
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Al onze monteurs zijn gediplomeerde APK-keurmeesters.
                </Typography>
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                mb: 2,
              }}
            >
              <VerifiedIcon sx={{ color: 'green', mr: 2 }} fontSize="small" />
              <Typography
                variant="body1"
                component="div"
                sx={{ fontWeight: 700 }}
              >
                DSG Specialist
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Diepgaande expertise in Volkswagen, Audi, SEAT en Škoda.
                </Typography>
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                mb: 2,
              }}
            >
              <VerifiedIcon sx={{ color: 'green', mr: 2 }} fontSize="small" />
              <Typography
                variant="body1"
                component="div"
                sx={{ fontWeight: 700 }}
              >
                Eerlijk & Transparant
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Nooit onverwachte kosten. Wij bellen altijd vóór een
                  reparatie.
                </Typography>
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                mb: 2,
              }}
            >
              <VerifiedIcon sx={{ color: 'green', mr: 2 }} fontSize="small" />
              <Typography
                variant="body1"
                component="div"
                sx={{ fontWeight: 700 }}
              >
                Klantbeoordeling 5.0 / 5
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Trots op onze honderden positieve Google-reviews van tevreden
                  rijders!
                </Typography>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Paper>
    </>
  )
}
