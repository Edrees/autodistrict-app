import * as React from 'react'
import { makeStyles } from '@mui/styles'
import {
  useTheme,
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  Toolbar,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import TopBar from './TopBar'
import logo from '../../assets/autodist-logo.png'
import SideBar from './SideBar'

interface PagesProps {
  name: string
  pageLink: string
}

const pages: PagesProps[] = [
  { name: 'Over ons', pageLink: 'over-ons' },
  { name: 'Service', pageLink: 'diensten' },
  { name: 'Contact', pageLink: 'contact' },
]

const useStyles = makeStyles(() => ({
  listItem: {
    borderBottom: 'none',
    '&:not(:last-child)': {
      borderBottom: `1px solid ${useTheme().palette.grey[200]}`,
    },
  },
}))

const Navigation = () => {
  const classes = useStyles()
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [drawerState, setDrawerState] = React.useState({
    top: false,
  })

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

  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   toggleDrawer('top', true)
  //   setAnchorElNav(event.currentTarget)
  // }

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null)
  // }

  const appLogo = (
    <Box sx={{ width: 150 }}>
      <Link href="/">
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
        color: useTheme().palette.primary.main,
      }}
    >
      <IconButton
        size="large"
        aria-label="account of current user"
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
          <ListItem className={classes.listItem}>{appLogo}</ListItem>
          {pages.map((page, index) => (
            <ListItem key={`mobile-menu-${index}`} className={classes.listItem}>
              <Link
                href={page.pageLink}
                key={index}
                // onClick={handleCloseNavMenu}
                sx={{
                  display: 'block',
                  textDecoration: 'none',
                }}
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
      <TopBar email="info@autodistrict.nl" phoneNumber="+31681483303" />
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
              <Link
                href={page.pageLink}
                key={`desktop-link-${index}`}
                // onClick={handleCloseNavMenu}
                sx={{
                  ml: 2,
                  display: 'block',
                  textDecoration: 'none',
                }}
              >
                {page.name}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Navigation
