import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import FormCreditCard from './FormCreditCard'
import ProductCard from './ProductCard'
import { MemoryRouter } from 'react-router-dom'

const propsProductCard = {
  name: 'Name Test of product',
  price: 225.9
}

describe('Components Common', () => {
  it('Component FormCreditCard - must contain all form fields', () => {
    render(<FormCreditCard />, { wrapper: MemoryRouter })

    expect(screen.getByText(/número do cartão:/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('____.____.____.____')).toBeInTheDocument()

    expect(screen.getByText(/nome do titular:/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Como no cartão/i)).toBeInTheDocument()

    expect(screen.getByText(/validade \(mês\/ano\):/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('__/____')).toBeInTheDocument()

    expect(screen.getByText(/cvv:/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('___')).toBeInTheDocument()
  })

  it('Component ProductCard - must contain all fields props', () => {
    render(<ProductCard {...propsProductCard} />, { wrapper: MemoryRouter })
    // screen.logTestingPlaygroundURL()

    // check if the component was loaded with image
    expect(screen.getByText(/produto sem imagem/i)).toBeInTheDocument()
    // check if the component was loaded with props
    expect(screen.getByText('R$ 225,90')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /name test of product/i })).toBeInTheDocument()
  })
})
