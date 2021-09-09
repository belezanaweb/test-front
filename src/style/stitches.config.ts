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
      gray150: '#E7E7E7',
      gray200: '#CCC',
      gray300: '#999',
      gray400: '#212122',
      purple100: '#A43287'
    },
    shadows: {
      defaultShadow: 'rgba(0,0,29,0.22)'
    }
  },
  media: {
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1400px)'
  },
  utils: {
    marginX: (value: String) => ({ marginLeft: value, marginRight: value }),
    marginY: (value: String) => ({ marginTop: value, marginBottom: value }),
    paddingX: (value: String) => ({ paddingLeft: value, paddingRight: value }),
    paddingY: (value: String) => ({ paddingTop: value, paddingBottom: value })
  }
})
