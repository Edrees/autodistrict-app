import { Outlet, useLocation, Link as RouterLink } from 'react-router'
import {
  useTheme,
  Box,
  Container,
  Breadcrumbs,
  Link,
  Typography,
} from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

import { Header } from '../Header'
import HeroImage from '../HeroImage'
import Footer from '../Footer'

const routeLabels: Record<string, string> = {
  'over-ons': 'Over ons',
  onderhoud: 'Onderhoud',
  reparatie: 'Reparatie',
  storingen: 'Storingen',
  dsg: 'DSG',
  airco: 'Airco',
  bandenopslag: 'Bandenopslag',
  'autosleutels-inleren': 'Autosleutels inleren',
  contact: 'Contact',
}

function BreadcrumbNav() {
  const location = useLocation()
  const segments = location.pathname
    .replace(/^\/|\/$/g, '')
    .split('/')
    .filter(Boolean)

  if (segments.length === 0) return null

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    ...segments.map((segment, index) => ({
      label: routeLabels[segment] ?? segment,
      path: '/' + segments.slice(0, index + 1).join('/') + '/',
    })),
  ]

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: `https://autodistrict.nl${crumb.path}`,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <Box sx={{ py: 1, px: 0 }}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
          {breadcrumbs.map((crumb, index) =>
            index < breadcrumbs.length - 1 ? (
              <Link
                key={crumb.path}
                component={RouterLink}
                to={crumb.path}
                sx={{
                  textDecoration: 'none',
                  fontSize: 16,
                  color: 'text.secondary',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                {crumb.label}
              </Link>
            ) : (
              <Typography
                key={crumb.path}
                sx={{ fontSize: 16, color: 'text.primary' }}
              >
                {crumb.label}
              </Typography>
            )
          )}
        </Breadcrumbs>
      </Box>
    </>
  )
}

export default function Layout() {
  const theme = useTheme()

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
            xs: theme.spacing(0, 'auto', 5),
            sm: theme.spacing(0, 'auto', 4),
          },
        }}
      >
        <BreadcrumbNav />
        <Outlet />
      </Container>
      <Footer />
    </Box>
  )
}
