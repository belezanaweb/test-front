import styled from 'styled-components'

const theme = {
  light: {
    colors: {
      '--c-background': '#eee',
      '--c-base-contrast': '#212121',
      '--c-base-contrast-two': '#000',
      '--c-base': '#fff',
      '--c-one': '#CCC',
      '--c-two': '#E0E7EE',
      '--c-tree': '#E7E7E7',
      '--c-four': '#999',
      '--c-contrast-one': '#FF7800',
      '--c-contrast-two': '#FF6C00',
      '--c-contrast-tree': '#D45A00',
      '--c-contrast-hover': '#F30',
      '--c-contrast-focus': '#A43287'
    }
  },
  fontSizes: {
    small: '12px',
    medium: '13px',
    mediumLarge: '14px',
    large: '16px',
    extraLarge: '20px'
  }
}

const ThemeRoot = styled.div`
  background-color: ${theme.light.colors['--c-background']};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
`

const ThemeContainer = styled.div`
  display: flex;
  flex: 1;
  @media (min-width: 450px) {
    justify-content: center;
    padding: 30px;
  }
`

const ThemeContent = styled.div`
  padding: 12px;
  max-width: 450px;
  background-color: ${theme.light.colors['--c-background']};
  h1 {
    text-transform: uppercase;
    font-weight: bold;
    color: ${theme.light.colors['--c-four']};
    margin-left: 12px;
    margin-bottom: 8px;
    font-size: ${theme.fontSizes.mediumLarge};
  }

  @media (min-width: 450px) {
    border-radius: 3px;
    box-shadow: 1px 1px 10px 1px rgb(0 0 29 / 12%);
  }
`

export { theme, ThemeRoot, ThemeContainer, ThemeContent }
