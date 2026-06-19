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
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'

import KeyIcon from '@mui/icons-material/Key'
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined'
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined'
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import AirOutlinedIcon from '@mui/icons-material/AirOutlined'
import TripOriginOutlinedIcon from '@mui/icons-material/TripOriginOutlined'
import CircleIcon from '@mui/icons-material/Circle'

export default function Diensten() {
  const isSmallOrLarger = useMediaQuery(useTheme().breakpoints.up('sm'))

  interface ServiceProps {
    name: string
    desc: string
    icon: React.ReactNode
    pageLink: string
  }

  interface ServicesUSPProps {
    title: string
    desc: React.ReactNode
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
      name: 'Bandenopslag',
      desc: 'Opslag & wisselen',
      icon: (
        <TripOriginOutlinedIcon
          sx={{
            color: ourServiceBlockIconColor,
            fontSize: ourServiceBlockIconSize,
          }}
        />
      ),
      pageLink: 'bandenopslag',
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
      name: 'Autosleutel',
      desc: 'Sleutels inleren',
      icon: (
        <KeyIcon
          sx={{
            color: ourServiceBlockIconColor,
            fontSize: ourServiceBlockIconSize,
          }}
        />
      ),
      pageLink: 'autosleutels-inleren',
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
  ]

  const servicesUSP: ServicesUSPProps[] = [
    {
      title: 'APK Keuring',
      desc: (
        <>
          Snel en flexibel ingepland. Onze{' '}
          <strong>gecertificeerde keurmeesters</strong> controleren uw auto
          grondig volgens de RDW-richtlijnen.
        </>
      ),
    },
    {
      title: 'Onderhoud & Reparatie',
      desc: (
        <>
          Grote of kleine beurt? Wij onderhouden elk merk met behoud van
          fabrieksgarantie en vullen uw (digitale) serviceboekje netjes in.
        </>
      ),
    },
    {
      title: 'Airco Service & Lekdetectie',
      desc: (
        <>
          Blijf koel in de zomer en voorkom storingen. Wij verzorgen het
          complete onderhoud, vullen aircosystemen{' '}
          <strong>(R134a & R1234yf)</strong> én sporen micro-lekkages nauwkeurig
          op met formeergas.
        </>
      ),
    },
    {
      title: 'DSG & Automaat Service',
      desc: (
        <>
          Haperingen of toe aan onderhoud? Wij zijn gespecialiseerd in het
          spoelen, repareren en inleren van{' '}
          <strong>DSG-versnellingsbakken</strong>.
        </>
      ),
    },
    {
      title: 'Autosleutels & Afstandsbedieningen Inleren',
      desc: (
        <>
          Kwijt, stuk of een extra sleutel nodig? Wij{' '}
          <strong>
            programmeren en inleren autosleutels en afstandsbedieningen
          </strong>{' '}
          voor de meeste merken en modellen.
        </>
      ),
    },
    {
      title: 'Banden & Professionele Montage',
      desc: (
        <>
          Bestel uw banden online via <strong>BandenConcurrent</strong> en kies
          Auto District Poeldijk als uw vaste <strong>montagepartner</strong>.
          Wij verzorgen de complete demontage, montage, balancering én veilige
          seizoensopslag.
        </>
      ),
    },
    {
      title: 'Diagnose & Storingen',
      desc: (
        <>
          Brandt er een storingslampje? Met{' '}
          <strong>geavanceerde diagnose-apparatuur</strong> achterhalen en
          verhelpen we snel de exacte oorzaak.
        </>
      ),
    },
    {
      title: 'Lekdetectie & Rookgas Diagnose',
      desc: (
        <>
          Heeft u last van een onverklaarbare storing, vermogensverlies of
          vocht? Met behulp van <strong>geavanceerde rookmachines</strong>{' '}
          sporen wij lucht-, vacuüm- en vloeistoflekkages snel en schadevrij op.
        </>
      ),
    },
    {
      title: 'Walnut Blasting (Kleppen stralen)',
      desc: (
        <>
          Ervaar je vermogensverlies of een onregelmatig stationair toerental?
          Met <strong>walnut blasting</strong> reinigen wij de inlaatkanalen en
          kleppen van direct ingespoten motoren grondig, zonder deze te
          beschadigen.
        </>
      ),
    },
    {
      title: 'Elektronische Distributie Service',
      desc: (
        <>
          De distributieriem is het hart van uw motor. Wij{' '}
          <strong>
            vervangen en stellen uw distributieriem of -ketting elektronisch
          </strong>{' '}
          uiterst nauwkeurig af, zodat uw motor weer perfect op tijd loopt.
        </>
      ),
    },
  ]

  return (
    <>
      <Container fixed maxWidth="lg" disableGutters>
        <Grid
          container
          spacing={2}
          sx={{ mb: 4, justifyContent: 'center', px: { xs: 1, sm: 'inherit' } }}
        >
          {services.map((service, index) => (
            <Grid size={{ xs: 6, sm: 4, md: 3 }} key={index}>
              <Card
                component={Link}
                to={service.pageLink}
                variant="outlined"
                sx={{
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
        <Container
          sx={{
            minHeight: useTheme().spacing(50),
            padding: { xs: useTheme().spacing(4), md: useTheme().spacing(5) },
            borderRadius: 1,
            backgroundColor: 'white',
            boxShadow: 1,
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              mb: 4,
              justifyContent: 'center',
              px: { xs: 1, sm: 'inherit' },
            }}
          >
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
                    <ListItemText
                      primary={usp.title}
                      secondary={usp.desc}
                      slotProps={{ secondary: { style: { fontSize: 15 } } }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  )
}
