import React from 'react';

function Currency({ value }) {
  return <span>{value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
}

export default Currency;