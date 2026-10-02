import type { ReactNode } from 'react'
import { useLocation, Link as RouterLink } from 'react-router-dom'
import { Box, Breadcrumbs, Container, Link, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import headerImage from '../../assets/hpHeroImage1.jpeg'

const routeLabels: Record<string, string> = {
  'over-ons': 'Over ons',
  diensten: 'Diensten',
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
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        sx={{ mb: 2 }}
      >
        {breadcrumbs.map((crumb, index) =>
          index < breadcrumbs.length - 1 ? (
            <Link
              key={crumb.path}
              component={RouterLink}
              to={crumb.path}
              sx={{
                fontSize: 16,
                fontWeight: 500,
                color: 'text.secondary',
                '&:hover': { color: 'primary.light' },
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
    </>
  )
}

/* Dark band at the top of every page except Home: breadcrumbs + the page H1. */
export default function PageHeader({
  title,
  intro,
}: {
  title: ReactNode
  intro?: ReactNode
}) {
  return (
    <Box
      sx={{
        py: { xs: 5, md: 7 },
        backgroundColor: 'background.default',
        backgroundImage: `linear-gradient(90deg, rgba(10,11,13,0.97) 30%, rgba(10,11,13,0.8) 100%), url(${headerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <BreadcrumbNav />
        <Typography
          variant="h1"
          component="h1"
          sx={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', maxWidth: 900 }}
        >
          {title}
        </Typography>
        {intro && (
          <Typography
            sx={{
              mt: 2,
              maxWidth: 680,
              fontSize: '1.15rem',
              color: 'text.secondary',
            }}
          >
            {intro}
          </Typography>
        )}
      </Container>
    </Box>
  )
}
