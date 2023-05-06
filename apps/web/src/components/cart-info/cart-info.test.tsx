import { screen, setup } from '@/test/utils'
import { CartInfo } from '.'

describe('CartInfo', () => {
  it('should render properly', () => {
    setup(
      <CartInfo.Root>
        <CartInfo.Data
          discount={30}
          subTotal={624.8}
          shippingTotal={5.3}
          quantity={3}
          total={600.1}
        />
      </CartInfo.Root>
    )

    expect(screen.getByText('Produtos: (3 itens)')).toBeInTheDocument()
    expect(screen.getByText('R$ 600,10')).toBeInTheDocument()

    expect(screen.getByText('Frete')).toBeInTheDocument()
    expect(screen.getByText('R$ 5,30')).toBeInTheDocument()

    expect(screen.getByText('Desconto')).toBeInTheDocument()
    expect(screen.getByText('R$ 30,00')).toBeInTheDocument()

    expect(screen.getByText('Subtotal')).toBeInTheDocument()
    expect(screen.getByText('R$ 624,80')).toBeInTheDocument()
  })
})
