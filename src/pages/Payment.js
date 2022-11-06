import { useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import Total from '../Components/Total'
import styles from './Payment.module.css'
import Context from '../Context/Context'

export default function Payment() {
  const navigate = useNavigate()
  const goToConfirmation = () => {
    navigate('/confirmation')
  }

  // const MIN_LENGTH = 15;

  const { handleChangeNumber } = useContext(Context)
  const { handleChangeName } = useContext(Context)
  const { handleChangeDate } = useContext(Context)
  const { handleChangeCvv } = useContext(Context)
  // const { isDisable, setIsDisable } = useContext(Context)
  // const { doubleFunction } = useContext(Context)
  // const cardValidation = /^[0-9]{16}$/i
  const cardValidation = 4444444444444444
  const [isDisable, setIsDisable] = useState(false)
  const { number, cvv } = useContext(Context)

  // if (
  //   typeof number !== 'number' ||
  //   typeof name !== 'string' ||
  //   typeof date !== 'number' ||
  //   typeof cvv !== 'number'
  // ) {
  //   // setIsDisable(true)
  //   console.log('ERRRRAAADOO')
  // }
  console.log(number)
  // console.log(cvv)

  const handleValidation = () => {
    console.log('number esta passando')
    // if (number.test(cardValidation)) {
    //   setIsDisable(false)
    // } else if (!number.match(cardValidation)) {
    //   setIsDisable(true)
    // }
  }

  // const doubleFunction = () => {
  //   handleChangeNumber();
  //   handleValidation();
  // }

  return (
    <div>
      <header>
        <ul className={styles.header}>
          <li>SACOLA</li>
          <li className={styles.cart}>PAGAMENTO</li>
          <li>CONFIRMAÇÃO</li>
        </ul>
      </header>
      <main>
        <p className={styles.title}>CARTÃO DE CRÉDITO</p>
        <form data-testid="payment-form" className={styles.form}>
          <div className={styles.Card}>
            <div className={styles.card}>
              <label className={styles.cardNumber}>
                Número do cartão
                <input
                  // type="number"
                  maxLength="16"
                  onChange={handleChangeNumber}
                  className={styles.input}
                  id="number"
                  name="number"
                  placeholder="_ _ _ _ - _ _ _ _ - _ _ _ _ - _ _ _ _ "
                ></input>
              </label>
            </div>
          </div>
          <div className={styles.Card}>
            <label className={styles.cardName}>
              Nome do Titular
              <input
                type="text"
                onChange={handleChangeName}
                className={styles.inputName}
                id="nome"
                name="nome"
                placeholder="Como no cartão"
              ></input>
            </label>
          </div>
          <div className={styles.Card}>
            {/* <div className={styles.validationCVV}> */}
            <div className={styles.cardYear}>
              Validade (mês/ano)
              <input
                maxLength="7"
                // type="number"
                onChange={handleChangeDate}
                className={styles.inputVal}
                id="data"
                name="data"
                placeholder="_ _ / _ _ _ _"
              ></input>
            </div>
          </div>
          <div className={styles.cardCVV}>
            CVV:
            <input
              // type="number"
              maxLength="3"
              onChange={handleChangeCvv}
              className={styles.inputVal}
              id="numero"
              name="numero"
              placeholder="_ _ _"
            ></input>
          </div>
        </form>
        <div className={styles.total}>
          <Total />
        </div>
        <button
          type="button"
          disabled={isDisable}
          className={styles.button}
          onClick={goToConfirmation}
        >
          FINALIZAR O PEDIDO
        </button>
      </main>
    </div>
  )
}
