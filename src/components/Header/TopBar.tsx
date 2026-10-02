import { Box, Container, Link, Typography } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
import PhoneIcon from '@mui/icons-material/Phone'

interface TopBarProps {
  email: string
  phoneNumber: string
}

const linkSx = {
  display: 'flex',
  alignItems: 'center',
  gap: 1,
  color: 'text.secondary',
  fontWeight: 500,
  fontSize: 14,
  '&:hover': { color: 'text.primary' },
  '& svg': { fontSize: 18 },
}

const TopBar = ({ email, phoneNumber }: TopBarProps) => {
  return (
    <Box
      sx={{
        backgroundColor: '#060708',
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 36,
        }}
      >
        <Link href={`mailto:${email}`} underline="none" sx={linkSx}>
          <MailIcon />
          <Typography
            component="span"
            sx={{ display: { xs: 'none', sm: 'inline' }, fontSize: 'inherit' }}
          >
            {email}
          </Typography>
        </Link>
        <Link href={`tel:${phoneNumber}`} underline="none" sx={linkSx}>
          <PhoneIcon />
          {phoneNumber}
        </Link>
      </Container>
    </Box>
  )
}

export default TopBar
