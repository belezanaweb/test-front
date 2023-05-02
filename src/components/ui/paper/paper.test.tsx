import { render } from '@/test/utils'

import { Paper } from '.'

test('renders children components', () => {
  const { container } = render(
    <Paper>
      <p>Children</p>
    </Paper>
  )

  expect(container).toMatchInlineSnapshot(`
    <div>
      <div
        class="rounded border border-gray-light bg-white p-2 px-3 mx-2"
      >
        <p>
          Children
        </p>
      </div>
    </div>
  `)
})

test('renders custom props', () => {
  const { getByTestId } = render(
    <Paper data-testid="paper">
      <p>Children</p>
    </Paper>
  )

  expect(getByTestId('paper')).toBeInTheDocument()
})

test('renders with title', () => {
  const { getByRole } = render(
    <Paper title="Title">
      <p>Children</p>
    </Paper>
  )

  expect(getByRole('heading', { level: 2 })).toBeInTheDocument()
  expect(getByRole('heading', { level: 2 })).toHaveTextContent('Title')
})
