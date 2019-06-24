import React, { Suspense } from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, number } from '@storybook/addon-knobs'
import ImageOverlay from '../../dev/components/ImageOverlay'
import cartImage from '../../dev/layout/cart.png'
import Navigation from '.'

storiesOf('components/Navigation', module).add('with image overlay', () => {
  const activeIndex = number('active', 0, { range: true, min: 0, max: 3, step: 1 })
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ImageOverlay
        width="360px"
        height="43px"
        y="top"
        zIndex={1}
        image={cartImage}
        show={boolean('Overlay?', false)}
      >
        <Navigation>
          <Navigation.List>
            <Navigation.Item active={activeIndex === 1}>Sacola</Navigation.Item>
            <Navigation.Item active={activeIndex === 2}>Pagamento</Navigation.Item>
            <Navigation.Item active={activeIndex === 3}>Confirmação</Navigation.Item>
          </Navigation.List>
        </Navigation>
      </ImageOverlay>
    </Suspense>
  )
})
