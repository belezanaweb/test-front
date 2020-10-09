import React from 'react'
import { render, fireEvent, wait } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BagPage from '../BagPage'
import userEvent from '@testing-library/user-event'
import axios from 'axios'

describe('tests BagPage', () => {
  test('Render products', async () => {
    //Preparação
    axios.get = jest.fn().mockResolvedValue({
      data: {
        items: [
          {
            quantity: 1,
            product: {
              sku: '24410',
              name:
                "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g",
              imageObjects: [
                {
                  small:
                    'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png'
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
          }
        ],
        subTotal: 624.8,
        shippingTotal: 5.3,
        discount: 30,
        total: 618.9
      }
    })

    const { getByText, getByAltText } = render(<BagPage />)

    await wait(() => expect(axios.get).toHaveBeenCalled())
    await wait(() => expect(getByText(/Máscara de Reconstrução 500g/i)).toBeInTheDocument())
    await wait(() => expect(getByText(/225/)).toBeInTheDocument())
    await wait(() => expect(getByAltText(/product/)).toBeInTheDocument())
  })

  test('Test button on Screen', async () => {
    const { getByText } = render(<BagPage />)
    const buttonGoToPayment = getByText(/SEGUIR PARA O PAGAMENTO/)
    await wait(() => expect(buttonGoToPayment).toHaveTextContent(/SEGUIR PARA O PAGAMENTO/i))
  })
})
