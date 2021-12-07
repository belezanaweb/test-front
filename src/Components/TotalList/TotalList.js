import React, { useContext } from 'react'

import RowList from '../RowList/RowList'
import DataContext from '../../Store/DataContext'
import './TotalList.css'

const TotalList = () => {
  const context = useContext(DataContext)
  const product = context.state?.products
  return (
    <div className="TotalList">
      <RowList colname="produto" colvalue={product?.subTotal} color="#212122" space="9px" />
      <RowList colname="frete" colvalue={product?.shippingTotal} color="#212122" space="8px" />
      <RowList colname="desconto" colvalue={product?.discount} color="#FF7800" space="16px" />
      <RowList colname="total" colvalue={product?.total} color="#212122" weight="700" />
    </div>
  )
}

export default TotalList
