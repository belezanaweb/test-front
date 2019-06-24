import React, { Suspense } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import ImageOverlay from '../../dev/components/ImageOverlay'
import paymentImage from '../../dev/layout/payment.png'
import PaymentComponent from './PaymentComponent'

const mockOrder = {
  discount: 30,
  shippingTotal: 5.3,
  subTotal: 624.8,
  total: 618.9
}

storiesOf('views/Payment', module).add('with image overlay', () => (
  <ImageOverlay
    width="360px"
    height="588px"
    y="-50px"
    zIndex={1}
    image={paymentImage}
    show={boolean('Overlay?', false)}
  >
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentComponent order={mockOrder} onProceed={action('button click')} />
    </Suspense>
  </ImageOverlay>
))
