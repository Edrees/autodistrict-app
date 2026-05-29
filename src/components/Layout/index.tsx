import { Outlet } from 'react-router'
import { useTheme, Box, Container, Card } from '@mui/material'

import { Header } from '../Header'
import HeroImage from '../HeroImage'
import Footer from '../Footer'

export default function Layout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box sx={{ overflow: 'hidden' }}>
        <HeroImage />
      </Box>
      <Container
        fixed
        maxWidth="lg"
        disableGutters
        sx={{
          flex: 1,
          position: 'relative',
          margin: {
            xs: useTheme().spacing(0, 'auto', 5),
            sm: useTheme().spacing(0, 'auto', 4),
          },
        }}
      >
        <Outlet />
      </Container>
      <Footer />
    </Box>
  )
}
