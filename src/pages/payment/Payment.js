import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames/bind'
import { useHistory } from 'react-router-dom'
import NumberFormat from 'react-number-format'
import Swal from 'sweetalert2'

import styles from './payment.module.css'

import Total from '../../components/total/Total'
import {
  validateCreditCard,
  validateCreditCardExpiry,
  validateName,
  validateCreditCardCvv
} from '../../helpers/Validators'
import { formatCardExpiry } from '../../helpers/Formatters'
import { saveCard } from '../../states/actions'

const cx = classNames.bind(styles)

const Payment = () => {
  const [isValid, setIsValid] = useState('INVALID')
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(saveCard(null))
  }, [])

  const [card, setCard] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  })

  const [errors, setErrors] = useState({
    number: { valid: false },
    name: { valid: false },
    expiry: { valid: false },
    cvv: { valid: false }
  })

  const sale = useSelector((state) => {
    if (!state.saleState.sale) history.goBack()
    return state.saleState.sale
  })

  const handleChange = (event) => {
    const field = event.target.name
    const value = event.target.value
    const newCard = { ...card, [field]: value }
    setCard(newCard)
    validate(field, value)
  }

  const validate = (field, value) => {
    let newErrors = { ...errors }
    switch (field) {
      case 'number':
        newErrors = { ...errors, number: validateCreditCard(value) }
        break
      case 'name':
        newErrors = { ...errors, name: validateName(value) }
        break
      case 'expiry':
        newErrors = { ...errors, expiry: validateCreditCardExpiry(value) }
        break
      case 'cvv':
        newErrors = { ...errors, cvv: validateCreditCardCvv(value) }
        break
    }

    setErrors(newErrors)

    setIsValid(!Object.keys(newErrors).find((key) => !newErrors[key].valid) ? 'VALID' : 'INVALID')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (Object.keys(errors).find((key) => !errors[key].valid)) {
      Swal.fire({
        title: 'Dados Inválidos',
        text: 'Não foi possível validar os dados informados, confira os dados e tente novamente.',
        icon: 'warning',
        confirmButtonText: 'Fechar',
        confirmButtonColor: '#ff7800'
      })
      return
    }

    dispatch(saveCard(card))
    history.push('/confirmation')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <section className={styles.cardForm}>
          <header>
            <h2>Cartão de Crédito</h2>
          </header>
          <div className={styles.card}>
            <div className={cx('field', 'number', { error: !!errors.number.message })}>
              <label htmlFor="input-number">Número do cartão:</label>
              <NumberFormat
                format="####.####.####.####"
                mask="_"
                type="text"
                id="input-number"
                name="number"
                placeholder="____.____.____.____"
                value={card.number}
                onChange={handleChange}
              />
              <span className={styles.error}>{errors.number.message && errors.number.message}</span>
            </div>

            <div className={cx('field', 'name', { error: !!errors.name.message })}>
              <label htmlFor="input-number">Nome do Titular:</label>
              <input
                type="text"
                id="input-number"
                name="name"
                placeholder="Como no cartão"
                value={card.name}
                onChange={handleChange}
              />
              <span className={styles.error}>{errors.name.message && errors.name.message}</span>
            </div>

            <div className={cx('field', 'expiry', { error: !!errors.expiry.message })}>
              <label htmlFor="input-number">Validade (mês/ano):</label>
              <NumberFormat
                format={formatCardExpiry}
                type="text"
                id="input-number"
                name="expiry"
                placeholder="__/____"
                value={card.expiry}
                onChange={handleChange}
              />
              <span className={styles.error}>{errors.expiry.message && errors.expiry.message}</span>
            </div>

            <div className={cx('field', 'cvv', { error: !!errors.cvv.message })}>
              <label htmlFor="input-number">CVV:</label>
              <NumberFormat
                format="###"
                mask="_"
                type="text"
                id="input-number"
                name="cvv"
                placeholder="___"
                value={card.cvv}
                onChange={handleChange}
              />
              <span className={styles.error}>{errors.cvv.message && errors.cvv.message}</span>
            </div>
          </div>
        </section>
        {sale ? <Total sale={sale} /> : ''}
        <section className={styles.cta}>
          <button className={styles.ctaButton} type="submit" disabled={isValid == 'INVALID'}>
            Finalizar o pedido
          </button>
        </section>
      </form>
    </div>
  )
}

export default Payment
