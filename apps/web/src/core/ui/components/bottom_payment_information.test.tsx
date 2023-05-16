import { fakeCartModel } from '@/test/mocks'
import BottomPaymentInformation from './bottom_payment_information'

import { render, screen } from 'common-test-config'

describe('BottomPaymentInformation', () => {
  let element: HTMLElement | null

  beforeEach(() => {
    render(<BottomPaymentInformation cartData={fakeCartModel}>test</BottomPaymentInformation>)
    element = screen.queryByTestId('bottom-payment-information')
  })

  it('should render component correctly', () => {
    expect(element).toBeInTheDocument()
  })
})
