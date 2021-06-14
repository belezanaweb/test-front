const screenSize = {
  huge: '1440px',
  large: '992px',
  medium: '768px',
  small: '450px'
}

const device = {
  mobile: `(min-width: ${screenSize.small})`,
  tablet: `(min-width: ${screenSize.medium})`,
  desktop: `(min-width: ${screenSize.large})`,
  desktopLarge: `(min-width: ${screenSize.huge})`
}

export { device, screenSize }
