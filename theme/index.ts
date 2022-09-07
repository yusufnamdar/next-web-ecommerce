export type ThemeKeys =
  | 'colors'
  | 'radii'
  | 'space'
  | 'fonts'
  | 'fontWeights'
  | 'breakpoints'

export const sharedTheme = {
  colors: {
    orange: '#ff7849',
    green: '#13ce66',
    yellow: '#ffc82c',
    white: '#fff',
    emerald: { 300: '#6ee7b7' },
    rose: { 300: '#fda4af', 400: '#fb7185' },
    teal: { 300: '#5eead4', 600: '#0d9488' },
    primary: {
      50: '#fffbeb',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#ea580c',
    },
    danger: { 300: '#fca5a5', 400: '#f87171' },
    gray: { 200: '#e5e7eb', 300: '#d1d5db', 400: '#6b7280' },
    slate: { 100: '#f1f5f9', 300: '#cbd5e1' },
    cyan: {
      1000: '#0B2833',
      900: '#164e63',
      500: '#0ea5e9',
      400: '#22d3ee',
      300: '#67e8f9',
    },
    fuschsia: { 300: '#f0abfc' },
  },
  space: [0, 4, 8, 12, 24], //It's recommended to set 0 as the first value in the array.
  fonts: {
    ibm: "'IBM Plex Sans', sans-serif",
    bahaianita: "'Bahianita', cursive",
  },
  fontWeights: {
    light: '300',
    regular: '400',
    'semi-bold': '600',
    bold: '700',
    'extra-bold': '800',
  },
  radii: {
    small: '2px',
    regular: '4px',
    medium: '6px',
    large: '8px',
  },
  breakpoints: {
    xs: '576px',
    sm: '768px',
    md: '1024px',
    lg: '1280px',
    xl: '1440px',
  },
}

export const lightTheme = {
  ...sharedTheme,
  colors: {
    ...sharedTheme.colors,
    body: '#f1f5f9', //slate-100
    text: '#000', //black
    panel: '#f9fafb', //gray-50
  },
}

export const darkTheme = {
  ...sharedTheme,
  colors: {
    ...sharedTheme.colors,
    body: '#0f172a', //slate-900
    text: '#f1f5f9', //slate-100
    panel: '#111827', //gray-900
  },
}
//background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
