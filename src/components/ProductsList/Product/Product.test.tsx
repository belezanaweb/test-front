import { screen, render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Product from '.'
import { describe, expect, it } from 'vitest'
import theme from '../../../theme'

describe('<Product />', () => {
  it('should render without price successfully', () => {
    render(
      <ThemeProvider theme={theme}>
        <Product image="image" name="product name" />
      </ThemeProvider>
    )

    expect(screen.getByText(/product name/i)).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', 'image')
  })

  it('should render without discount successfully', () => {
    render(
      <ThemeProvider theme={theme}>
        <Product image="image" name="product name" originalPrice={100} price={100} />
      </ThemeProvider>
    )

    expect(screen.getAllByText('R$ 100,00')).toHaveLength(1)
  })

  it('should render with discount successfully', () => {
    render(
      <ThemeProvider theme={theme}>
        <Product image="image" name="product name" originalPrice={150} price={100} />
      </ThemeProvider>
    )

    expect(screen.getByText('R$ 100,00')).toBeInTheDocument()
    expect(screen.getByText('R$ 150,00')).toBeInTheDocument()
  })
})
