import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { CardMask, DataMask, HideCardMask } from '../../utils/masks'
import { useHistory } from 'react-router-dom'
// components
import Title from '../../components/Title'
import PricesList from '../../components/PricesList'

//API
import Checkout from '../../api/checkout'

const checkout = new Checkout()

const Pagamento = () => {

  const history = useHistory()

  const [checkoutState, setCheckoutState] = useState('')
  const { register, handleSubmit, errors } = useForm()

  // Inputs States
  const [cardNumberState, setCardNumberState] = useState('')
  const [cardNameState, setCardNameState] = useState('')
  const [cardDataState, setCardDataState] = useState('')
  const [cardCvvState, setCardCvvState] = useState('')

  // Masks
  const cardMask = (e) => {
    setCardNumberState( CardMask(e) )
  }
  const dataMask = (e) => {
    setCardDataState ( DataMask(e) )
  }

  // Send Informations
  const onSubmit = data => {
    if(errors.length >= 1) {
      return
    } else {
      let today = new Date().toLocaleDateString()
      window.localStorage.setItem('cardNumber', HideCardMask(cardNumberState))
      window.localStorage.setItem('name', cardNameState)
      window.localStorage.setItem('date', today)
      history.push("/confirmacao");
    }
  }

  useEffect( () => {
    async function getData() {
      const checkoutData = await checkout.get('5b15c4923100004a006f3c07')
      setCheckoutState(checkoutData.data)
    }
    getData()
  }, [])

  return (

    <div className="container">
      <form onSubmit={ handleSubmit(onSubmit) }>

        <div className="container__content">

          <Title title="Cartão de Crédito" />

          <div className="card credit-card">

              <div className="container-input">
                <label className="container-input__label">
                  Número do cartão:
                </label>
                <input
                  placeholder="____.____.____.____"
                  className="container-input__input"
                  type="text"
                  name="card"
                  value={ cardNumberState }
                  onChange={ (e) => { cardMask(e.target.value) } }
                  ref={ register({ required: true, minLength: 19 } )}
                  maxLength="19"
                />
                { errors.card && <span className="input-erro">Campo Obrigatório</span> }
              </div>

              <div className="container-input">
                <label className="container-input__label">
                  Nome do Titular:
                </label>
                <input
                  className="container-input__input"
                  placeholder="Como no cartão"
                  name="name"
                  value={ cardNameState }
                  ref={ register({ required: true, minLength: 10 } )}
                  onChange={ (e) => { setCardNameState(e.target.value) } }
                />
                { errors.name && <span className="input-erro">Campo Obrigatório</span> }
              </div>

              <div className="container-input-flex">

                <div className="container-input">
                  <label className="container-input__label">
                    Validade (mês/ano):
                  </label>
                  <input
                    mask="99/9999"
                    placeholder="__/____"
                    className="container-input__input"
                    type="text"
                    name="data"
                    value={ cardDataState }
                    maxLength="7"
                    ref={ register({ required: true, maxLength: 7 } )}
                    onChange={ (e) => { dataMask(e.target.value) } }
                  />
                  { errors.data && <span className="input-erro">Campo Obrigatório</span> }
                </div>

                <div className="container-input">
                  <label className="container-input__label">
                    CVV:
                  </label>
                  <input
                    placeholder="___"
                    className="container-input__input"
                    type="text"
                    name="cvv"
                    maxLength="3"
                    value={ cardCvvState }
                    ref={ register({ required: true, minLength: 3 } )}
                    onChange={ (e) => { setCardCvvState(e.target.value.replace(/\D/g, '')) } }
                  />
                  { errors.cvv && <span className="input-erro">Campo Obrigatório</span> }
                </div>

              </div>
          </div>

          <PricesList items={ checkoutState } />

          <button
            className="botao"
            type="submit"
          >
            finalizar pedido
          </button>

        </div>

      </form>

    </div>

  )

}

export default Pagamento
