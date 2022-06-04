import React, { useEffect } from 'react'
import useSWR from 'swr'
import URL from '../../utils/constants.js'
import { Col, Row } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { setTotal } from '../../reducer/Cart'
import Header from '../../components/Header.jsx'
import './Cart.css'

const Cart = () => {
  const { data: result, error } = useSWR(URL)
  const dispatch = useDispatch()

  useEffect(() => {
    if (result) {
      dispatch(setTotal(result.total))
    }
  }, [result])

  if (error) return <h1>Something went wrong!</h1>
  if (!result) return <h1>Loading...</h1>

  return (
    <>
      <Header />
      <Row className="cartBody">
        <Row className="productCard">
          <Col className="productLabel">PRODUTOS</Col>
        </Row>
      </Row>
    </>
  )
}

export default Cart
