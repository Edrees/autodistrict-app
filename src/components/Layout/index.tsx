import { Outlet } from 'react-router'
import { useTheme, Box, Container, Card } from '@mui/material'

import { Header } from '../Header'
import HeroImage from '../HeroImage'
import Footer from '../Footer'

export default function Layout() {
  return (
    <>
      <Header />
      <Box sx={{ overflow: 'hidden', position: 'relative' }}>
        <HeroImage />
      </Box>
      <Container
        fixed
        maxWidth="lg"
        disableGutters
        sx={{
          position: 'relative',
          margin: {
            xs: useTheme().spacing(0, 'auto', 5),
            sm: useTheme().spacing(0, 'auto', 5),
          },
        }}
      >
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}
