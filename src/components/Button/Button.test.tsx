import { screen } from '@testing-library/react'
import { render } from '../../utils/test-utils'

import { Button } from '.'

describe('Button component', () => {
  it('should render normal button', () => {
    render(<Button>Test</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveStyle({ backgroundColor: '#000000' })
  })

  it('should render a button with primary styles', async () => {
    render(<Button variant="primary">Test</Button>)
    const primaryButton = screen.getByRole('button')

    expect(primaryButton).toHaveStyle({ backgroundColor: '#9222DC' })
  })
})
