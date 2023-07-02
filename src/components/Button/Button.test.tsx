import { screen, render, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Button from '.'
import { describe, expect, it, vi } from 'vitest'
import theme from '../../theme'

const onClick = vi.fn()

describe('<Button />', () => {
  it('should render successfully', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>button</Button>
      </ThemeProvider>
    )

    expect(screen.getByText('button')).toBeInTheDocument()
  })

  it('should call onClick function successfully', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button onClick={onClick}>button</Button>
      </ThemeProvider>
    )

    fireEvent.click(screen.getByText('button'))
    expect(onClick).toHaveBeenCalled()
  })
})
