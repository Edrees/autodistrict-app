import { makeStyles } from '@mui/styles'
import { useTheme, Box, Container, Link, Typography } from '@mui/material'
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
    '&&': {
      color: useTheme().palette.common.white,
      marginLeft: useTheme().spacing(1),
      display: 'flex',
      alignItems: 'center',

      '& svg': {
        marginRight: useTheme().spacing(1),
      },
    },
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
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: useTheme().spacing(5),
        }}
      >
        <Link href={`mailto:${email}`} className={classes.topBarLink}>
          <MailIcon />
          <Typography
            sx={{
              display: { xs: 'none', sm: 'inline-block' },
            }}
          >
            {email}
          </Typography>
        </Link>
        <Link href={`tel:${phoneNumber}`} className={classes.topBarLink}>
          <PhoneIcon />
          {phoneNumber}
        </Link>
      </Container>
    </Box>
  )
}

export default TopBar
