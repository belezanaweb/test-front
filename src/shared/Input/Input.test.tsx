import { test } from 'vitest'
import { render } from '../../utils/test'
import { Input } from './Input'

const renderComponent = () => {
  return render(<Input />)
}

test('Should be able to render component', () => {
  renderComponent()
})


