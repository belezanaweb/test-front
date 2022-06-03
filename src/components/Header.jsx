import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'antd'
import './Header.css'

const Header = () => (
  <Row className="steps">
    <Row className="stepLabel">
      <Col>
        <Link className="link" to="/cart">
          <div className="cart">SACOLA</div>
        </Link>
      </Col>
      <Col>
        <div className="payment">PAGAMENTO</div>
      </Col>
      <Col>
        <div className="confirm">CONFIRMAÇÃO</div>
      </Col>
    </Row>
  </Row>
)

export default Header
