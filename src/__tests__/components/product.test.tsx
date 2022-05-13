import React from 'react'
import Product from '../../components/Product'
import { render, screen } from '../../util/test-utils'

const props = {
  imageUrl:
    'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png',
  name: 'Example test',
  price: 300
}

describe('Product Component', () => {
  it('should render correctly', () => {
    render(<Product {...props} />)

    expect(screen.getByRole('img', { name: 'Product image' })).toHaveAttribute(
      'src',
      props.imageUrl
    )

    expect(screen.getByText(/Example test/i)).toBeInTheDocument()

    expect(screen.getByText('R$ 300,00')).toBeInTheDocument()
  })

  it('should render price in bold', () => {
    render(<Product {...props} />)

    const price = screen.getByText('R$ 300,00')

    expect(price).toHaveStyle({ 'font-weight': '600' })
  })
})
