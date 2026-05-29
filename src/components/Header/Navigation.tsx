import * as React from 'react'
import { Link } from 'react-router-dom'
import {
  useTheme,
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem,
  Paper,
  Toolbar,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import TopBar from './TopBar'
import logo from '../../assets/auto-district-logo.png'

interface PageProps {
  name: string
  pageLink: string
}

const services: PageProps[] = [
  { name: 'Onderhoud', pageLink: 'onderhoud' },
  { name: 'Reparatie', pageLink: 'reparatie' },
  { name: 'Storingen', pageLink: 'storingen' },
  { name: 'DSG', pageLink: 'dsg' },
  { name: 'Airco Service', pageLink: 'airco' },
  { name: 'Bandenopslag', pageLink: 'bandenopslag' },
]

const pages: PageProps[] = [
  { name: 'Over ons', pageLink: 'over-ons' },
  { name: 'Contact', pageLink: 'contact' },
]

const Navigation = () => {
  const theme = useTheme()
  const [drawerState, setDrawerState] = React.useState({ top: false })
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleServicesOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleServicesClose = () => {
    setAnchorEl(null)
  }

  const toggleDrawer =
    (anchor: string, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }
      setDrawerState({ ...drawerState, [anchor]: open })
    }

  const appLogo = (
    <Box sx={{ width: 150 }}>
      <Link to="/">
        <img alt="Auto District" src={logo} width="100%" />
      </Link>
    </Box>
  )

  const mobileMenu = (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: 'flex', md: 'none' },
        justifyContent: 'flex-end',
        color: theme.palette.primary.main,
      }}
    >
      <IconButton
        size="large"
        aria-label="menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={toggleDrawer('top', true)}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="top"
        open={drawerState['top']}
        onClose={toggleDrawer('top', false)}
      >
        <List sx={{ padding: 0 }}>
          <ListItem
            sx={{ borderBottom: `1px solid ${theme.palette.grey[200]}` }}
          >
            {appLogo}
          </ListItem>
          <ListItem
            sx={{
              borderBottom: `1px solid ${theme.palette.grey[200]}`,
              fontWeight: 500,
              color: theme.palette.text.secondary,
              fontSize: 16,
              pl: 2,
            }}
          >
            Diensten
          </ListItem>
          {services.map((service, index) => (
            <ListItem
              key={`mobile-service-${index}`}
              sx={{
                borderBottom: `1px solid ${theme.palette.grey[200]}`,
                pl: 4,
              }}
            >
              <Link
                to={service.pageLink}
                style={{ color: 'initial', textDecoration: 'none' }}
                onClick={toggleDrawer('top', false)}
              >
                {service.name}
              </Link>
            </ListItem>
          ))}
          {pages.map((page, index) => (
            <ListItem
              key={`mobile-menu-${index}`}
              sx={{ borderBottom: `1px solid ${theme.palette.grey[200]}` }}
            >
              <Link
                to={page.pageLink}
                style={{ color: 'initial', textDecoration: 'none' }}
                onClick={toggleDrawer('top', false)}
              >
                {page.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  )

  return (
    <Paper>
      <AppBar position="sticky">
        <TopBar email="info@autodistrict.nl" phoneNumber="+31654977850" />
        <Container fixed maxWidth="lg">
          <Toolbar disableGutters>
            {appLogo}
            {mobileMenu}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <Button
                onClick={handleServicesOpen}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                  color: 'initial',
                  textTransform: 'none',
                  fontSize: 16,
                  fontWeight: 400,
                }}
              >
                Diensten
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleServicesClose}
              >
                {services.map((service, index) => (
                  <MenuItem
                    key={`service-${index}`}
                    component={Link}
                    to={service.pageLink}
                    onClick={handleServicesClose}
                  >
                    {service.name}
                  </MenuItem>
                ))}
              </Menu>
              {pages.map((page, index) => (
                <Box sx={{ ml: 2 }} key={`desktop-menu-${index}`}>
                  <Link
                    to={page.pageLink}
                    style={{ color: 'initial', textDecoration: 'none' }}
                  >
                    {page.name}
                  </Link>
                </Box>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Paper>
  )
}

export default Navigation
