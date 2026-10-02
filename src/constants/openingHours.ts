// Opening hours of the garage, in Dutch time (Europe/Amsterdam).
// Index matches Date.getDay(): 0 = zondag. `null` = closed all day.
export interface OpeningDay {
  dag: string
  open: string | null
  close: string | null
}

export const OPENING_HOURS: OpeningDay[] = [
  { dag: 'Zondag', open: null, close: null },
  { dag: 'Maandag', open: '08:00', close: '17:00' },
  { dag: 'Dinsdag', open: '08:00', close: '17:00' },
  { dag: 'Woensdag', open: '08:00', close: '17:00' },
  { dag: 'Donderdag', open: '08:00', close: '17:00' },
  { dag: 'Vrijdag', open: '08:00', close: '17:00' },
  { dag: 'Zaterdag', open: '08:30', close: '13:00' },
]

const GARAGE_TIME_ZONE = 'Europe/Amsterdam'

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const toMinutes = (time: string): number => {
  const [hours, minutes] = time.split(':').map(Number)
  return hours * 60 + minutes
}

/* Day and minutes-since-midnight in the garage's time zone, so a visitor
   abroad sees the garage's real state, not one based on their own clock. */
export function getGarageNow(date: Date = new Date()): {
  dayIndex: number
  minutes: number
} {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: GARAGE_TIME_ZONE,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date)

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? ''

  return {
    dayIndex: WEEKDAYS.indexOf(get('weekday')),
    minutes: Number(get('hour')) * 60 + Number(get('minute')),
  }
}

export interface OpenStatus {
  isOpen: boolean
  /* Short explanation, e.g. "sluit om 17:00" or "opent maandag om 08:00". */
  detail: string
}

export function getOpenStatus(date: Date = new Date()): OpenStatus {
  const { dayIndex, minutes } = getGarageNow(date)
  const today = OPENING_HOURS[dayIndex]

  if (today.open && today.close) {
    const opens = toMinutes(today.open)
    const closes = toMinutes(today.close)
    if (minutes >= opens && minutes < closes) {
      return { isOpen: true, detail: `sluit om ${today.close}` }
    }
    if (minutes < opens) {
      return { isOpen: false, detail: `opent vandaag om ${today.open}` }
    }
  }

  // Find the next day with opening hours.
  for (let offset = 1; offset <= 7; offset++) {
    const next = OPENING_HOURS[(dayIndex + offset) % 7]
    if (next.open) {
      const when = offset === 1 ? 'morgen' : next.dag.toLowerCase()
      return { isOpen: false, detail: `opent ${when} om ${next.open}` }
    }
  }

  return { isOpen: false, detail: '' }
}
