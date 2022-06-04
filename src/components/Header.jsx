import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { setIsCartActive } from '../reducer/Cart'
import { setIsConfirmActive } from '../reducer/Confirm'
import { setIsPaymentActive } from '../reducer/Payment'
import { useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const isCartActive = useSelector((state) => state.cart.isCartActive)
  const isConfirmActive = useSelector((state) => state.confirm.isConfirmActive)
  const isPaymentActive = useSelector((state) => state.payment.isPaymentActive)

  const routes = {
    '/cart': setIsCartActive,
    '/confirm': setIsConfirmActive,
    '/payment': setIsPaymentActive
  }

  const setCurrentRoute = () => {
    const setActive = routes[location.pathname]
    if (setActive) {
      dispatch(setActive(true))
    }
  }

  useEffect(() => {
    dispatch(setIsCartActive(false))
    dispatch(setIsConfirmActive(false))
    dispatch(setIsPaymentActive(false))
    setCurrentRoute()
  }, [location])

  return (
    <Row className="steps">
      <Row className="stepLabel">
        <Col>
          <Link
            onClick={() => {
              dispatch(setIsCartActive(true))
            }}
            className="link"
            to="/cart"
          >
            <div className={`cart ${isCartActive && 'labelActive'}`}>SACOLA</div>
          </Link>
        </Col>
        <Col>
          <Link
            onClick={() => {
              dispatch(setIsPaymentActive(true))
            }}
            className="link"
            to="/payment"
          >
            <div className={`payment ${isPaymentActive && 'labelActive'}`}>PAGAMENTO</div>
          </Link>
        </Col>
        <Col>
          <Link
            onClick={() => {
              dispatch(setIsConfirmActive(true))
            }}
            className="link"
            to="/confirm"
          >
            <div className={`confirm ${isConfirmActive && 'labelActive'}`}>CONFIRMAÇÃO</div>
          </Link>
        </Col>
      </Row>
    </Row>
  )
}

export default Header
