import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, number } from '@storybook/addon-knobs'
import ImageOverlay from '../../../../dev/components/ImageOverlay'
import confirmationImage from '../../../../dev/layout/confirmation.png'
import PaymentSummarySection from '.'

const mockCCPayment = {
  exp: '05/2019',
  name: 'José da Silva',
  num: '1234123412341234'
}

storiesOf('modules/checkout/components/PaymentSummarySection', module)
  .add('simple', () => <PaymentSummarySection payment={mockCCPayment} />)
  .add('with image overlay', () => (
    <ImageOverlay
      width="340px"
      height="96px"
      y="-138px"
      zIndex={1}
      opacity={number('Overlay opacity', 0.5)}
      image={confirmationImage}
      show={boolean('Overlay?', true)}
    >
      <PaymentSummarySection payment={mockCCPayment} />
    </ImageOverlay>
  ))
