import React from 'react'
import { mask } from 'remask'
import { Container, Content } from './styles'

import successImg from '../../../../assets/success.png'
import Image from '../../../../components/Helper/Image'

const Confirmation = ({ form }) => {
  const { values } = form

  const last4Digits = String(values.cardNumber).slice(-4)

  return (
    <Container>
      <Image className="img" src={successImg} alt="Sucesso" />

      <h3>PAGAMENTO</h3>

      <Content>
        <span>{'****.****.****.'.concat(last4Digits)}</span>
        <span>{values?.name?.toUpperCase()}</span>
        <span>{mask(values.validity, ['99/9999'])}</span>
      </Content>
    </Container>
  )
}

export default Confirmation
