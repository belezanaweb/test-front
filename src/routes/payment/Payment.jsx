import React from 'react'
import { Col, Row } from 'antd'
import Header from '../../components/header/Header'
import './Payment.css'

const Payment = () => {
  return (
    <>
      <Header />
      <Row className="paymentBody">
        <Row className="paymentCard">
          <Col className="paymentLabel">PAGAMENTO</Col>
        </Row>
      </Row>
    </>
  )
}

export default Payment
