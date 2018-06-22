import React from 'react'

import Items from './Items'
import Total from './Total'

import './Bag.css'

const Bag = props =>
  <div className="bag">
    <Items
      {...props} />
    <Total
      values={props.cart}
      format={props.format} />
    <button onClick={() => props.history.push('/payment')}>Seguir para o pagamento</button>
  </div>

export default Bag
