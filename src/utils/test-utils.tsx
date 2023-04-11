import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../styles/theme'

type RenderThemeProps = Omit<RenderOptions, 'queries'>

const renderTheme = (children: ReactElement, { ...renderOptions }: RenderThemeProps = {}) =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>, renderOptions)

export * from '@testing-library/react'
export { renderTheme as render }
