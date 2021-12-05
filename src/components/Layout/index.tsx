import { useTheme, Container, Card } from '@mui/material'
import { Header } from '../Header'
import HeroImage from '../HeroImage'
import Footer from '../Footer'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
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
          margin: useTheme().spacing(-5, 'auto', 5),
        }}
      >
        <Card
          sx={{
            minHeight: useTheme().spacing(50),
            padding: useTheme().spacing(3),
          }}
        >
          {children}
        </Card>
      </Container>
      <Footer />
    </>
  )
}
