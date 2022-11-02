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
      <p className={styles.title}>CARTÃO DE CRÉDITO</p>
      <form className={styles.form}>
        <label className={styles.cardName}>
          Número do cartão
          <input
            className={styles.input}
            id="numero"
            name="numero"
            placeholder="_ _ _ _ - _ _ _ _ - _ _ _ _ - _ _ _ _ "
          ></input>
        </label>
        <label>
          Nome do Titular
          <input
            className={styles.input}
            id="nome"
            name="nome"
            placeholder="Como no cartão"
          ></input>
        </label>
        <label>
          Validade (mês/ano)
          <input className={styles.input} id="data" name="data" placeholder="_ _ / _ _ _ _"></input>
        </label>
        <label>
          CVV:
          <input className={styles.input} id="numero" name="numero" placeholder="_ _ _"></input>
        </label>
      </form>
      {/* <p>PRODUTOS</p> */}
      <Total />
      <button className={styles.button} onClick={goToConfirmation}>
        FINALIZAR O PEDIDO
      </button>
    </div>
  )
}
