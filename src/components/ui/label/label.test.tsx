import { render } from '@/test/utils'

import { Label } from '.'

test('renders default state', () => {
  const { container } = render(<Label>children</Label>)

  expect(container).toMatchInlineSnapshot(`
    <div>
      <label
        class="mb-[5px] block text-sm font-medium text-gray-dark"
      >
        children
      </label>
    </div>
  `)
})

test('render custom props', () => {
  const { getByLabelText } = render(<Label aria-label="Label for some input">children</Label>)

  expect(getByLabelText(/Label for some input/i)).toBeInTheDocument()
})
