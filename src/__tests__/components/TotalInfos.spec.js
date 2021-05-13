import { render, screen } from '@testing-library/react'
import React from 'react'

import { TotalInfos } from '../../components'
import { maskMoney } from '../../utils/validation'

describe('Testing TotalInfos.js', () => {
  it('should be able render TotalInfos', () => {
    const infos = {
      discount: 10,
      shippingTotal: 10,
      subTotal: 90,
      total: 100
    }

    render(
      <TotalInfos
        discount={infos.discount}
        shippingTotal={infos.shippingTotal}
        subTotal={infos.subTotal}
        total={infos.total}
      />
    )

    expect(
      screen.getByText((content, node) => node.textContent === maskMoney(infos.total))
    ).toBeTruthy()
  })
})
