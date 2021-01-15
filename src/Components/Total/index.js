import React from 'react'
import { useSelector } from 'react-redux'
import { PriceBox } from './styles'
import Helpers from '../../Helpers/Helpers'

function Totalcolumn() {
  const totals = useSelector((state) => state.Products.totals)

  const helpers = new Helpers()
  return (
    <PriceBox>
      <div className="row">
        <div className="col-4 text">Produtos</div>
        <div className="offset-4 col-4 price">{helpers.formatPrice(totals.precototal)}</div>
      </div>
      <div className="row">
        <div className="col-4 text">Frete</div>
        <div className="offset-4 col-4 price">{helpers.formatPrice(totals.frete)}</div>
      </div>
      <div className="row desconto">
        <div className="col-4 text">Deconto</div>
        <div className="offset-4 col-4 price">{helpers.formatPrice(totals.desconto)}</div>
      </div>
      <div className="row preco">
        <div className="col-4 text">Total</div>
        <div className="offset-4 col-4 price">{helpers.formatPrice(totals.total)}</div>
      </div>
    </PriceBox>
  )
}

export default Totalcolumn
