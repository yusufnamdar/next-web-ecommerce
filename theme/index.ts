export const sharedTheme = {
  colors: {
    blue: '#1fb6ff',
    purple: '#7e5bef',
    pink: '#ff49db',
    orange: '#ff7849',
    green: '#13ce66',
    yellow: '#ffc82c',
    gray: '#8492a6',
    white: '#fff',
    teal: { 100: '#075985' },
  },
  space: [0, 4, 8, 12], //It's recommended to set 0 as the first value in the array.
  fonts: { ibm: "'IBM Plex Sans', sans-serif" },
  fontWeights: {
    light: '300',
    regular: '400',
    'semi-bold': '600',
    bold: '700',
    'extra-bold': '800',
  },
  borderRadius: {
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
    panel: '#ccfbf1', //teal-100
  },
}

export const darkTheme = {
  ...sharedTheme,
  colors: {
    ...sharedTheme.colors,
    body: '#0f172a', //slate-900
    text: '#fff', //white
    panel: '#115e59', //teal-800
  },
}
//background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
