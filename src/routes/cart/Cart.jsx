import React, { useEffect } from 'react'
import useSWR from 'swr'
import URL from '../../utils/constants.js'
import { Col, Row, Spin } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../../components/header/Header.jsx'
import { setCartInfo } from '../../reducer/Cart'
import { productContent, totalContent } from './Product'
import './Cart.css'

const Cart = () => {
  const { data: result, error } = useSWR(URL)
  const dispatch = useDispatch()
  const cartInfo = useSelector((state) => state.cart.cartInfo)

  useEffect(() => {
    dispatch(setCartInfo(result))
  }, [result])

  if (error) return <h1>Something went wrong!</h1>

  return (
    <>
      <Header />
      <Row className="cartBody">
        <div className="productCard">
          {!cartInfo ? (
            <Row className="loading">
              <Col>
                <Spin />
              </Col>
            </Row>
          ) : (
            <>
              <Row>
                <Col className="productLabel">PRODUTOS</Col>
              </Row>
              <Row>
                <div className="productBody">{productContent(cartInfo.items, 'productItem')}</div>
              </Row>
              <Row>{totalContent(cartInfo.items, 'total')}</Row>
            </>
          )}
        </div>
      </Row>
    </>
  )
}

export default Cart
