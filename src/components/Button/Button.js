import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <div className="button-container" onClick={props.onClick}>
      <span className="button-label">{props.label}</span>
    </div>
  )
}

export default Button
