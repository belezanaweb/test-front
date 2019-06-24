import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import ImageOverlay from '../../dev/components/ImageOverlay'
import confirmationImage from '../../dev/layout/confirmation.png'
import SuccessMessage from '.'

storiesOf('components/SuccessMessage', module).add('with image overlay', () => (
  <ImageOverlay
    width="360px"
    height="70px"
    y="-52px"
    zIndex={1}
    image={confirmationImage}
    show={boolean('Overlay?', false)}
  >
    <SuccessMessage />
  </ImageOverlay>
))
