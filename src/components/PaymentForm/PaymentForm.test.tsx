import { screen, render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import PaymentForm from '.'
import { describe, expect, it, vi, beforeEach } from 'vitest'
import theme from '../../theme'
import useFormStore from '../../store/useFormStore'
import '@testing-library/jest-dom'

const onSubmit = vi.fn()

vi.mock('../../store/useFormStore', () => ({
  default: vi.fn()
}))

describe('<PaymentForm />', () => {
  beforeEach(() => {
    vi.mocked(useFormStore).mockReturnValue({
      cardNumber: '0000 0000 0000 0000',
      cardOwner: 'foo',
      expirationDate: '00/00',
      securityNumber: '000'
    })
  })

  it('should render successfully', () => {
    render(
      <ThemeProvider theme={theme}>
        <PaymentForm onSubmit={onSubmit}>
          <button type="submit">button</button>
        </PaymentForm>
      </ThemeProvider>
    )

    expect(screen.getByText('button')).toBeInTheDocument()
    expect(screen.getByLabelText(/Número/i)).toHaveValue('0000 0000 0000 0000')
    expect(screen.getByLabelText(/Nome do titular do cartão/i)).toHaveValue('foo')
    expect(screen.getByLabelText(/Data de validade/i)).toHaveValue('00/00')
    expect(screen.getByLabelText(/Código CVV/i)).toHaveValue('000')
  })

  //   it('should call onClick function successfully', async () => {
  //     render(
  //       <ThemeProvider theme={theme}>
  //         <PaymentForm onSubmit={onSubmit}>
  //           <button type="submit">button</button>
  //         </PaymentForm>
  //       </ThemeProvider>
  //     )

  //     fireEvent.submit(screen.getByText('button'))
  //     await waitFor(() => expect(screen.getByLabelText(/Número/i).getAttribute('error')).toBe(null))
  //     await waitFor(() =>
  //       expect(screen.getByLabelText(/Nome do titular do cartão/i).getAttribute('error')).toBe(null)
  //     )
  //     await waitFor(() =>
  //       expect(screen.getByLabelText(/Data de validade/i).getAttribute('error')).toBe(null)
  //     )
  //     await waitFor(() =>
  //       expect(screen.getByLabelText(/Código CVV/i).getAttribute('error')).toBe(null)
  //     )

  //     expect(onSubmit).toHaveBeenCalled()
  //   })
})
