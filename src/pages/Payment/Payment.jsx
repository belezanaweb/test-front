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
            value={number}
            size={320}
            title="Número do cartão:"
            placeholder="____.____.____.____"
            onChange={(e) => setNumber(e.target.value)}
          />
          <Input
            type="text"
            name="name"
            value={name}
            size={320}
            title="Nome do Titular:"
            placeholder="Como no cartão"
            onChange={(e) => setName(e.target.value)}
          />
          <div className="input-wrapper">
            <Input
              type="number"
              value={expiry}
              size={160}
              title="Validade (mês/ano):"
              pattern="(?:0[1-9]|1[0-2])/[0-9]{2}"
              onChange={(e) => setExpiry(e.target.value)}
              placeholder="__/____"
            />
            <Input
              type="tel"
              name="cvc"
              value={cvc}
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
        <Button onClick={handleClick} text="FINALIZAR O PEDIDO" />
      </S.PaymentDiv>
    </S.PaymentBackgroud>
  )
}

export default Payment
