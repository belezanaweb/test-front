import React, { useContext } from 'react'
import * as S from './Payment.styled'
import Header from '../../components/Header/Header'
import Title from '../../components/Title/Title'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import CartContext from '../../context/CartContext'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import { useNavigate } from 'react-router-dom'

const Payment = () => {
  const {
    number,
    setNumber,
    name,
    setName,
    expiry,
    setExpiry,
    cvc,
    setCvc,
    subTotal,
    total,
    shippingTotal,
    discount
  } = useContext(CartContext)

  const changeParse = (int) => {
    parseFloat(int).toFixed(2)
    return int.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/sucess')
  }

  // Validation
  const NUMBER_LENGTH = 16
  const NAME_LENGTH = 8
  const CVV_LENGTH = 3
  const EXPIRY_LENGTH = 7

  let valid = true
  if (
    number.length >= NUMBER_LENGTH &&
    name.length >= NAME_LENGTH &&
    expiry.length >= EXPIRY_LENGTH &&
    cvc.length >= CVV_LENGTH
  ) {
    valid = false
  } else {
    valid = true
  }

  return (
    <S.PaymentBackgroud>
      <Header page={1} />
      <S.PaymentDiv>
        <Title text="CARTÃO DE CREDITO" />
        <Cards number={number} name={name} expiry={expiry} cvc={cvc} />
        <S.PaymentWrapper>
          <Input
            type="tel"
            name="number"
            id="card"
            required
            value={number}
            maxLength={16}
            pattern="(?:0[1-9]|1[0-2])/[0-9]{2})"
            size={320}
            title="Número do cartão:"
            placeholder="____.____.____.____"
            onChange={(e) => setNumber(e.target.value)}
          />
          <Input
            type="text"
            name="name"
            id="card"
            value={name}
            maxLength={16}
            size={320}
            title="Nome do Titular:"
            placeholder="Como no cartão"
            onChange={(e) => setName(e.target.value)}
          />
          <div className="input-wrapper">
            <Input
              type="text"
              value={expiry}
              id="card"
              maxLength={7}
              size={160}
              title="Validade (mês/ano):"
              onChange={(e) => setExpiry(e.target.value)}
              placeholder="__/____"
            />
            <Input
              type="tel"
              name="cvc"
              id="card"
              value={cvc}
              maxLength={3}
              size={140}
              title="CVV:"
              placeholder="___"
              onChange={(e) => setCvc(e.target.value)}
            />
          </div>
        </S.PaymentWrapper>
        <S.PaymentValuesWrapper>
          <div className="products-display">
            <S.PaymentValuesP>PRODUTOS</S.PaymentValuesP>
            <p> {changeParse(subTotal)}</p>
          </div>
          <div className="products-display">
            <S.PaymentValuesP>FRETE</S.PaymentValuesP>
            <p> {changeParse(shippingTotal)}</p>
          </div>
          <div className="products-display">
            <S.PaymentValuesP color="#FF7800">DESCONTO</S.PaymentValuesP>
            <p color="#FF7800" className="change-color">
              {'- ' + changeParse(discount)}
            </p>
          </div>
          <div className="products-display">
            <S.PaymentValuesP>
              <strong>TOTAL</strong>
            </S.PaymentValuesP>
            <p>
              <strong>{changeParse(total)}</strong>
            </p>
          </div>
        </S.PaymentValuesWrapper>
        <Button
          id="disable-btn"
          disabled={valid}
          onClick={handleClick}
          text={valid ? 'PREENCHA OS DADOS' : 'FINALIZAR O PEDIDO'}
        />
      </S.PaymentDiv>
    </S.PaymentBackgroud>
  )
}

export default Payment
