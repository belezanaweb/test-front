import { render, screen } from '@testing-library/react'
import React from 'react'

import { ClientInfo } from '../../components'

describe('Testing ClientInfo.js', () => {
  it('should be able render ClientInfo', () => {
    const mock = {
      creditCard: '1111.1111.1111.1111',
      name: 'Viktor Nikiforov',
      validate: '12/2029'
    }

    render(<ClientInfo creditCard={mock.creditCard} name={mock.name} date={mock.validate} />)

    expect(screen.getByText(mock.name)).toBeTruthy()
    expect(screen.getByText(mock.validate)).toBeTruthy()
    expect(screen.getByText('****.****.****.1111')).toBeTruthy()
  })
})
