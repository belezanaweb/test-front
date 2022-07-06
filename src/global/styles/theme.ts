import { DefaultTheme } from 'styled-components'

const defaultTheme: DefaultTheme = {
  borderRadius: '3px',

  fonts: {
    label: '12px',
    header: '13px',
    text: '13px',
    title: '14px',
    highlightText: '14px',
    input: '16px',
    button: '20px'
  },

  colors: {
    primary: '#212122',
    secondary: '#999',
    accent: '#FF6C00',
    darkAccent: '#D45A00',
    ultraLightGray: '#E0E7EE',
    lightGray: '#CCC',
    mediumGray: '#E7E7E7',
    gray: '#EEE',
    black: '#212121',
    white: '#FFF',
    purple: '#A43287',
    red: '#F30'
  },

  shadows: {
    paper: '1px 1px 5px 0 rgba(0, 0, 29, 0.22)'
  }
}

export { defaultTheme }
