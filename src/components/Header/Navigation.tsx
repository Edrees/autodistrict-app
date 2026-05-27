import * as React from 'react'
import { Link } from 'react-router-dom'
import {
  useTheme,
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import TopBar from './TopBar'
import logo from '../../assets/auto-district-logo.png'

interface PagesProps {
  name: string
  pageLink: string
}

const pages: PagesProps[] = [
  { name: 'Over ons', pageLink: 'over-ons' },
  { name: 'Onderhoud', pageLink: 'onderhoud' },
  { name: 'Reparatie', pageLink: 'reparatie' },
  { name: 'Storingen', pageLink: 'storingen' },
  { name: 'DSG', pageLink: 'dsg' },
  { name: 'Airco', pageLink: 'airco' },
  { name: 'Bandenopslag', pageLink: 'bandenopslag' },
  { name: 'Contact', pageLink: 'contact' },
]

const Navigation = () => {
  const theme = useTheme()
  const [drawerState, setDrawerState] = React.useState({ top: false })

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

  const linkStyle = {
    color: 'initial',
    textDecoration: 'none',
    '&:hover': { textDecoration: 'underline' },
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
          {pages.map((page, index) => (
            <ListItem
              key={`mobile-menu-${index}`}
              sx={{ borderBottom: `1px solid ${theme.palette.grey[200]}` }}
            >
              <Link
                to={page.pageLink}
                key={index}
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
            }}
          >
            {pages.map((page, index) => (
              <Box sx={{ ml: 2 }} key={`desktop-menu-${index}`}>
                <Link
                  to={page.pageLink}
                  key={`desktop-link-${index}`}
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
  )
}

export default Navigation
