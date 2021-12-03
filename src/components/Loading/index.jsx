import React from 'react'
import { LoadingBox, Icon } from './styled'
import preloader from './images/preloader.svg'

export default function Loading() {
  return (
    <LoadingBox>
      <Icon src={preloader} alt="Loading" />
    </LoadingBox>
  )
}
