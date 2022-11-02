import { useNavigate } from 'react-router-dom'
import Total from '../Components/Total'
import styles from './Payment.module.css'

export default function Payment() {
  const navigate = useNavigate()
  const goToConfirmation = () => {
    navigate('/confirmation')
  }

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
        <form className={styles.form}>
          <div className={styles.Card}>
            <label className={styles.cardNumber}>
              Número do cartão
              <input
                className={styles.input}
                id="numero"
                name="numero"
                placeholder="_ _ _ _ - _ _ _ _ - _ _ _ _ - _ _ _ _ "
              ></input>
            </label>
          </div>
          <div className={styles.Card}>
            <label className={styles.cardName}>
              Nome do Titular
              <input
                className={styles.inputName}
                id="nome"
                name="nome"
                placeholder="Como no cartão"
              ></input>
            </label>
          </div>
          <div className={styles.Card}>
            {/* <div className={styles.validationCVV}> */}
            <label className={styles.cardYear}>
              Validade (mês/ano)
              <input
                className={styles.input}
                id="data"
                name="data"
                placeholder="_ _ / _ _ _ _"
              ></input>
            </label>
          </div>
          <label className={styles.cardCVV}>
            CVV:
            <input className={styles.input} id="numero" name="numero" placeholder="_ _ _"></input>
          </label>
        </form>
        <div className={styles.total}>
          <Total />
        </div>
        <button className={styles.button} onClick={goToConfirmation}>
          FINALIZAR O PEDIDO
        </button>
      </main>
    </div>
  )
}
