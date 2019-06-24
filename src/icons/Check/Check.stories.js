import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/react'
import ImageOverlay from '../../dev/components/ImageOverlay'
import checkImage from '../../dev/layout/check-icon.png'
import Check from '.'

storiesOf('icons/Check', module)
  .addDecorator(centered)
  .add('simple', () => <Check />)
  .add('with image overlay', () => (
    <ImageOverlay width="40px" height="40px" image={checkImage} show={boolean('Overlay?', false)}>
      <Check />
    </ImageOverlay>
  ))
