import React from 'react'

export default function Total() {
  const price = 'R$ 624,80'
  const frete = 'R$ 5,30'
  const desconto = '-R$ 30,00'
  const total = 'R$ 600,10'

  return (
    <section>
      <p>PRODUTOS {price}</p>
      <p>FRETE {frete}</p>
      <p>DESCONTO {desconto}</p>
      <p>TOTAL {total}</p>
    </section>
  )
}
