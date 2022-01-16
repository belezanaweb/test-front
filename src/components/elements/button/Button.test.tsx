import { fireEvent } from '@testing-library/react'
import React from 'react'

import { renderWithThemeProvider } from '../../../utils/test.utils'

import Button from './Button'

const onClick = jest.fn()

describe('Button', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render without crash', () => {
    const id = 'button'

    const { getByTestId } = renderWithThemeProvider(<Button data-testid={id}>Text Button!</Button>)

    const button = getByTestId(id)

    expect(button).toBeInTheDocument()
  })

  it('should call onClick when clicked', () => {
    const id = 'button'

    const { getByTestId } = renderWithThemeProvider(
      <Button data-testid={id} onClick={onClick}>
        Text Button!
      </Button>
    )

    const button = getByTestId(id)

    fireEvent.click(button)

    expect(onClick).toHaveBeenCalled()
  })

  it('should not call onClick when is disabled', () => {
    const id = 'button'

    const { getByTestId } = renderWithThemeProvider(
      <Button data-testid={id} onClick={onClick} disabled>
        Text Button!
      </Button>
    )

    const button = getByTestId(id)

    fireEvent.click(button)

    expect(onClick).not.toHaveBeenCalled()
  })
})
