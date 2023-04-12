import { screen } from '@testing-library/react'
import { render } from '../../utils/test-utils'
import { CartItem } from '.'

const cartItemMock = [
  {
    name: 'Produto teste',
    price: 20,
    image:
      'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png',
    maxPrice: 20,
    sku: '123'
  },
  {
    name: 'Produto teste 2',
    price: 15,
    image:
      'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png',
    maxPrice: 25,
    sku: '111'
  }
]

describe('CartItem component', () => {
  it('should render a cart item with price', () => {
    render(<CartItem showPrice {...cartItemMock[0]} />)
    expect(screen.getByText('R$ 20,00')).toBeInTheDocument()
    expect(screen.getByText('Produto teste')).toBeInTheDocument()
  })

  it('should render a cart item with discount', () => {
    render(<CartItem showPrice {...cartItemMock[1]} />)
    expect(screen.getByText('Produto teste 2')).toBeInTheDocument()
    expect(screen.getByText('R$ 25,00')).toHaveStyle({
      textDecoration: 'line-through'
    })
  })
})
