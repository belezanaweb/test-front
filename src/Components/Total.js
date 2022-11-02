import React, { useState } from 'react'
// import Context from '../Context/Context';

export default function Total() {
  // const { cart } = useContext(Context);
  const teste = useState(10)
  // console.log(cart.items);

  return (
    <section>
      <p>PRODUTOS</p>
      <p>FRETE</p>
      <p>DESCONTO</p>
      <p>TOTAL{teste} </p>
    </section>
  )
}
