import { expect, test } from 'vitest'
import { render, screen } from '../../utils/test'
import { Button } from './Button'

const renderComponent = () => {
  return render(<Button onClick={console.log}>Children</Button>)
}

test('Should be able to render based on the children prop', () => {
  renderComponent()
  expect(screen.getByText('Children')).toBeDefined()
})
