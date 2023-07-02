import { screen, render, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../../../theme'
import NavItem from '.'
import { describe, expect, it, vi } from 'vitest'

const onClick = vi.fn()

describe('<NavItem />', () => {
  it('should render successfully', () => {
    render(
      <ThemeProvider theme={theme}>
        <NavItem onClick={onClick} selected={false}>
          item
        </NavItem>
      </ThemeProvider>
    )

    expect(screen.getByText('item')).toBeInTheDocument()
  })

  it('should call onClick function successfully', () => {
    render(
      <ThemeProvider theme={theme}>
        <NavItem onClick={onClick} selected={false}>
          item
        </NavItem>
      </ThemeProvider>
    )
    fireEvent.click(screen.getByText('item'))
    expect(onClick).toHaveBeenCalled()
  })
})
