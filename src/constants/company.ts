export const FOUNDED_YEAR = 2009

export const getYearsActive = (): number =>
  new Date().getFullYear() - FOUNDED_YEAR

export const CONTACT = {
  email: 'info@autodistrict.nl',
  phoneDisplay: '+31654977850',
  phoneHref: 'tel:+31654977850',
  mapsHref: 'https://g.page/autodistrict',
  addressLines: ['Auto District', 'Jupiter 39-B', '2685 LV Poeldijk'],
  addressShort: 'Jupiter 39-B, 2685 LV Poeldijk',
} as const

// Booking CTA is still an owner decision (WhatsApp / mailto / Calendar /
// Calendly). Every "Afspraak maken" button uses this path, so switching is a
// one-line change.
export const BOOKING_PATH = '/contact/'

export const RATING = { score: '5,0' } as const
