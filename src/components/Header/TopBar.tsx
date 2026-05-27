import { useTheme, Box, Container, Link, Typography } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
import PhoneIcon from '@mui/icons-material/Phone'

interface TopBarProps {
  email: string
  phoneNumber: string
}

const TopBar = ({ email, phoneNumber }: TopBarProps) => {
  const theme = useTheme()

  const linkSx = {
    color: theme.palette.common.white,
    ml: 1,
    display: 'flex',
    alignItems: 'center',
    '& svg': { mr: 1 },
  }

  return (
    <Box sx={{ background: theme.palette.primary.main }}>
      <Container
        fixed
        maxWidth="lg"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: theme.spacing(5),
        }}
      >
        <Link href={`mailto:${email}`} sx={linkSx}>
          <MailIcon />
          <Typography sx={{ display: { xs: 'none', sm: 'inline-block' } }}>
            {email}
          </Typography>
        </Link>
        <Link href={`tel:${phoneNumber}`} sx={linkSx}>
          <PhoneIcon />
          {phoneNumber}
        </Link>
      </Container>
    </Box>
  )
}

export default TopBar
