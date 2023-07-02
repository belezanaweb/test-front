import { screen, render, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import PaymentResume from '.'
import { describe, expect, it, vi } from 'vitest'

const onClick = vi.fn()

describe('<PaymentResume />', () => {
  it('should render successfully', () => {
    render(
      <ThemeProvider theme={theme}>
        <PaymentResume
          buttonLable="button"
          discount={10}
          itemsQuantity={2}
          shippingTotal={15}
          subTotal={50}
          total={60}
        />
      </ThemeProvider>
    )

    expect(screen.getByText('Produtos: (2 items)')).toBeInTheDocument()
    expect(screen.getByText('R$ 10,00')).toBeInTheDocument()
    expect(screen.getByText('R$ 15,00')).toBeInTheDocument()
    expect(screen.getByText('R$ 50,00')).toBeInTheDocument()
    expect(screen.getByText('R$ 60,00')).toBeInTheDocument()
  })

  it('should call onClick function successfully', () => {
    render(
      <ThemeProvider theme={theme}>
        <PaymentResume
          buttonLable="button"
          discount={10}
          itemsQuantity={2}
          shippingTotal={15}
          subTotal={50}
          total={60}
          onClick={onClick}
        />
      </ThemeProvider>
    )

    fireEvent.click(screen.getByText(/button/i))
    expect(onClick).toHaveBeenCalled()
  })
})
