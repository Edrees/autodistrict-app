export const FOUNDED_YEAR = 2009

export const getYearsActive = (): number =>
  new Date().getFullYear() - FOUNDED_YEAR
