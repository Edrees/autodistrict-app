import * as React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
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
  { name: 'Airco service', pageLink: 'airco' },
  { name: 'Autosleutels inleren', pageLink: 'autosleutels-inleren' },
  { name: 'Bandenopslag', pageLink: 'bandenopslag' },
  { name: 'DSG', pageLink: 'dsg' },
  { name: 'Onderhoud', pageLink: 'onderhoud' },
  { name: 'Reparatie', pageLink: 'reparatie' },
  { name: 'Storingen', pageLink: 'storingen' },
]

const pages: PageProps[] = [
  { name: 'Over ons', pageLink: 'over-ons' },
  { name: 'Contact', pageLink: 'contact' },
]

const Navigation = () => {
  const theme = useTheme()
  const [drawerState, setDrawerState] = React.useState({ top: false })
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  // Setting Active Link Via Router
  const location = useLocation()
  const isServicesActive = services.some((s) =>
    location.pathname.includes(s.pageLink)
  )

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
      <NavLink to="/">
        <img alt="Auto District" src={logo} width="100%" />
      </NavLink>
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
              <NavLink
                to={service.pageLink}
                onClick={toggleDrawer('top', false)}
                style={({ isActive }) => ({
                  color: isActive ? theme.palette.secondary.main : 'initial',
                  textDecoration: 'none',
                  fontWeight: isActive ? 700 : 400,
                  borderBottom: isActive
                    ? `2px solid ${theme.palette.secondary.main}`
                    : 'none',
                })}
              >
                {service.name}
              </NavLink>
            </ListItem>
          ))}
          {pages.map((page, index) => (
            <ListItem
              key={`mobile-menu-${index}`}
              sx={{ borderBottom: `1px solid ${theme.palette.grey[200]}` }}
            >
              <NavLink
                to={page.pageLink}
                style={({ isActive }) => ({
                  color: isActive ? theme.palette.secondary.main : 'initial',
                  textDecoration: 'none',
                  fontWeight: isActive ? 700 : 400,
                  borderBottom: isActive
                    ? `2px solid ${theme.palette.secondary.main}`
                    : 'none',
                })}
                onClick={toggleDrawer('top', false)}
              >
                {page.name}
              </NavLink>
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
                  color: isServicesActive
                    ? theme.palette.secondary.main
                    : 'initial',
                  fontWeight: isServicesActive ? 500 : 400,
                  textTransform: 'none',
                  borderBottom: isServicesActive
                    ? `2px solid ${theme.palette.secondary.main}`
                    : 'none',
                  borderRadius: 0,
                  fontSize: 16,
                }}
              >
                Diensten
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleServicesClose}
              >
                {services.map((service, index) => {
                  const isActive = location.pathname.includes(service.pageLink)
                  return (
                    <MenuItem
                      key={`service-${index}`}
                      component={NavLink}
                      to={service.pageLink}
                      onClick={handleServicesClose}
                      sx={{
                        color: isActive
                          ? theme.palette.secondary.main
                          : 'initial',
                        fontWeight: isActive ? 500 : 400,
                        borderLeft: isActive
                          ? `3px solid ${theme.palette.secondary.main}`
                          : '3px solid transparent',
                      }}
                    >
                      {service.name}
                    </MenuItem>
                  )
                })}
              </Menu>
              {pages.map((page, index) => (
                <Box sx={{ ml: 2 }} key={`desktop-menu-${index}`}>
                  <NavLink
                    to={page.pageLink}
                    style={({ isActive }) => ({
                      color: isActive
                        ? theme.palette.secondary.main
                        : 'initial',
                      textDecoration: 'none',
                      fontWeight: isActive ? 700 : 400,
                      borderBottom: isActive
                        ? `2px solid ${theme.palette.secondary.main}`
                        : 'none',
                    })}
                  >
                    {page.name}
                  </NavLink>
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
