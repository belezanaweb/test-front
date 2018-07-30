import React from 'react'

import { LoadingStyle } from './styles'

const Loading = () => (
  <LoadingStyle>
    <i className="fa fa-spinner fa-pulse fa-5x" aria-hidden="true" style={{ color: '#f94d00' }} />
  </LoadingStyle>
)

export default Loading
