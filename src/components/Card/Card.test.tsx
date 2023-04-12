import { screen } from '@testing-library/react'
import { render } from '../../utils/test-utils'

import { Card } from '.'

describe('Card component', () => {
  it('should render a card', () => {
    render(<Card>CardChildren</Card>)
    const card = screen.getByText('CardChildren')
    expect(card).toHaveStyle({ border: '1px solid #CCCCCC' })
  })
})
