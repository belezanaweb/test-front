import { BrowserRouter } from 'react-router-dom'

import { renderWithClient } from '../../utils/test-utils'

import { Bag } from '.'

jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useQuery: jest.fn().mockReturnValue({
    data: {
      summary: {
        subTotal: 100,
        shippingTotal: 5,
        discount: 10,
        total: 90,
        totalItems: 2
      },
      items: [
        {
          quantity: 1,
          product: {
            name: 'Produto teste',
            price: 20,
            image:
              'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png',
            maxPrice: 20,
            sku: '123'
          }
        },
        {
          quantity: 2,
          product: {
            name: 'Produto teste 2',
            price: 15,
            image:
              'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png',
            maxPrice: 25,
            sku: '111'
          }
        }
      ]
    },
    isLoading: false,
    error: {}
  })
}))

describe('Bag page', () => {
  it('renders correctly', async () => {
    const result = renderWithClient(
      <BrowserRouter>
        <Bag />
      </BrowserRouter>
    )

    //verify if loads summary data
    expect(await result.findByText(/Seguir para o pagamento/i)).toBeInTheDocument()
    expect(await result.findByText('R$ 90,00')).toBeInTheDocument()

    //verify if loads products data
    expect(await result.findByText('R$ 20,00')).toBeInTheDocument()
  })
})
