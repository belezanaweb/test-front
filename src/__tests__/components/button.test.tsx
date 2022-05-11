import React from 'react'
import { render, screen } from '../../util/test-utils'
import Button from '../../components/Button'

describe('Button Component', () => {
  it('should be able to render a button', () => {
    render(<Button>Buy now</Button>)

    expect(screen.getByRole('button', { name: /Buy now/i })).toBeInTheDocument()
  })

  it('should render a disabled button', () => {
    render(<Button disabled>Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      cursor: 'not-allowed'
    })
  })

  it('should render button as a link', () => {
    render(
      <Button as="a" href="/link">
        Buy now
      </Button>
    )

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
