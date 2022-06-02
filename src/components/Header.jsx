import React from 'react'
import { Link } from 'react-router-dom'
import { PageHeader, Col, Row } from 'antd'
import './Header.css'

const Header = () => (
  <PageHeader>
    <Row>
      <Col>
        <Link className="link" to="/cart">
          SACOLA
        </Link>
      </Col>
      <Col>PAGAMENTO</Col>
      <Col>CONFIRMAÇÃO</Col>
    </Row>
  </PageHeader>
)

export default Header
