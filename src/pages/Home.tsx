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

  interface TrustItemsProps {
    title: string
    desc: string
  }

  const ourServiceBlockIconColor: string = '#d33535'
  const ourServiceBlockIconSize: number = 40

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
      desc: 'Versnellingsbak',
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
      title: 'Airco Service & Lekdetectie',
      desc: 'Blijf koel in de zomer en voorkom storingen. Wij verzorgen het complete onderhoud, vullen aircosystemen (R134a & R1234yf) én sporen micro-lekkages nauwkeurig op met formeergas.',
    },
    {
      title: 'Banden & Professionele Montage',
      desc: 'Bestel uw banden online via BandenConcurrent en kies Auto District Poeldijk als uw vaste montagepartner. Wij verzorgen de complete demontage, montage, balancering én veilige seizoensopslag.',
    },
    {
      title: 'Walnut Blasting (Kleppen stralen)',
      desc: 'Ervaar je vermogensverlies of een onregelmatig stationair toerental? Met walnut blasting reinigen wij de inlaatkanalen en kleppen van direct ingespoten motoren grondig, zonder deze te beschadigen.',
    },
    {
      title: 'Elektronische Distributie Service',
      desc: 'De distributieriem is het hart van uw motor. Wij vervangen en stellen uw distributieriem of -ketting elektronisch uiterst nauwkeurig af, zodat uw motor weer perfect op tijd loopt.',
    },
    {
      title: 'Lekdetectie & Rookgas Diagnose',
      desc: 'Heeft u last van een onverklaarbare storing, vermogensverlies of vocht? Met behulp van geavanceerde rookmachines sporen wij lucht-, vacuüm- en vloeistoflekkages snel en schadevrij op.',
    },
  ]

  const trustItems: TrustItemsProps[] = [
    {
      title: 'RDW-Erkend & Gecertificeerd',
      desc: 'Al onze monteurs zijn gediplomeerde APK-keurmeesters.',
    },
    {
      title: 'DSG Specialist',
      desc: 'Diepgaande expertise in Volkswagen, Audi, SEAT en Škoda.',
    },
    {
      title: 'Eerlijk & Transparant',
      desc: 'Nooit onverwachte kosten. Wij bellen altijd vóór een reparatie.',
    },
    {
      title: 'Klantbeoordeling 5.0 / 5',
      desc: 'Trots op onze honderden positieve Google-reviews van tevreden rijders!',
    },
  ]

  return (
    <>
      <Container fixed maxWidth="lg" disableGutters>
        <Grid container spacing={2} sx={{ mb: 4, justifyContent: 'center' }}>
          {services.map((service, index) => (
            <Grid size={{ xs: 6, sm: 4, md: 3, lg: 2 }} key={index}>
              <Card
                component={Link}
                to={service.pageLink}
                variant="outlined"
                sx={{
                  width: 180,
                  height: 140,
                  margin: '0 auto',
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    borderColor: '#d33535',
                    boxShadow: '0 4px 12px rgba(211,53,53,0.15)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 1,
                    p: 2,
                    '&:last-child': { pb: 2 },
                  }}
                >
                  {service.icon}
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 600, textAlign: 'center' }}
                  >
                    {service.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary', textAlign: 'center' }}
                  >
                    {service.desc}
                  </Typography>
                </CardContent>
              </Card>
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
                <ListItem key={index}>
                  <ListItemIcon>
                    <CircleIcon fontSize="small" color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={usp.title} secondary={usp.desc} />
                </ListItem>
              ))}
            </List>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
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
          <Grid size={{ xs: 12, md: 5 }}>
            <Paper
              elevation={2}
              sx={{
                padding: 2,
                display: 'flex',
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
          margin: 'auto',
          mt: 4,
        }}
      >
        <Card variant="outlined">
          <CardContent>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: 2,
              }}
            >
              {trustItems.map((item) => (
                <Box
                  key={item.title}
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                  }}
                >
                  <VerifiedIcon
                    sx={{ color: 'green', mr: 2, mt: 0.3 }}
                    fontSize="small"
                  />
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{ fontWeight: 700 }}
                  >
                    {item.title}
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary' }}
                    >
                      {item.desc}
                    </Typography>
                  </Typography>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Paper>
    </>
  )
}
