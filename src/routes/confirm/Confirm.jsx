import React from 'react'
import { Col, Row } from 'antd'
import Header from '../../components/header/Header'
import './Confirm.css'

const Confirm = () => {
  return (
    <>
      <Header />
      <Row className="confirmBody">
        <Row className="confirmCard">
          <Col className="confirmLabel">CONFIRMAÇÃO</Col>
        </Row>
      </Row>
    </>
  )
}

export default Confirm
