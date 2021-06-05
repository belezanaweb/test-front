import React from 'react'
import { render } from '../../utils/test-utils'
import Button from './Button'

describe('Button', () => {
  test('should render without errors', () => {
    const { container } = render(<Button />)
    expect(container).toBeInTheDocument()
  })

  test('should component render children', () => {
    const { getByTestId } = render(
      <Button>
        <span data-testid="test-children">test element</span>
      </Button>
    )

    const checkElement = getByTestId('test-children')

    expect(checkElement).toBeInTheDocument()
    expect(checkElement.innerHTML).toBe('test element')
  })

  test('should match with snapshot', () => {
    const { container } = render(<Button>Button Child</Button>)
    expect(container).toMatchSnapshot()
  })
})
