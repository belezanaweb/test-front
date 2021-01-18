import React from 'react'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import ProductCard from './'
import theme from '../../theme'

describe('<ProductCard />', () => {
  it('should match a snapshot', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <ProductCard
          name="Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml"
          images={[
            {
              featured: true,
              thumbnail:
                'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg',
              small:
                'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg',
              medium:
                'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/6/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg',
              large:
                'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/4/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg',
              extraLarge:
                'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/5/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg',
              valid: true
            }
          ]}
          priceData={{
            sku: '38273',
            price: 299,
            originalPrice: 299,
            maxPrice: 299,
            percent: 0,
            discount: 0
          }}
        />
      </ThemeProvider>
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
