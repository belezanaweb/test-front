import React, { useEffect } from 'react'
import useSWR from 'swr'
import URL from '../../utils/constants.js'
import { Col, Row, Spin } from 'antd'
import Header from '../../components/Header.jsx'
import './Cart.css'

const Cart = () => {
  const { data: result, error } = useSWR(URL)

  if (error) return <h1>Something went wrong!</h1>

  return (
    <>
      <Header />
      <Row className="cartBody">
        <Row className="productCard">
          {!result ? (
            <Row className="loading">
              <Col>
                <Spin />
              </Col>
            </Row>
          ) : (
            <Col className="productLabel">PRODUTOS</Col>
          )}
        </Row>
      </Row>
    </>
  )
}

export default Cart
