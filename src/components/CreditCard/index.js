import React, { useState, useEffect } from 'react'
// import { useSelector } from 'react-redux'

/**
 * Reducers
 */
// import { selectCartProductsResponse } from '../../store/reducers/checkout'

/**
 * Helpers
 */
import { onlyNumbers } from '../../helpers'

/**
 * Components
 */
import { Title, Label } from '../Utils/styles'
import Input from '../Input'

/**
 * Styles
 */
import { ContainerCreditCard, Wrapper, RowInput, ColInput } from './styles'

const CreditCard = ({ handleGetInfos, infos }) => {
  // const cartProductsResponse = useSelector(selectCartProductsResponse)

  const [number, setNumber] = useState(infos?.number)
  const [name, setName] = useState(infos?.name)
  const [validity, setValidity] = useState(infos?.validity)
  const [cvv, setCvv] = useState(infos?.cvv)

  useEffect(() => {
    const isValidInfos = () => {
      try {
        if (!number || !name || !validity || !cvv) return false
        return true
      } catch (error) {
        console.log(error)
        return false
      }
    }

    handleGetInfos({ number, name, validity, cvv, valid: isValidInfos() })
    // eslint-disable-next-line
  }, [number, name, validity, cvv])

  return (
    <ContainerCreditCard>
      <Title>Credit Card</Title>
      <Wrapper>
        <RowInput>
          <Label>Number</Label>
          <Input
            placeholder="____.____.____.____"
            mask="9999.9999.9999.9999"
            onChange={(e) => setNumber(onlyNumbers(e?.target?.value))}
            value={number}
          />
        </RowInput>
        <RowInput>
          <Label>Name</Label>
          <Input
            placeholder="Same credit card"
            onChange={(e) => setName(e?.target?.value)}
            value={name}
          />
        </RowInput>
        <ColInput>
          <RowInput>
            <Label>Validity(month/year)</Label>
            <Input
              placeholder="__/____"
              mask="99/9999"
              onChange={(e) => setValidity(onlyNumbers(e?.target?.value))}
              value={validity}
            />
          </RowInput>
          <RowInput>
            <Label>CVV</Label>
            <Input
              placeholder="___"
              mask="999"
              onChange={(e) => setCvv(onlyNumbers(e?.target?.value))}
              value={cvv}
            />
          </RowInput>
        </ColInput>
      </Wrapper>
    </ContainerCreditCard>
  )
}

export default CreditCard
