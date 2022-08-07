export const sharedTheme = {
  colors: {
    blue: '#1fb6ff',
    purple: '#7e5bef',
    pink: '#ff49db',
    orange: '#ff7849',
    green: '#13ce66',
    yellow: '#ffc82c',
    'gray-dark': '#273444',
    gray: '#8492a6',
    'gray-light': '#d3dce6',
  },
  space: { small: '12px', medium: '16px', large: '24px' },
  fontWeights: {
    light: '300',
    regular: '400',
    'semi-bold': '600',
    bold: '700',
    'extra-bold': '800',
  },
  fontSizes: {
    10: '10px',
    12: '12px',
    13: '13px',
    14: '14px',
    15: '15px',
    16: '16px',
    18: '18px',
    20: '20px',
    22: '22px',
    24: '24px',
    26: '26px',
    28: '28px',
    30: '30px',
    32: '32px',
    36: '36px',
    40: '40px',
    56: '56px',
    64: '64px',
  },
  borderRadius: {
    small: '2px',
    medium: '6px',
    large: '8px',
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
