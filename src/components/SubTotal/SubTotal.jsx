import React from 'react'
import {
  DivTotal,
  ContainerTotalInfos,
  TotalInfos,
  ToTalValue
} from '../../styles/Products/Products'
import { Discount, ValuesInfo } from '../../styles/SubTotal/SubTotal'
import { formatBrl } from '../../utils'

export default function SubTotal({ dataEndPoint }) {
  return (
    <>
      <DivTotal>
        <TotalInfos>
          <ContainerTotalInfos>
            <ValuesInfo>Produtos</ValuesInfo>
            <ValuesInfo>{formatBrl(dataEndPoint.subTotal)}</ValuesInfo>
          </ContainerTotalInfos>
          <ContainerTotalInfos>
            <ValuesInfo>ContainerTotalInfos</ValuesInfo>
            <ValuesInfo>{formatBrl(dataEndPoint.shippingTotal)}</ValuesInfo>
          </ContainerTotalInfos>
          <ContainerTotalInfos>
            <Discount>Desconto</Discount>
            <Discount>-{formatBrl(dataEndPoint.discount)}</Discount>
          </ContainerTotalInfos>
          <ToTalValue>
            <ValuesInfo>Total</ValuesInfo>
            <ValuesInfo>
              {formatBrl(
                Number(dataEndPoint.subTotal + dataEndPoint.shippingTotal - dataEndPoint.discount)
              )}
            </ValuesInfo>
          </ToTalValue>
        </TotalInfos>
      </DivTotal>
    </>
  )
}
