import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import theme from '../../theme'
import Button from './'

describe('<Button />', () => {
  it('should render Button component', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>button</Button>
      </ThemeProvider>
    )

    expect(screen.getByText(/button/i)).toBeInTheDocument()
  })

  it('should trigger the callback function', () => {
    const handleClick = jest.fn()
    render(
      <ThemeProvider theme={theme}>
        <Button onClick={handleClick}>button</Button>
      </ThemeProvider>
    )

    fireEvent.click(screen.getByText(/button/i))

    expect(handleClick).toHaveBeenCalled()
  })

  it('should not trigger the callback function when disabled', () => {
    const handleClick = jest.fn()
    render(
      <ThemeProvider theme={theme}>
        <Button disabled onClick={handleClick}>
          button
        </Button>
      </ThemeProvider>
    )

    fireEvent.click(screen.getByText(/button/i))

    expect(handleClick).not.toBeCalled()
  })

  it('should match a snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Button>button</Button>
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
