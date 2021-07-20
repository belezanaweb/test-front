import React from 'react';
import './button.css';

const Button = ({ text, onClick, isEnabled }) => (
  <button disabled={!isEnabled} className="btnProceed" onClick={onClick}>
    {text}
  </button>
);

export { Button };
