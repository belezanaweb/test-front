import React from 'react'
import './button.css'

const Button = ({ text, onClick }) => (
  <button className="btnProceed" onClick={onClick}>
    {text}
  </button>
)

export { Button }
