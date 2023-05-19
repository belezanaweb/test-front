import { expect, test } from 'vitest'
import { render, screen } from '../../utils/test'
import { Card } from './Card'

const renderComponent = () => {
  return render(<Card>Children</Card>)
}

test('Should be able to render based on the children prop', () => {
  renderComponent()
  expect(screen.getByText('Children')).toBeDefined()
})
