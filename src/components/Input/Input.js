import React from 'react'
import './Input.css'

const Input = (props) => {
  return (
    <div className="input-container">
      <span className="input-label">{props.label}</span>
      <input
        id={props.id}
        type={props.type}
        className={props.error ? 'input-error' : undefined}
        onChange={props.onChange}
      ></input>
      <span className="error-message">{props.error && props.errorMessage}</span>
    </div>
  )
}

export default Input
