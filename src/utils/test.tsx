import { PropsWithChildren } from 'react'
import { render } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import { theme } from '../styles'

const AllProviders = ({ children }: PropsWithChildren) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

const customRender = (ui: any, options?: any) => render(ui, { wrapper: AllProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }