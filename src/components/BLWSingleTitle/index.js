import React from 'react'

import { SingleTitle } from './styles'

const BLWSingleTitle = ({ className, id, title, total }) => {
  return (
    <SingleTitle className={`title ${className}`} id={id}>
      <p>{title}</p>
    </SingleTitle>
  )
}

export default BLWSingleTitle
