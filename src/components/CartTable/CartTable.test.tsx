import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import CartTable from './'
import theme from '../../theme'

describe('<CartTable />', () => {
  it('render CartTable component', () => {
    render(
      <ThemeProvider theme={theme}>
        <CartTable subTotal={500} shippingTotal={10} discount={20} total={600} />
      </ThemeProvider>
    )

    expect(screen.getByText(/produtos/i)).toBeInTheDocument()
  })

  it('should match a snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <CartTable subTotal={500} shippingTotal={10} discount={20} total={600} />
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
