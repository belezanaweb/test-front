import React from 'react'
import './textField.css'

const TextField = ({ label, onChange, value }) => (
  <div className="textField">
    <div className="label">{label}</div>
    <input className="input" onChange={onChange} value={value}></input>
  </div>
)

export { TextField }
