import * as React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {
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
  Toolbar,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import TopBar from './TopBar'
// Light variant: the grey 'auto' letters are recoloured so they read on the
// dark header. The original stays in assets for light backgrounds.
import logo from '../../assets/auto-district-logo-light.png'
import { BRAND_RED, BRAND_RED_TEXT } from '../../theme'
import { NAV_PAGES, NAV_SERVICES } from '../../constants/services'
import { BOOKING_PATH, CONTACT } from '../../constants/company'

const navLinkSx = (isActive: boolean) => ({
  color: isActive ? BRAND_RED_TEXT : 'text.primary',
  fontWeight: isActive ? 700 : 500,
  fontSize: 16,
  textDecoration: 'none',
  borderBottom: '2px solid',
  borderColor: isActive ? BRAND_RED : 'transparent',
  py: 0.5,
  '&:hover': { color: BRAND_RED_TEXT },
})

const drawerItemSx = {
  borderBottom: 1,
  borderColor: 'divider',
  py: 1.5,
}

const Navigation = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const location = useLocation()
  // Normalise to a trailing slash so '/contact' and '/contact/' both match.
  const pathname = location.pathname.replace(/\/?$/, '/')
  const isActive = (path: string) => pathname.startsWith(path)
  const isServicesActive = NAV_SERVICES.some((s) => isActive(s.path))

  const closeDrawer = () => setDrawerOpen(false)

  const appLogo = (
    <Box
      component={NavLink}
      to="/"
      aria-label="Auto District, naar de homepage"
      sx={{ display: 'block', width: { xs: 130, md: 150 }, lineHeight: 0 }}
    >
      <img alt="Auto District" src={logo} width="100%" />
    </Box>
  )

  const mobileMenu = (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: 'flex', md: 'none' },
        justifyContent: 'flex-end',
      }}
    >
      <IconButton
        size="large"
        aria-label="Menu openen"
        aria-haspopup="true"
        onClick={() => setDrawerOpen(true)}
        sx={{ color: 'text.primary' }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={closeDrawer}
        slotProps={{
          paper: {
            sx: { backgroundColor: 'background.default', backgroundImage: 'none' },
          },
        }}
      >
        <List sx={{ p: 0 }}>
          <ListItem
            sx={{ ...drawerItemSx, justifyContent: 'space-between' }}
          >
            {appLogo}
            <IconButton
              aria-label="Menu sluiten"
              onClick={closeDrawer}
              sx={{ color: 'text.primary' }}
            >
              <CloseIcon />
            </IconButton>
          </ListItem>
          <ListItem sx={drawerItemSx}>
            <Typography
              sx={{
                fontSize: 13,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'text.secondary',
              }}
            >
              Diensten
            </Typography>
          </ListItem>
          {NAV_SERVICES.map((service) => (
            <ListItem key={service.path} sx={{ ...drawerItemSx, pl: 4 }}>
              <Box
                component={NavLink}
                to={service.path}
                onClick={closeDrawer}
                sx={navLinkSx(isActive(service.path))}
              >
                {service.name}
              </Box>
            </ListItem>
          ))}
          {NAV_PAGES.map((page) => (
            <ListItem key={page.path} sx={drawerItemSx}>
              <Box
                component={NavLink}
                to={page.path}
                onClick={closeDrawer}
                sx={navLinkSx(isActive(page.path))}
              >
                {page.name}
              </Box>
            </ListItem>
          ))}
          <ListItem sx={{ py: 2 }}>
            <Button
              variant="contained"
              fullWidth
              component={NavLink}
              to={BOOKING_PATH}
              onClick={closeDrawer}
            >
              Afspraak maken
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  )

  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        backgroundColor: 'rgba(10, 11, 13, 0.82)',
        backdropFilter: 'blur(12px)',
        borderBottom: 1,
        borderColor: 'divider',
        backgroundImage: 'none',
      }}
    >
      <TopBar email={CONTACT.email} phoneNumber={CONTACT.phoneDisplay} />
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 76 }, gap: 3 }}>
          {appLogo}
          {mobileMenu}
          <Box
            component="nav"
            aria-label="Hoofdmenu"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: 3.5,
            }}
          >
            <Button
              onClick={(event) => setAnchorEl(event.currentTarget)}
              endIcon={<KeyboardArrowDownIcon />}
              aria-haspopup="true"
              aria-expanded={Boolean(anchorEl)}
              sx={{
                ...navLinkSx(isServicesActive),
                p: 0,
                py: 0.5,
                minWidth: 0,
                borderRadius: 0,
                '&:hover': { color: BRAND_RED_TEXT, backgroundColor: 'transparent' },
              }}
            >
              Diensten
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              {NAV_SERVICES.map((service) => {
                const active = isActive(service.path)
                return (
                  <MenuItem
                    key={service.path}
                    component={NavLink}
                    to={service.path}
                    onClick={() => setAnchorEl(null)}
                    sx={{
                      color: active ? BRAND_RED_TEXT : 'text.primary',
                      fontWeight: active ? 700 : 400,
                      borderLeft: '3px solid',
                      borderColor: active ? BRAND_RED : 'transparent',
                    }}
                  >
                    {service.name}
                  </MenuItem>
                )
              })}
            </Menu>
            {NAV_PAGES.map((page) => (
              <Box
                key={page.path}
                component={NavLink}
                to={page.path}
                sx={navLinkSx(isActive(page.path))}
              >
                {page.name}
              </Box>
            ))}
            <Button
              variant="contained"
              size="small"
              component={NavLink}
              to={BOOKING_PATH}
            >
              Afspraak maken
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navigation
