import React from 'react'
import { screen, render } from '@testing-library/react'
import PaymentResume from '../PaymentResume'

describe('Test of PaymentResume', () => {
  test('Verify the render', () => {
    render(<PaymentResume cardNumber={'1231.4123.1231.4123'} date={'12/2022'} name={'joao'} />)
    expect(screen.getByText('****.****.****.4123')).toBeInTheDocument()
    expect(screen.getByText('12/2022')).toBeInTheDocument()
    expect(screen.getByText('joao')).toBeInTheDocument()
  })
})
