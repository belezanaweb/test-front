import { screen, setup, waitForElementToBeRemoved, wrapper } from '@/test/utils'
import Cart from './cart'

describe('Cart', () => {
  it('should navigate through the whole cart process', async () => {
    const { user } = setup(<Cart />, { wrapper })

    expect(screen.getByRole('button', { name: 'Sacola' })).not.toHaveAttribute('disabled')
    expect(screen.getByRole('button', { name: 'Pagamento' })).not.toHaveAttribute('disabled')
    expect(screen.getByRole('button', { name: 'Confirmação' })).toHaveAttribute('disabled')

    await waitForElementToBeRemoved(() => screen.queryAllByTestId('skeleton'))

    await user.click(screen.getByRole('button', { name: 'Seguir para o pagamento' }))

    expect(screen.getByRole('button', { name: 'Finalizar pedido' })).toHaveAttribute('disabled')

    await user.type(screen.getByLabelText('Número'), '4444555566667777')
    await user.type(screen.getByLabelText('Nome do titular do cartão'), 'John Doe')
    await user.type(screen.getByLabelText('Data de validade'), '10/27')
    await user.type(screen.getByLabelText('Código CVV'), '123')

    expect(screen.getByRole('button', { name: 'Finalizar pedido' })).not.toHaveAttribute('disabled')

    await user.click(screen.getByRole('button', { name: 'Finalizar pedido' }))

    expect(screen.getByRole('button', { name: 'Sacola' })).toHaveAttribute('disabled')
    expect(screen.getByRole('button', { name: 'Pagamento' })).toHaveAttribute('disabled')
    expect(screen.getByRole('button', { name: 'Confirmação' })).not.toHaveAttribute('disabled')
    expect(screen.getByRole('heading', { name: 'Compra efetuada com sucesso' }))
    expect(screen.getByText('****.****.****.7777'))
    expect(screen.getByText('John Doe'))
    expect(screen.getByText('10/27'))

    await user.click(screen.getByRole('button', { name: 'Voltar ao início do protótipo' }))
    await user.click(screen.getByRole('button', { name: 'Seguir para o pagamento' }))

    // verifying if form is empty
    expect(screen.getByRole('textbox', { name: 'Número' })).toHaveValue('')
    expect(screen.getByRole('textbox', { name: 'Nome do titular do cartão' })).toHaveValue('')
    expect(screen.getByRole('textbox', { name: 'Data de validade' })).toHaveValue('')
    expect(screen.getByRole('textbox', { name: 'Código CVV' })).toHaveValue('')
  })
})
