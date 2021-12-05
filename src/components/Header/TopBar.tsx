import { makeStyles } from '@mui/styles'
import { useTheme, Box, Container, Link } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
import PhoneIcon from '@mui/icons-material/Phone'

interface TopBarProps {
  email: string
  phoneNumber: string
}

const useStyles = makeStyles(() => ({
  topBar: {
    background: useTheme().palette.primary.main,
  },
  topBarLink: {
    color: useTheme().palette.common.white,
    marginLeft: useTheme().spacing(1),
  },
}))

const TopBar = ({ email, phoneNumber }: TopBarProps) => {
  const classes = useStyles()

  return (
    <Box className={classes.topBar}>
      <Container
        fixed
        maxWidth="lg"
        sx={{
          // display: { xs: 'none', md: 'flex' },
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: useTheme().spacing(5),
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <MailIcon />
          <Link
            href={`mailto:${email}`}
            className={classes.topBarLink}
            sx={{
              display: { xs: 'none', sm: 'block' },
            }}
          >
            {email}
          </Link>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <PhoneIcon />
          <Link href={`tel:${phoneNumber}`} className={classes.topBarLink}>
            {phoneNumber}
          </Link>
        </Box>
      </Container>
    </Box>
  )
}

export default TopBar
