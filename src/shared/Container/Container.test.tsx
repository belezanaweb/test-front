import { expect, test } from 'vitest'
import { render, screen } from '../../utils/test'
import { Container } from './Container'

const renderComponent = () => {
  return render(<Container>Children</Container>)
}

test('Should be able to render based on the children prop', () => {
  renderComponent()
  expect(screen.getByText('Children')).toBeDefined()
})
