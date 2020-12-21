import { render } from '@testing-library/react'

import * as useStore from 'react-redux'
import ComicList from '.'

const data = {
  subTotal: '1000',
  shippingTotal: '2000',
  discount: '3000',
  total: '4000'
}

describe('<Total/>', () => {
  it('Should display itens with currency formater', () => {
    jest.spyOn(useStore, 'useSelector').mockReturnValue({
      isLoading: false,
      data
    })

    const { container } = render(<ComicList />)

    expect(container.textContent.includes('R$ 1.000,00')).toBe(true)
    expect(container.textContent.includes('R$ 2.000,00')).toBe(true)
    expect(container.textContent.includes('R$ 3.000,00')).toBe(true)
    expect(container.textContent.includes('R$ 4.000,00')).toBe(true)
  })
})
