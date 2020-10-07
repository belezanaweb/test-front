import React from 'react'
import { render } from '@testing-library/react'

import Confirmation from './Confirmation'

describe('Confirmation Page', () => {
  test('Renders with title', async () => {
    const { asFragment, getByText } = render(
      <Confirmation
        paymentData={{
          cardNumber: '1234123412341234',
          name: 'ASDF QWER',
          date: '12/2040'
        }}
      />
    )
    expect(getByText('Compra efetuada com sucesso')).toBeInTheDocument()
    expect(getByText('Pagamento')).toBeInTheDocument()
    expect(getByText('Produtos')).toBeInTheDocument()

    expect(asFragment()).toMatchSnapshot()
  })
})
