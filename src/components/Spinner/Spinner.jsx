import React from 'react'
import Loader from 'react-loader'
import * as CSS from './style'

export default function Spinner({ loaded }) {
  return (
    <CSS.Backdrop>
      <Loader loaded={loaded} />
    </CSS.Backdrop>
  )
}
