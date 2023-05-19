import { expect } from 'vitest'
import { render, screen } from '../../utils/test'
import { Tabs } from './Tabs'

const renderComponent = () => {
  return render(<Tabs items={[]} />)
}

test('Should be able to render component', () => {
  renderComponent()
  // expect(screen.getByText('Children')).toBeDefined()
})


