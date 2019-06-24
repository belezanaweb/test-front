import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import ImageOverlay from '../../dev/components/ImageOverlay'
import styleImage from '../../dev/layout/styleguide.png'
import Button from '.'

storiesOf('components/Button', module)
  .add('simple', () => (
    <Button disabled={boolean('Disabled?', false)} onClick={action('button-click')}>
      {text('Text inside button', 'Text button')}
    </Button>
  ))
  .add('with image overlay', () => (
    <ImageOverlay
      width="320px"
      height="60px"
      y="-179px"
      zIndex={1}
      image={styleImage}
      show={boolean('Overlay?', false)}
    >
      <Button onClick={action('button-click')}>{text('Text inside button', 'Text button')}</Button>
    </ImageOverlay>
  ))
  .add('with image overlay on hover', () => (
    <ImageOverlay
      width="320px"
      height="60px"
      y="-268px"
      zIndex={1}
      image={styleImage}
      show={boolean('Overlay?', false)}
    >
      <Button className="hover" onClick={action('button-click')}>
        {text('Text inside button', 'Text button')}
      </Button>
    </ImageOverlay>
  ))
