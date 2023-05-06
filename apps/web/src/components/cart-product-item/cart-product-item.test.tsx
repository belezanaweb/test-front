import { screen, setup } from '@/test/utils'
import { CartProductItem } from '.'

describe('CartInfo', () => {
  it('should render properly', () => {
    const props = {
      description:
        "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução",
      imgSrc: 'fakeurl.jpg',
      price: 225.9,
      maxPrice: 243.9
    }

    setup(
      <CartProductItem.Root>
        <CartProductItem.Root>
          <CartProductItem.Info description={props.description} imgSrc={props.imgSrc} />
          <CartProductItem.Price price={props.price} maxPrice={props.maxPrice} />
        </CartProductItem.Root>
      </CartProductItem.Root>
    )

    const imgElement = screen.getByRole('img')

    expect(imgElement).toHaveAttribute('src', props.imgSrc)
    expect(screen.getByText(props.description)).toBeInTheDocument()
    expect(screen.getByText('R$ 225,90')).toBeInTheDocument()
    expect(screen.getByText('R$ 243,90')).toBeInTheDocument()
  })
})
