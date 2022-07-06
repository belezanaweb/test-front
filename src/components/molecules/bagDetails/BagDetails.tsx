import React from 'react'
import { formatValueToBRL } from '../../../utils/currency'
import { Paper } from '../../atoms'
import {
  BagDetailsItem,
  BagDetailsLabel,
  BagDetailsList,
  BagDetailsValue
} from './BagDetails.style'

interface BagDetailsProps {
  bag: ProductBag
}

export const BagDetails = ({ bag }: BagDetailsProps) => {
  const details = [
    { label: 'produtos', value: bag.subTotal },
    { label: 'frete', value: bag.shippingTotal },
    { label: 'desconto', value: bag.discount },
    { label: 'total', value: bag.total }
  ]

  return (
    <Paper isSolid={false}>
      <BagDetailsList>
        {details.map(({ label, value }) => {
          const isDiscount = label === 'desconto'
          const isTotal = label === 'total'
          return (
            <BagDetailsItem key={label} highlight={isDiscount} bold={isTotal}>
              <BagDetailsLabel>{label}</BagDetailsLabel>
              <BagDetailsValue>{`${isDiscount ? '- ' : ''} ${formatValueToBRL(
                value
              )}`}</BagDetailsValue>
            </BagDetailsItem>
          )
        })}
      </BagDetailsList>
    </Paper>
  )
}
