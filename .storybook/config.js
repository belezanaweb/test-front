import React from 'react'
import { addDecorator, addParameters, configure } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withKnobs } from '@storybook/addon-knobs'
import { ThemeProvider } from 'emotion-theming'
import theme from '../src/theme'
// styles
import 'minireset.css/minireset.min.css'
import '../src/styles/global.css'
import '../src/styles/typography.css'

// viewports
const customViewports = {
  blz: {
    name: 'Beleza na Web mockup',
    styles: {
      width: '360px',
      height: '540px'
    }
  }
}

addParameters({
  viewport: {
    defaultViewport: 'blz',
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...customViewports
    }
  }
})

// background
addParameters({
  backgrounds: [{ name: 'default', value: '#eee', default: true }]
})

// knobs
addDecorator(withKnobs)

// theme
addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>)

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
