import { fakeCartModel } from '@/test/mocks'
import { render, screen } from 'common-test-config'
import { CartItemsContainer } from '.'

describe('CartItemsContainer Component', () => {
  let buttonElement: HTMLElement

  it('should render element correctly', () => {
    render(<CartItemsContainer items={fakeCartModel.items} />)

    buttonElement = screen.getByTestId('card-items-container')
    expect(buttonElement).toBeInTheDocument()
  })

  it('should render title  when showTitle is true', () => {
    render(<CartItemsContainer showTitle items={fakeCartModel.items} />)

    buttonElement = screen.getByText('Produtos')
    expect(buttonElement).toBeInTheDocument()
  })
})
