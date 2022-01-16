import {
  Grid,
  Container,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import MailIcon from '@mui/icons-material/Mail'
import PhoneIcon from '@mui/icons-material/Phone'
import googleMapsPic from '../assets/auto-district-maps.png'

export default function Contact() {
  const isSmallOrLarger = useMediaQuery(useTheme().breakpoints.up('sm'))

  const email = (
    <Link href="mailto:info@autodistrict.nl" underline="hover">
      info@autodistrict.nl
    </Link>
  )

  const mobile = (
    <Link href="tel:+31681483303" underline="hover">
      +31681483303
    </Link>
  )

  const address = (
    <Link href="https://g.page/autodistrict" underline="hover" target="_blank">
      Jupiter 39-B, 2685 LV Poeldijk
    </Link>
  )

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
        Contact
      </Typography>
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          sx={{ marginBottom: { xs: 2, md: 0 } }}
        >
          <Typography variant="body1" component="div" align="justify">
            Auto District
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={email} />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText primary={mobile} />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
              <ListItemText primary={address} />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          <Link
            href="https://g.page/autodistrict"
            underline="hover"
            target="_blank"
          >
            <img
              src={googleMapsPic}
              alt="Auto District Poeldijk"
              width="100%"
            />
          </Link>
        </Grid>
      </Grid>
    </Container>
  )
}
