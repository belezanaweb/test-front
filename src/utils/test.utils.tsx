import { render } from '@testing-library/react'
import React, { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../styles/GlobalStyles'
import Theme from '../styles/Theme'

export function renderWithThemeProvider(el: ReactElement) {
  return render(
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      {el}
    </ThemeProvider>
  )
}
