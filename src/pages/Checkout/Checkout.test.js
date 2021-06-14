import React from 'react'
import { screen, fireEvent, waitFor, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TestUtils from 'react-dom/test-utils'

import renderWithRouter from '../../jest/renderWithRouter'
import * as useCart from '../../hooks/useCart'
import Checkout from './Checkout'

function changeInputMaskValue(element, value) {
  element.value = value
  element.selectionStart = element.selectionEnd = value.length
  TestUtils.Simulate.change(element)
}

const useCartProps = {
  productList: [
    {
      quantity: 1,
      product: {
        sku: '24410',
        name: "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g",
        imageObjects: [
          {
            featured: true,
            thumbnail:
              'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png',
            small:
              'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png',
            medium:
              'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/6/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png',
            large:
              'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/4/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png',
            extraLarge:
              'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/5/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png',
            valid: true
          }
        ],
        priceSpecification: {
          sku: '24410',
          price: 225.9,
          originalPrice: 225.9,
          maxPrice: 243.9,
          percent: 7,
          discount: 18
        }
      }
    },
    {
      quantity: 1,
      product: {
        sku: '38273',
        name: 'Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml',
        imageObjects: [
          {
            featured: true,
            thumbnail:
              'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg',
            small:
              'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg',
            medium:
              'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/6/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg',
            large:
              'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/4/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg',
            extraLarge:
              'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/5/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg',
            valid: true
          }
        ],
        priceSpecification: {
          sku: '38273',
          price: 299,
          originalPrice: 299,
          maxPrice: 299,
          percent: 0,
          discount: 0
        }
      }
    },
    {
      quantity: 1,
      product: {
        sku: '3019',
        name: 'Senscience Inner Restore Intensif - Máscara Capilar 50ml',
        imageObjects: [
          {
            featured: true,
            thumbnail:
              'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/senscience-inner-restore-intesif-deep-repairing-masque-mascara-de-tratamento-50ml-3019-7903251722539384904.png',
            small:
              'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/senscience-inner-restore-intesif-deep-repairing-masque-mascara-de-tratamento-50ml-3019-7903251722539384904.png',
            medium:
              'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/6/senscience-inner-restore-intesif-deep-repairing-masque-mascara-de-tratamento-50ml-3019-7903251722539384904.png',
            large:
              'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/4/senscience-inner-restore-intesif-deep-repairing-masque-mascara-de-tratamento-50ml-3019-7903251722539384904.png',
            extraLarge:
              'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/5/senscience-inner-restore-intesif-deep-repairing-masque-mascara-de-tratamento-50ml-3019-7903251722539384904.png',
            valid: true
          }
        ],
        priceSpecification: {
          sku: '3019',
          price: 99.9,
          originalPrice: 99.9,
          maxPrice: 99.9,
          percent: 0,
          discount: 0
        }
      }
    }
  ],
  shippingTotal: 5.3,
  total: 618.9,
  subTotal: 624.8,
  discount: 30
}

describe('Checkout', () => {
  it('should render Checkout', () => {
    jest.spyOn(useCart, 'useCart').mockImplementation(() => useCartProps)
    const { container } = renderWithRouter(<Checkout />)

    container.firstChild

    expect(container.firstChild).toBeInTheDocument()
  })

  it('should validate form when submit button is clicked withot fill fields', async () => {
    jest.spyOn(useCart, 'useCart').mockImplementation(() => useCartProps)
    renderWithRouter(<Checkout />)

    fireEvent.click(screen.getByText(/FINALIZAR O PEDIDO/g))

    await waitFor(() => {
      expect(screen.queryAllByTestId('error-message').length).toBe(4)
    })
  })

  it('should call handleSubmitCheckout when submit button is clicked with valid form', async () => {
    const mockHandleSubmitCheckout = jest.fn()
    jest.spyOn(useCart, 'useCart').mockImplementation(() => ({
      ...useCartProps,
      handleSubmitCheckout: mockHandleSubmitCheckout
    }))

    renderWithRouter(<Checkout />)

    act(() => {
      userEvent.type(screen.getByLabelText(/número de cartão:/i), '1234123412341234')
      changeInputMaskValue(screen.getByLabelText(/número de cartão:/i), '1234123412341234')

      userEvent.type(screen.getByLabelText(/nome do titular:/i), 'marcos')
      changeInputMaskValue(screen.getByLabelText(/nome do titular:/i), 'marcos')

      userEvent.type(screen.getByLabelText(/validade \(mês\/ano\):/i), '20/2030')
      changeInputMaskValue(screen.getByLabelText(/validade \(mês\/ano\):/i), '20/2030')

      userEvent.type(screen.getByLabelText(/cvv:/i), '123')
      changeInputMaskValue(screen.getByLabelText(/cvv:/i), '123')
    })

    fireEvent.click(screen.getByRole('button'))

    await waitFor(() => {
      expect(screen.queryAllByTestId('error-message').length).toBe(0)
      expect(mockHandleSubmitCheckout).toHaveBeenCalled()
    })
  })
})
