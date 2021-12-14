import { useTheme, Container, Card } from '@mui/material'
import { Header } from '../Header'
import HeroImage from '../HeroImage'
import Footer from '../Footer'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <>
      <Header />
      <HeroImage />
      <Container
        fixed
        maxWidth="lg"
        disableGutters
        sx={{
          position: 'relative',
          margin: {
            xs: useTheme().spacing(0, 'auto', 5),
            sm: useTheme().spacing(-5, 'auto', 5),
          },
        }}
      >
        <Card
          sx={{
            minHeight: useTheme().spacing(50),
            padding: useTheme().spacing(3),
            borderRadius: 0,
          }}
        >
          <Outlet />
        </Card>
      </Container>
      <Footer />
    </>
  )
}
