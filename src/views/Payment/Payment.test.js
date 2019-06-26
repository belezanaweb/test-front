import React from 'react'
import { fireEvent, render } from 'test-utils'
import { navigate } from '@reach/router'
import Payment from './Payment'

jest.mock('@reach/router', () => ({ navigate: jest.fn() }))

afterEach(jest.clearAllMocks)
afterAll(jest.restoreAllMocks)

const mockOrder = {
  discount: 30,
  shippingTotal: 5.3,
  subTotal: 624.8,
  total: 618.9
}

const mockState = {
  order: mockOrder
}

const mockLocation = {
  state: mockState
}

const mockPayment = {
  num: '4111111111111111',
  name: 'Test',
  exp: '5/2020',
  cvc: '999'
}

describe('Payment', () => {
  it('should render [snapshot]', () => {
    const { container } = render(<Payment location={mockLocation} />)
    expect(container).toMatchSnapshot()
  })

  it('should redirect to /checkout if no state was passed', () => {
    render(<Payment />)
    expect(navigate).toHaveBeenCalledWith('/checkout', { replace: true })
  })

  describe('clicking button', () => {
    it('should be disabled at start', () => {
      const { getByTestId } = render(<Payment location={mockLocation} />)
      expect(getByTestId('button-next')).toBeDisabled()
    })

    it('should enable button on adding valid data', () => {
      const { getByTestId } = render(<Payment location={mockLocation} />)
      fireEvent.change(getByTestId('field-number'), { target: { value: '4111 1111 1111 1111' } })
      expect(getByTestId('button-next')).toBeDisabled()
      fireEvent.change(getByTestId('field-name'), { target: { value: mockPayment.name } })
      expect(getByTestId('button-next')).toBeDisabled()
      fireEvent.change(getByTestId('field-exp'), { target: { value: '05/20' } })
      expect(getByTestId('button-next')).toBeDisabled()
      fireEvent.change(getByTestId('field-cvc'), { target: { value: mockPayment.cvc } })
      expect(getByTestId('button-next')).not.toBeDisabled()
    })

    it('should call navigate to /checkout/confirmation passing state including payment data', () => {
      const { getByTestId } = render(<Payment location={mockLocation} />)
      expect(navigate).not.toHaveBeenCalled()
      fireEvent.change(getByTestId('field-number'), { target: { value: '4111 1111 1111 1111' } })
      fireEvent.change(getByTestId('field-name'), { target: { value: mockPayment.name } })
      fireEvent.change(getByTestId('field-exp'), { target: { value: '05/20' } })
      fireEvent.change(getByTestId('field-cvc'), { target: { value: mockPayment.cvc } })
      fireEvent.click(getByTestId('button-next'))
      expect(navigate).toHaveBeenCalledWith('/checkout/confirmation', {
        state: { order: mockOrder, payment: mockPayment }
      })
    })
  })
})
