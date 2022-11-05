import { useNavigate } from 'react-router-dom'
// import { useState } from 'react'
import Total from '../Components/Total'
import styles from './Payment.module.css'
// import Context from '../Context/Context'

export default function Payment({ children }) {
  const navigate = useNavigate()
  const goToConfirmation = () => {
    navigate('/confirmation')
  }

  // const [ number, setNumber ] = useState();

  // const handleChangeNumber = (e) => {
  //   setNumber(e.target.value)
  //   console.log(number);
  // }

  return (
    <div>
      {/* <Context.Provider value={number}>{children} */}
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
                  // onChange={handleChangeNumber}
                  className={styles.input}
                  id="numero"
                  name="numero"
                  placeholder="_ _ _ _ - _ _ _ _ - _ _ _ _ - _ _ _ _ "
                ></input>
              </label>
            </div>
          </div>
          <div className={styles.Card}>
            <label className={styles.cardName}>
              Nome do Titular
              <input
                className={styles.inputName}
                id="nome"
                name="nome"
                placeholder="Como no cartão"
                // onChange={handleChangeName}
              ></input>
            </label>
          </div>
          <div className={styles.Card}>
            {/* <div className={styles.validationCVV}> */}
            <div className={styles.cardYear}>
              Validade (mês/ano)
              <input
                // onChange={handleChangeDate}
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
              // onChange={handleChangeCvv}
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
        <button className={styles.button} onClick={goToConfirmation}>
          FINALIZAR O PEDIDO
        </button>
      </main>
      {/* </Context.Provider> */}
    </div>
  )
}
