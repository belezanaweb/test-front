const theme = {
  colors: {
    primary: '#FF6C00',
    primaryLight: '#FF7800',
    primaryDark: '#D45A00',
    pink: '#A43287',
    red: '#F30',
    gray: '#CCC',
    grayLight: '#EEE',
    grayIce: '#E0E7EE',
    grayWhite: '#E7E7E7',
    grayMedium: '#999999',
    grayDark: '#212122',
    white: '#FFF'
  },

  media: {
    xs: '@media (max-width: 480px)',
    sm: '@media (max-width: 768px)',
    md: '@media (max-width: 1024px)',
    lg: '@media (max-width: 1280px)',
    xl: '@media (max-width: 1600px)',
    xxl: '@media (max-width: 1920px)',
    breakpoints: {
      xs: 480,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 1600,
      xxl: 1920
    },
    mobile: '@media only screen and (max-width: 480px)',
    tablet: '@media (min-width: 480px) and (max-width: 768px)',
    desktop: '@media (min-width: 768px)'
  },
  spacing: {
    xss: '4px',
    xs: '8px',
    sm: '16px',
    md: '24px',
    lg: '32px',
    xl: '40px',
    xxl: '64px'
  },
  size: {
    1: '12px',
    2: '13px',
    3: '14px',
    4: '16px',
    5: '20px'
  },
  breakpoints: ['480px', '768px', '1024px', '1280px', '1600px', '1920px'],
  effects: {
    cardShadow: '0px 2px 3px rgba(0, 0, 0, 0.12)',
    dialogShadow: '0px 2px 17px rgba(0, 0, 0, 0.167395)',
    buttonClick: '0px 3px 3px rgba(0, 0, 0, 0.08)',
    buttonHover: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    buttonFocus: 'solid 2px #D7E5F4',
    contextMenu: '-2px 0px 8px rgba(0, 0, 0, 0.12)'
  }
}

export default theme
