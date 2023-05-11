import { render, fireEvent } from 'test/setup-test'
import { vi } from 'vitest'
import { CheckoutSummary } from './index'

describe('CheckoutSummary', () => {
  const handleClick = vi.fn()
  const props = {
    itemsTotal: 3,
    subTotal: 624.8,
    shippingTotal: 5.3,
    discount: 30,
    total: 600.1,
    buttonTitle: 'Seguir para o pagamento',
    buttonType: undefined,
    action: handleClick
  }

  it('should render all properties correctly', () => {
    const { getByText } = render(<CheckoutSummary {...props} />)

    expect(getByText('Produtos: (3 itens)')).toBeInTheDocument()
    expect(getByText('R$ 624,80')).toBeInTheDocument()
    expect(getByText('Frete:')).toBeInTheDocument()
    expect(getByText('R$ 5,30')).toBeInTheDocument()
    expect(getByText('Desconto:')).toBeInTheDocument()
    expect(getByText('R$ 30,00')).toBeInTheDocument()
    expect(getByText('Subtotal')).toBeInTheDocument()
    expect(getByText('R$ 600,10')).toBeInTheDocument()
    expect(getByText(props.buttonTitle)).toBeInTheDocument()
  })

  it('should render items description "item" when itemsTotal === 1', () => {
    const { getByText } = render(<CheckoutSummary {...props} itemsTotal={1} />)

    expect(getByText('Produtos: (1 item)')).toBeInTheDocument()
    expect(getByText('R$ 624,80')).toBeInTheDocument()
    expect(getByText('Frete:')).toBeInTheDocument()
    expect(getByText('R$ 5,30')).toBeInTheDocument()
    expect(getByText('Desconto:')).toBeInTheDocument()
    expect(getByText('R$ 30,00')).toBeInTheDocument()
    expect(getByText('Subtotal')).toBeInTheDocument()
    expect(getByText('R$ 600,10')).toBeInTheDocument()
    expect(getByText(props.buttonTitle)).toBeInTheDocument()
  })

  it('should not render discount when discount === 0', () => {
    const { queryByText } = render(<CheckoutSummary {...props} discount={0} />)

    expect(queryByText('Desconto:')).not.toBeInTheDocument()
  })

  it('should not render button when buttonTitle is not passed', () => {
    const { queryByTestId } = render(
      <CheckoutSummary {...props} buttonTitle="" />
    )

    expect(
      queryByTestId('checkout-summary-button-wrapper')
    ).not.toBeInTheDocument()
  })

  it('should call the action function', () => {
    const { getByText } = render(
      <CheckoutSummary {...props} action={handleClick} />
    )

    fireEvent.click(getByText(props.buttonTitle))

    expect(handleClick).toHaveBeenCalled()
  })

  it('should not render items description when itemsTotal === 0', () => {
    const { container } = render(<CheckoutSummary {...props} itemsTotal={0} />)

    expect(container.firstChild).toBeNull()
  })
})
