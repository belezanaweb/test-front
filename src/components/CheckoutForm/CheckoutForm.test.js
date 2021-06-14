import React from 'react'
import { render } from '@testing-library/react'
import CheckoutForm from './CheckoutForm'

describe('CheckoutForm', () => {
  it('should render CheckoutForm', () => {
    const register = jest.fn()
    const errors = {}

    const { container } = render(<CheckoutForm register={register} errors={errors} />)

    container.firstChild

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const register = jest.fn()
    const errors = {}

    const { container } = render(<CheckoutForm register={register} errors={errors} />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
