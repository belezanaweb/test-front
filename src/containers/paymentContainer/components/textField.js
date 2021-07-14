import React from 'react'
import './textField.css'

const TextField = ({ label }) => (
  <div className="textField">
    <div className="label">{label}</div>
    <input className="input"></input>
  </div>
)

export { TextField }
