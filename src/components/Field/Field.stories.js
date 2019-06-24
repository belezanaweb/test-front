import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text } from '@storybook/addon-knobs'
import ImageOverlay from '../../dev/components/ImageOverlay'
import paymentImage from '../../dev/layout/payment.png'
import Input from '../Input'
import Field from '.'

storiesOf('components/Field', module)
  .add('simple', () => (
    <Field id="field" label="Label">
      <Input />
    </Field>
  ))
  .add('with image overlay', () => (
    <ImageOverlay
      width="320px"
      height="68px"
      y="-170px"
      zIndex={1}
      image={paymentImage}
      show={boolean('Overlay?', false)}
    >
      <Field htmlFor="field" label={text('Label', 'Nome do Titular')}>
        <Input id="field" />
      </Field>
    </ImageOverlay>
  ))
  .add('with error', () => {
    const error = text('Error', 'Campo requerido.')

    return (
      <Field htmlFor="field" label={text('Label', 'Nome do Titular')} error={error}>
        <Input id="field" hasErrors={error} />
      </Field>
    )
  })
