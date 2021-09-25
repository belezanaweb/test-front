import React from 'react'

/**
 * Helpers
 */
// import { formatCoinStr } from '../../helpers'

/**
 * Components
 */
// import { Title } from '../Utils/styles'

/**
 * Styles
 */
// import {
//   ImageWrapper,
//   Image,
// } from './styles'

const Picture = ({ images, alt = 'Fine picture' }) => {
  console.log('Products images:', images)

  return (
    <picture>
      {!!images?.extraLarge && <source srcset={images.extraLarge} media="(min-width: 1280px)" />}
      {!!images?.large && <source srcset={images.large} media="(min-width: 1024px)" />}
      {!!images?.medium && <source srcset={images.medium} media="(min-width: 640px)" />}
      {!!images?.small && <source srcset={images.small} media="(min-width: 411px)" />}
      {!!images?.thumbnail && <source srcset={images.thumbnail} media="(min-width: 290px)" />}

      {!!images?.medium && <img alt={alt} src={images.medium} />}
    </picture>
  )
}

export default Picture
