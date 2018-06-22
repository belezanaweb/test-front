import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import classNames from 'classnames'

import Total from './Total'

import './Payment.css'

class Payment extends Component {

  state = {
    invalidCc: false,
    invalidName: false,
    invalidExp: false,
    invalidCvv: false,
    Cc: '',
    Name: '',
    Exp: '',
    Cvv: ''
  }

  render() {
    const { cart, format, history, setPayment } = this.props
    const { invalidCc, invalidName, invalidExp, invalidCvv, Cc, Name, Exp, Cvv } = this.state

    const handleField = e => {
      this.setState({
        [`invalid${e.target.name}`]: e.target.value === '',
        [e.target.name]: e.target.value
      })
    }

    const handlePayment = e => {
      setPayment({
        cc: Cc.replace(/_/gi, '').replace(/\./gi, ''),
        name: Name,
        exp: Exp
      })
      history.push('/confirmation')
    }

    const valid = !(invalidCc && invalidName && invalidExp && invalidCvv) && (Cc !== '' && Name !== '' && Exp !== '' && Cvv !== '')

    return (
      <div className="payment">
        <h1>Cartão de Crédito</h1>
        <div className="credit-card grid-noGutter">
          <div className="field col-12">
            <label>Número do cartão:</label>
            <InputMask mask="9999.9999.9999.9999" className={classNames({'invalid': invalidCc})} name="Cc" onBlur={handleField} placeholder="____.____.____.____" />
            {invalidCc && <span className="error">Campo inválido</span>}
          </div>
          <div className="field col-12">
            <label>Nome do titular:</label>
            <input type="text" placeholder="Como no cartão" className={classNames({'invalid': invalidName})} name="Name" onBlur={handleField} maxLength="144" />
            {invalidName && <span className="error">Campo inválido</span>}
          </div>
          <div className="field col-6">
            <label>Validade (mês/ano):</label>
            <InputMask mask="99/9999" className={classNames({'invalid': invalidExp})} name="Exp" onBlur={handleField} placeholder="__/____" />
            {invalidExp && <span className="error">Campo inválido</span>}
          </div>
          <div className="field col-5" data-push-left="off-1">
            <label>CVV:</label>
            <InputMask mask="999" className={classNames({'invalid': invalidCvv})} name="Cvv" onBlur={handleField} placeholder="___" />
            {invalidCvv && <span className="error">Campo inválido</span>}
          </div>
        </div>
        <Total
          values={cart}
          format={format} />
        <button disabled={!valid} onClick={handlePayment}>Finalizar o pedido</button>
      </div>
    )
  }
}

export default Payment
