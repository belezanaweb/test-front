import React from 'react'

import { AiOutlineShopping } from 'react-icons/ai'
import { MdPayment } from 'react-icons/md'
import { MdCheck } from 'react-icons/md'

import { Container } from './styles'

export default function Header() {
  return (
    <Container>
      <div>
        <AiOutlineShopping className="icon" />
        <p>Sacola</p>
      </div>
      <div>
        <MdPayment className="icon" />
        <p>Pagamento</p>
      </div>
      <div>
        <MdCheck className="icon" />
        <p>Confirmação</p>
      </div>
    </Container>
  )
}
