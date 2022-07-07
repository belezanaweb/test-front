import React from 'react'
import { render } from '../../../test-utils'
import { Header, HeaderProps } from './Header'

const headerItems = [
  {
    label: 'sacola'
  },
  {
    label: 'pagamento'
  },
  {
    label: 'confirmação'
  }
]

const renderComponent = ({ items = [] }: HeaderProps) => render(<Header items={items} />)

describe('Header', () => {
  test('renders correctly', () => {
    const { getByText, getByRole } = renderComponent({ items: headerItems })
    getByRole('navigation')
    getByText(/sacola/i)
    getByText(/pagamento/i)
    getByText(/confirmação/i)
  })

  test('renders without items correctly', () => {
    const { getByRole } = renderComponent({ items: [] })
    getByRole('navigation')
  })
})
