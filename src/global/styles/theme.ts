import { DefaultTheme } from 'styled-components'

const defaultTheme: DefaultTheme = {
  borderRadius: '3px',

  fonts: {
    header: '13px',
    title: '14px',
    text: '13px',
    button: '20px'
  },

  colors: {
    primary: '#212122',
    secondary: '#999',
    accent: '#FF6C00',
    darkAccent: '#D45A00',
    disabled: '#CCC',
    background: '#EEE',
    white: '#FFF'
  },

  shadows: {
    paper: '1px 1px 5px 0 rgba(0, 0, 29, 0.22)'
  }
}

export { defaultTheme }
