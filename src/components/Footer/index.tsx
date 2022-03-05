import { useEffect } from 'react'
import { makeStyles } from '@mui/styles'
import {
  useTheme,
  Box,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'

interface FooterLinkProps {
  text: string
  url: string
}

const footerLinks: FooterLinkProps[] = [
  {
    text: 'SKF Homepage',
    url: 'https://www.skf.com/be/nl',
  },
  {
    text: 'Continental Benelux',
    url: 'https://www.continental-industry.com/en/topnavi/company/location-profiles/benelux',
  },
  {
    text: 'REPXPERT',
    url: 'https://www.repxpert.nl/nl',
  },
]

const useStyles = makeStyles(() => ({
  footerRoot: {
    // position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    background: useTheme().palette.common.white,
  },
  footerText: {
    height: useTheme().spacing(5),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: useTheme().palette.primary.main,
    color: useTheme().palette.common.white,
    textAlign: 'center',
  },
  reviewWdigetLink: {
    margin: '0 auto',
    '& a': {
      border: 0,
    },
  },
}))

function Footer() {
  const classes = useStyles()

  useEffect(() => {
    const script = document.createElement('script')

    script.src = 'https://grwapi.net/widget.min.js'
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <Box className={classes.footerRoot}>
      <Container fixed maxWidth="lg" disableGutters>
        <Grid container py={2}>
          <Grid item xs={12} md={4}>
            <List dense>
              <ListItem sx={{ fontWeight: 'bold' }}>Links</ListItem>
              {footerLinks.map((item, index) => (
                <ListItem key={`footer-link-${index}`}>
                  <Link href={item.url}>
                    <ListItemText primary={item.text} />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} md={4}>
            <List dense>
              <ListItem
                sx={{ fontWeight: 'bold', alignItems: { sm: 'flex-end' } }}
              >
                Adres
              </ListItem>
              <ListItem>Auto District</ListItem>
              <ListItem>Jupiter 39-B</ListItem>
              <ListItem>2685 LV Poeldijk</ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className={classes.reviewWdigetLink}>
              <div
                className="review-widget_net"
                data-uuid="89c01f66-4b4a-4fc8-a8f8-efcc4bc3fbcc"
                data-template="10"
                data-filter=""
                data-lang="en"
                data-theme="light"
              >
                <a
                  href="https://www.review-widget.net/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://grwapi.net/assets/spinner/spin.svg"
                    title="Review Widget"
                    alt="review-widget.net"
                    loading="lazy"
                  />
                </a>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box className={classes.footerText}>
        All Rights Reserved. Auto District 2021
      </Box>
    </Box>
  )
}

export default Footer
