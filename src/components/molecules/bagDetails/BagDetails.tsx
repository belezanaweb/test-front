import React from 'react'
import { formatValueToBRL } from '../../../utils/currency'
import { Button, Paper } from '../../atoms'
import {
  BagDetailsItem,
  BagDetailsLabel,
  BagDetailsList,
  BagDetailsValue,
  Container
} from './BagDetails.style'

type ButtonData = {
  label: string
  action: () => void
  disabled?: boolean
}

export interface BagDetailsProps {
  bag: ProductBag
  buttonData?: ButtonData
}

export const BagDetails = ({ bag, buttonData }: BagDetailsProps) => {
  const details = [
    { label: 'produtos', value: bag.subTotal },
    { label: 'frete', value: bag.shippingTotal },
    { label: 'desconto', value: bag.discount },
    { label: 'total', value: bag.total }
  ]

  return (
    <Container>
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
      {buttonData && (
        <Button onClick={buttonData.action} disabled={buttonData.disabled}>
          {buttonData.label}
        </Button>
      )}
    </Container>
  )
}
