import React, { Suspense } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import ImageOverlay from '../../dev/components/ImageOverlay'
import cartImage from '../../dev/layout/cart.png'
import CartComponent from './CartComponent'

/* prettier-ignore */
const mockOrder = {
  items: [
    {
      product: {
        sku: '24410',
        name: "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium",
        imageObjects: [{
          thumbnail: 'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png',
          small: 'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png'
        }],
        priceSpecification: {
          price: 255.9
        }
      }
    },
    {
      product: {
        sku: '38273',
        name: 'Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml',
        imageObjects: [{
          thumbnail: 'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg',
          small: 'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/good-girl-carolina-herrera-eau-de-parfum-perfume-feminino-30ml-38273-1960525940762131267.jpg'
        }],
        priceSpecification: {
          price: 299
        }
      }
    },
    {
      product: {
        sku: '3019',
        name: 'Senscience Inner Restore Intensif - Máscara Capilar 50ml',
        imageObjects: [{
          thumbnail: 'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/senscience-inner-restore-intesif-deep-repairing-masque-mascara-de-tratamento-50ml-3019-7903251722539384904.png',
          small: 'https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/senscience-inner-restore-intesif-deep-repairing-masque-mascara-de-tratamento-50ml-3019-7903251722539384904.png'
        }],
        priceSpecification: {
          price: 99.9
        }
      }
    }
  ],
  discount: 30,
  shippingTotal: 5.3,
  subTotal: 624.8,
  total: 618.9
}

storiesOf('views/Cart', module).add('with image overlay', () => (
  <ImageOverlay
    width="360px"
    height="588px"
    y="-50px"
    zIndex={1}
    image={cartImage}
    show={boolean('Overlay?', false)}
  >
    <Suspense fallback={<div>Loading...</div>}>
      <CartComponent order={mockOrder} onProceed={action('button click')} />
    </Suspense>
  </ImageOverlay>
))
