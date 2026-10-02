import type { SvgIconComponent } from '@mui/icons-material'
import KeyIcon from '@mui/icons-material/Key'
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined'
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined'
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import AirOutlinedIcon from '@mui/icons-material/AirOutlined'
import TripOriginOutlinedIcon from '@mui/icons-material/TripOriginOutlined'

export interface ServiceCard {
  name: string
  desc: string
  Icon: SvgIconComponent
  path: string
}

// Service tiles on the Home and Diensten pages.
export const SERVICE_CARDS: ServiceCard[] = [
  {
    name: 'Onderhoud',
    desc: 'APK, olie & filters',
    Icon: BuildOutlinedIcon,
    path: '/diensten/onderhoud/',
  },
  {
    name: 'Reparatie',
    desc: 'Motor & techniek',
    Icon: HandymanOutlinedIcon,
    path: '/diensten/reparatie/',
  },
  {
    name: 'DSG',
    desc: 'Versnellingsbak',
    Icon: SettingsOutlinedIcon,
    path: '/diensten/dsg/',
  },
  {
    name: 'Bandenopslag',
    desc: 'Opslag & wisselen',
    Icon: TripOriginOutlinedIcon,
    path: '/diensten/bandenopslag/',
  },
  {
    name: 'Airco',
    desc: 'Service & recharge',
    Icon: AirOutlinedIcon,
    path: '/diensten/airco/',
  },
  {
    name: 'Autosleutel',
    desc: 'Sleutels inleren',
    Icon: KeyIcon,
    path: '/diensten/autosleutels-inleren/',
  },
  {
    name: 'Storingen',
    desc: 'Diagnose & herstel',
    Icon: WarningAmberOutlinedIcon,
    path: '/diensten/storingen/',
  },
]

export interface NavPage {
  name: string
  path: string
}

// Diensten dropdown in the header, in the existing (alphabetical) order.
export const NAV_SERVICES: NavPage[] = [
  { name: 'Airco service', path: '/diensten/airco/' },
  { name: 'Autosleutels inleren', path: '/diensten/autosleutels-inleren/' },
  { name: 'Bandenopslag', path: '/diensten/bandenopslag/' },
  { name: 'DSG', path: '/diensten/dsg/' },
  { name: 'Onderhoud', path: '/diensten/onderhoud/' },
  { name: 'Reparatie', path: '/diensten/reparatie/' },
  { name: 'Storingen', path: '/diensten/storingen/' },
]

export const NAV_PAGES: NavPage[] = [
  { name: 'Over ons', path: '/over-ons/' },
  { name: 'Contact', path: '/contact/' },
]
