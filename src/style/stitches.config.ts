import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      orange100: '#FF6C00',
      orange200: '#F30',
      orange300: '#D45A00',
      gray100: '#EEE',
      gray200: '#CCC',
      gray300: '#999',
      gray400: '#212122'
    },
    shadows: {
      defaultShadow: 'rgba(0,0,29,0.22)'
    }
  },
  media: {
    sm: '(max-width: 576px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 992px)',
    xl: '(max-width: 1200px)',
    xxl: '(max-width: 1400px)'
  },
  utils: {
    marginX: (value: String) => ({ marginLeft: value, marginRight: value }),
    marginY: (value: String) => ({ marginTop: value, marginBottom: value }),
    paddingX: (value: String) => ({ paddingLeft: value, paddingRight: value }),
    paddingY: (value: String) => ({ paddingTop: value, paddingBottom: value })
  }
})
