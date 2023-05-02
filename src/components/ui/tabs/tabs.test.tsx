import { render } from '@/test/utils'

import { Tabs } from '.'

describe('<Tabs />', () => {
  test('renders children components', () => {
    const { container } = render(
      <Tabs>
        <Tabs.List>Children</Tabs.List>
      </Tabs>
    )

    expect(container).toMatchInlineSnapshot(`
      <div>
        <nav
          class="flex"
        >
          <ul
            class="flex gap-6 border-b border-gray"
          >
            <li
              class="-mb-px flex"
            >
              Children
            </li>
          </ul>
        </nav>
      </div>
    `)
  })
})

describe('<Tabs.List />', () => {
  test('render with active state', () => {
    const { getByTestId } = render(
      <Tabs>
        <Tabs.List active data-testid="tabs-list">
          Children
        </Tabs.List>
      </Tabs>
    )

    expect(getByTestId('tabs-list')).toHaveClass('border-black', 'border-b-4')
  })

  test('render with custom props', () => {
    const { getByTestId } = render(
      <Tabs>
        <Tabs.List data-testid="tabs-list">Children</Tabs.List>
      </Tabs>
    )

    expect(getByTestId('tabs-list')).toBeInTheDocument()
  })
})
