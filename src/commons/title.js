import React from 'react'
import classnames from 'classnames'
import './title.css'

const Title = ({ text, classname = '' }) => (
  <span className={classnames('title ', classname)}>{text}</span>
)

export { Title }
