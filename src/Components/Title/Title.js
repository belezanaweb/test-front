import React from 'react'

import './Title.css'

const Title = (props) => (
  <div className="Title">
    <span>{props.title.toUpperCase()}</span>
  </div>
)

export default Title
