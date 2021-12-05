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
}))

function Footer() {
  const classes = useStyles()

  return (
    <Box className={classes.footerRoot}>
      <Container fixed maxWidth="lg">
        <Grid spacing={2} mb={2}>
          <Grid item xs={12} md={6}>
            <List dense>
              {footerLinks.map((item) => (
                <ListItem>
                  <Link href={item.url}>
                    <ListItemText primary={item.text} />
                  </Link>
                </ListItem>
              ))}
            </List>
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
