import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Box, Link } from '@mui/material'

import { Header } from '../Header'
import Footer from '../Footer'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function Layout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <ScrollToTop />
      <Link
        href="#main"
        underline="none"
        sx={{
          position: 'absolute',
          left: 8,
          top: -60,
          zIndex: 2000,
          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
          px: 2,
          py: 1,
          borderRadius: 1,
          '&:focus': { top: 8 },
        }}
      >
        Naar de inhoud
      </Link>
      <Header />
      <Box component="main" id="main" sx={{ flex: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  )
}
