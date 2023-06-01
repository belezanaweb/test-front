import { afterEach, describe, it, vi } from 'vitest'
import PaymentOptions from '.'
import { render, screen } from '@testing-library/react'
import { mockFormState } from '../../test/setup-test'
import userEvent from '@testing-library/user-event'

vi.mock('../../reducers/form', () => ({
  paymentOptions: { card: { name: 'Cartão' }, pix: { name: 'Pix' } }
}))

const handleChangeSelectedOption = vi.fn()

const Component = () => <div>Component</div>

describe('Testing the PaymentOptions component', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })
  it('should render the component given as prop', () => {
    render(
      <PaymentOptions
        formState={mockFormState}
        Component={Component}
        actions={{ handleChangeSelectedOption }}
      />
    )
    expect(screen.getByText('Component')).toBeDefined()
  })

  it('should render the payment option select control when has more than 1 option', () => {
    render(
      <PaymentOptions
        formState={mockFormState}
        Component={Component}
        actions={{ handleChangeSelectedOption }}
      />
    )
    expect(screen.getByText('Selecione a forma de pagamento')).toBeDefined()
  })

  it('should call handleChangeSelectedOption when option is clicked', async () => {
    render(
      <PaymentOptions
        formState={mockFormState}
        Component={Component}
        actions={{ handleChangeSelectedOption }}
      />
    )
    await userEvent.click(screen.getByText('Cartão'))
    expect(handleChangeSelectedOption).toHaveBeenCalled()
  })
})
