import React from 'react'

import { render } from '../../utils/test-utils'
import CartSummary from '../../components/CartSummary'

const makeSut = (props) => {
  const mockCartSummary = {
    subTotal: 100,
    shippingTotal: 5,
    discount: 20,
    total: 85
  }

  return render(<CartSummary cartSummary={mockCartSummary} {...props} />)
}

describe('CartSummary', () => {
  test('should render without errors', () => {
    const { container } = makeSut()
    expect(container).toBeInTheDocument()
  })

  test('should render correct currency values', () => {
    const { getByText } = makeSut()

    const subTotalElement = getByText('R$ 100,00')
    const shippingTotalElement = getByText('R$ 5,00')
    const discountElement = getByText('R$ 20,00')
    const totalElement = getByText('R$ 85,00')

    expect(subTotalElement).toBeInTheDocument()
    expect(shippingTotalElement).toBeInTheDocument()
    expect(discountElement).toBeInTheDocument()
    expect(totalElement).toBeInTheDocument()
  })

  test('should render with loading message', () => {
    const isLoading = true
    const { getByText } = makeSut({ isLoading })

    const loadingMessageElement = getByText(/Carregando.../i)

    expect(loadingMessageElement).toBeInTheDocument()
  })

  test('should match with snapshot', () => {
    const { container } = makeSut()
    expect(container).toMatchSnapshot()
  })
})
