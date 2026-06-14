import {
  Grid,
  Container,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import MailIcon from '@mui/icons-material/Mail'
import PhoneIcon from '@mui/icons-material/Phone'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import googleMapsPic from '../assets/auto-district-maps.png'

export default function Contact() {
  const theme = useTheme()
  const isSmallOrLarger = useMediaQuery(theme.breakpoints.up('sm'))

  const email = (
    <Link href="mailto:info@autodistrict.nl" underline="hover">
      info@autodistrict.nl
    </Link>
  )

  const mobile = (
    <Link href="tel:+31654977850" underline="hover">
      +31654977850
    </Link>
  )

  const address = (
    <Link href="https://g.page/autodistrict" underline="hover" target="_blank">
      Jupiter 39-B, 2685 LV Poeldijk
    </Link>
  )

  const openingstijden = [
    { dag: 'Zondag', tijd: 'Gesloten' },
    { dag: 'Maandag', tijd: '08:00 - 17:00' },
    { dag: 'Dinsdag', tijd: '08:00 - 17:00' },
    { dag: 'Woensdag', tijd: '08:00 - 17:00' },
    { dag: 'Donderdag', tijd: '08:00 - 17:00' },
    { dag: 'Vrijdag', time: '08:00 - 17:00' },
    { dag: 'Zaterdag', tijd: '08:30 - 13:00' },
  ]

  const huidigeDagIndex = new Date().getDay()

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
      <Typography
        variant={isSmallOrLarger ? 'h6' : 'body1'}
        gutterBottom
        sx={{
          fontWeight: theme.typography.fontWeightBold,
        }}
      >
        Auto District Poeldijk
      </Typography>
      <Grid container spacing={2}>
        <Grid
          size={{ xs: 12, md: 5, lg: 4 }}
          sx={{ marginBottom: { xs: 2, md: 0 } }}
        >
          {/* Contactgegevens */}
          <List dense sx={{ mb: 3 }}>
            <ListItem disablePadding>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <MailIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={email} />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <PhoneIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={mobile} />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <LocationOnIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText primary={address} />
            </ListItem>
          </List>

          {/* Openingstijden Sectie */}
          <Typography sx={{ fontWeight: 'bold', mb: 1 }}>
            Openingstijden
          </Typography>
          <List>
            {openingstijden.map((item, index) => {
              // Controleer of deze regel de dag van vandaag is
              const isVandaag = index === huidigeDagIndex

              return (
                <ListItem
                  key={index}
                  disablePadding
                  sx={{
                    mb: 0.5,
                    alignItems: 'flex-start',
                    // Geef de dag van vandaag een subtiele achtergrond of extra padding indien gewenst
                    bgcolor: isVandaag ? 'action.selected' : 'transparent',
                    borderRadius: 0.5,
                    py: isVandaag ? 0.5 : 0,
                    px: isVandaag ? 0.5 : 0,
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 36, mt: 0.3 }}>
                    {/* Het klok-icoon verhuist nu automatisch mee naar de huidige dag */}
                    {isVandaag && (
                      <AccessTimeIcon fontSize="small" color="primary" />
                    )}
                  </ListItemIcon>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '100%',
                      pr: 1,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: isVandaag ? 'bold' : 'normal',
                        color:
                          item.tijd === 'Gesloten'
                            ? 'text.secondary'
                            : 'text.primary',
                      }}
                    >
                      {item.dag} {isVandaag && '(Vandaag)'}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight:
                          isVandaag || item.tijd === 'Gesloten'
                            ? 'bold'
                            : 'medium',
                        color: isVandaag
                          ? theme.palette.primary.main
                          : 'text.primary',
                      }}
                    >
                      {item.tijd}
                    </Typography>
                  </Box>
                </ListItem>
              )
            })}
          </List>
        </Grid>

        {/* Google Maps Kaart */}
        <Grid size={{ xs: 12, md: 7, lg: 8 }}>
          <Paper
            elevation={2}
            sx={{
              padding: 2,
            }}
          >
            <iframe
              title="Auto District locatie"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2452.0!2d4.1833!3d52.0167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b5b5b5b5b5b5%3A0x0!2sJupiter+39-B%2C+2685+LV+Poeldijk!5e0!3m2!1snl!2snl!4v1"
              width="100%"
              height="360"
              style={{ border: 0, borderRadius: 8 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
