import { fakeCartModel } from '@/test/mocks'
import { render, screen } from 'common-test-config'
import CartItemTile from './cart_item_tile'

describe('CartItemTile Component', () => {
  let element: HTMLElement
  const item = fakeCartModel.items[0]

  it('should render element correctly and not show price section', () => {
    render(<CartItemTile showPrice={false} item={item}/>)

    element = screen.getByTestId('cart-item-tile')
    expect(element).toBeInTheDocument()

    const priceContainer = screen.queryByTestId('cart-item-tile-price')
    expect(priceContainer).toBe(null)
  })

  it('should render price section when showPrice is true', () => {
    render(<CartItemTile item={item}/>)

    const priceContainer = screen.getByTestId('cart-item-tile-price')
    expect(priceContainer).toBeInTheDocument()
  });

})
