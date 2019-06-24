import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text } from '@storybook/addon-knobs'
import ImageOverlay from '../../dev/components/ImageOverlay'
import styleImage from '../../dev/layout/styleguide.png'
import Input from '.'

storiesOf('components/Input', module)
  .add('simple', () => (
    <Input
      type="text"
      placeholder={text('Placeholder', 'Placeholder')}
      hasErrors={boolean('hasErrors', false)}
    />
  ))
  .add('with image overlay', () => (
    <ImageOverlay
      width="320px"
      height="44px"
      y="-415px"
      zIndex={1}
      opacity={1}
      image={styleImage}
      show={boolean('Overlay?', false)}
    >
      <Input
        type="text"
        placeholder={text('Placeholder', 'Placeholder')}
        hasErrors={boolean('hasErrors', false)}
      />
    </ImageOverlay>
  ))
