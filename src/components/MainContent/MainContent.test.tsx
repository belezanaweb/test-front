import { screen, render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import MainContent from '.'
import { describe, expect, it } from 'vitest'
import theme from '../../theme'

describe('<MainContent />', () => {
  it('should render successfully', () => {
    render(
      <ThemeProvider theme={theme}>
        <MainContent>content</MainContent>
      </ThemeProvider>
    )

    expect(screen.getByText('content')).toBeInTheDocument()
  })

  it('should render with title successfully', () => {
    render(
      <ThemeProvider theme={theme}>
        <MainContent title="title">content</MainContent>
      </ThemeProvider>
    )

    expect(screen.getByText('content')).toBeInTheDocument()
    expect(screen.getByText('title')).toBeInTheDocument()
  })
})
