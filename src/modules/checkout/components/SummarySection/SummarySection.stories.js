import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, number } from '@storybook/addon-knobs'
import ImageOverlay from '../../../../dev/components/ImageOverlay'
import cartImage from '../../../../dev/layout/cart.png'
import SummarySection from '.'

const mockOrder = {
  subTotal: 624.8,
  shippingTotal: 5.3,
  discount: 30,
  total: 618.9
}

storiesOf('modules/checkout/components/SummarySection', module)
  .add('simple', () => <SummarySection order={mockOrder} />)
  .add('with image overlay', () => (
    <ImageOverlay
      width="340px"
      height="130px"
      y="-417px"
      zIndex={1}
      opacity={number('Overlay opacity', 0.5)}
      image={cartImage}
      show={boolean('Overlay?', true)}
    >
      <SummarySection order={mockOrder} />
    </ImageOverlay>
  ))
