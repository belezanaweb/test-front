import React from 'react'
import { Link } from 'react-router-dom'
import { PageHeader, Col, Row } from 'antd'

const Header = () => (
  <PageHeader>
    <Row>
      <Col>
        <Link to="/cart">SACOLA</Link>
      </Col>
      <Col>PAGAMENTO</Col>
      <Col>CONFIRMAÇÃO</Col>
    </Row>
  </PageHeader>
)

export default Header
