import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <div className="button-container" onClick={props.onClick}>
      <span className="label">SEGUIR PARA O PAGAMENTO</span>
    </div>
  )
}

export default Button
