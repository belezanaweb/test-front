import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean, number } from '@storybook/addon-knobs'
import ImageOverlay from '../../../../dev/components/ImageOverlay'
import paymentImage from '../../../../dev/layout/payment.png'
import CreditCardSection from '.'

storiesOf('modules/checkout/components/CreditCardSection', module)
  .add('simple', () => <CreditCardSection setCreditCard={action('creditcard')} />)
  .add('with image overlay', () => (
    <ImageOverlay
      width="340px"
      height="305px"
      y="-48px"
      zIndex={1}
      opacity={number('Overlay opacity', 0.5)}
      image={paymentImage}
      show={boolean('Overlay?', true)}
    >
      <CreditCardSection />
    </ImageOverlay>
  ))
