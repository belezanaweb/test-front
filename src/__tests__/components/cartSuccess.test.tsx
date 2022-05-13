import React from 'react'
import CartSuccess from '../../components/CartSuccess'
import { render, screen } from '../../util/test-utils'

describe('CartSuccess Component', () => {
  it('should render correctly', () => {
    const { container } = render(<CartSuccess />)

    const svgEl = container.querySelector(
      "[data-icon='checkIcon']"
    ) as HTMLImageElement

    expect(svgEl).toBeInTheDocument()

    expect(screen.getByText(/COMPRA EFETUADA COM SUCESSO/i)).toBeInTheDocument()
  })
})
