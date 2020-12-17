import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ThemeProvider } from 'styled-components';
import { StoryContext, StoryGetter, StoryWrapper } from '@storybook/addons';
import { GlobalStyle } from '../src/shared/styles/global';
import globalTheme from '../src/shared/styles/theme';

const globals = {
  colors: {
    dark: '#333',
    light: '#fff'
  },
  ...globalTheme,
}

export const darkTheme = {
  name: 'dark',
  background: globals.colors.black,
  ...globals,
}

export const lightTheme = {
  name: 'light',
  background: globals.colors.white,
  ...globals,
}

const getTheme = (theme) => {
  if (theme === 'dark') {
    return darkTheme;
  } else {
    return lightTheme;
  }
}

export const globalTypes = {
  theme: {
    name: 'Tema',
    description: 'Tema global para os componentes',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'dark', title: 'dark', icon: 'circle' },
        { value: 'light', title: 'light' }
      ]
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: globals.colors.light,
      },
      {
        name: 'dark',
        value: globals.colors.dark,
      }
    ]
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone5',
  }
}

const withThemeProvider = (Story,context) => {
  const theme = getTheme(context.globals.theme);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story {...context} />
    </ThemeProvider>
  )
}

export const decorators = [withThemeProvider];
