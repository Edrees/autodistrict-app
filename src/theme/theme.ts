import { createTheme } from '@mui/material/styles'

export const DISPLAY_FONT =
  '"Big Shoulders Display", "Arial Narrow", sans-serif'
const BODY_FONT =
  '"Instrument Sans", system-ui, -apple-system, "Segoe UI", sans-serif'

// Brand red, taken from the logo: fills, borders, icons and large text.
export const BRAND_RED = '#e80000'
// Lighter red for small text on the dark background (WCAG AA contrast).
export const BRAND_RED_TEXT = '#ff4d4d'

const BACKGROUND = '#0a0b0d'
const PAPER = '#121317'
const TEXT_PRIMARY = '#f2f0eb'
const TEXT_SECONDARY = '#c4c4c4'
const DIVIDER = 'rgba(255,255,255,0.1)'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: BRAND_RED,
      light: BRAND_RED_TEXT,
      contrastText: '#ffffff',
    },
    secondary: {
      main: BRAND_RED,
      light: BRAND_RED_TEXT,
      contrastText: '#ffffff',
    },
    background: { default: BACKGROUND, paper: PAPER },
    text: { primary: TEXT_PRIMARY, secondary: TEXT_SECONDARY },
    divider: DIVIDER,
  },
  shape: { borderRadius: 4 },
  typography: {
    fontFamily: BODY_FONT,
    h1: {
      fontFamily: DISPLAY_FONT,
      fontWeight: 900,
      fontSize: 'clamp(2.75rem, 6.5vw, 5rem)',
      lineHeight: 0.95,
      letterSpacing: '-0.01em',
    },
    h2: {
      fontFamily: DISPLAY_FONT,
      fontWeight: 800,
      fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
      lineHeight: 1,
    },
    h3: {
      fontFamily: DISPLAY_FONT,
      fontWeight: 800,
      fontSize: 'clamp(1.6rem, 3vw, 2rem)',
      lineHeight: 1.05,
    },
    h4: {
      fontFamily: DISPLAY_FONT,
      fontWeight: 800,
      fontSize: '1.4rem',
      lineHeight: 1.1,
    },
    body1: { fontSize: '1.0625rem', lineHeight: 1.65 },
    body2: { fontSize: '0.95rem', lineHeight: 1.55 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth', scrollPaddingTop: 120 },
        '@media (prefers-reduced-motion: reduce)': {
          html: { scrollBehavior: 'auto' },
        },
        // Bold phrases in body copy stand out against the muted text colour.
        strong: { color: TEXT_PRIMARY, fontWeight: 700 },
        'a:focus-visible, button:focus-visible': {
          outline: `2px solid ${BRAND_RED_TEXT}`,
          outlineOffset: 3,
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700,
          fontSize: '1rem',
          padding: '10px 20px',
        },
      },
    },
    MuiLink: {
      defaultProps: { underline: 'hover' },
      styleOverrides: {
        root: { color: BRAND_RED_TEXT, fontWeight: 600 },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
      },
    },
    MuiMenu: {
      defaultProps: {
        slotProps: {
          paper: {
            sx: {
              mt: 1,
              backgroundColor: PAPER,
              border: `1px solid ${DIVIDER}`,
              minWidth: 220,
            },
          },
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        separator: { color: TEXT_SECONDARY },
      },
    },
  },
})
