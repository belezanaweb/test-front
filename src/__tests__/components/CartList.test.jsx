import React from 'react'
import { render } from '../../utils/test-utils'
import { CartList } from '../../components'

const makeSut = () => {
  const items = [
    { id: 1, title: 'sample item 1', price: '100' },
    { id: 2, title: 'sample item 2', price: '200' }
  ]

  return render(<CartList items={items} />)
}

describe('CartList', () => {
  test('should render without errors', () => {
    const { container } = render(<CartList />)
    expect(container).toBeInTheDocument()
  })

  test('should component render children', () => {
    const { container } = makeSut()

    const listElement = container.querySelector('ul')

    expect(listElement).toBeInTheDocument()
    expect(listElement?.children).toHaveLength(2)
  })

  test('should match with snapshot', () => {
    const { container } = makeSut()
    expect(container).toMatchSnapshot()
  })
})
