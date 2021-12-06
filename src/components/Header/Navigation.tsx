import * as React from 'react'
import {
  useTheme,
  AppBar,
  Box,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import TopBar from './TopBar'
import logo from '../../assets/autodist-logo.png'

interface PagesProps {
  name: string
  pageLink: string
}

const pages: PagesProps[] = [
  { name: 'Over ons', pageLink: 'over-ons' },
  { name: 'Service', pageLink: 'diensten' },
  { name: 'Contact', pageLink: 'contact' },
]

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position="sticky">
      <TopBar email="info@autodistrict.nl" phoneNumber="+31681483303" />
      <Container fixed maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ width: 150 }}>
            <Link href="/">
              <img alt="Auto District" src={logo} width="100%" />
            </Link>
          </Box>
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
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  key={`menu-item-${index}`}
                  onClick={handleCloseNavMenu}
                >
                  <Link
                    href={page.pageLink}
                    key={index}
                    onClick={handleCloseNavMenu}
                    sx={{
                      display: 'block',
                      textDecoration: 'none',
                    }}
                  >
                    {page.name}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
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
                key={`mobile-link-${index}`}
                onClick={handleCloseNavMenu}
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
