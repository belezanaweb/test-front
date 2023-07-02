import { screen, render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import ProductList from '.'
import { describe, expect, it } from 'vitest'
import theme from '../../theme'

describe('<ProductList />', () => {
  it('should render successfully', () => {
    render(
      <ThemeProvider theme={theme}>
        <ProductList products={[{ image: 'image', name: 'product name' }]} />
      </ThemeProvider>
    )

    expect(screen.getByText(/product name/i)).toBeInTheDocument()
    expect(screen.getByRole('img')).toHaveAttribute('src', 'image')
  })
})
