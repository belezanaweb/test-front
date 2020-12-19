import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import Sale from '../../components/sale/Sale'
import Total from '../../components/total/Total'
import styles from './confirmation.module.css'

const Confirmation = () => {
  const history = useHistory()
  const { sale, card } = useSelector((state) => {
    if (!state.saleState.sale) history.goBack()

    if (!state.cardState.card) {
      Swal.fire({
        title: 'Ops!',
        text: 'Informe os dados do cartão!',
        icon: 'error',
        timer: 5000,
        confirmButtonText: 'Fechar',
        confirmButtonColor: '#ff7800'
      }).then(() => history.push('/payment'))
    }
    return { sale: state.saleState.sale, card: state.cardState.card }
  })

  return (
    <div>
      {sale && card && card.number && (
        <>
          <section className={styles.success}>
            <img src="./check.svg" alt="Ok" />
            <h3>Compra efetuada com sucesso</h3>
          </section>

          <section className={styles.creditCard}>
            <header>
              <h2>Cartão de Crédito</h2>
            </header>
            <div className={styles.card}>
              <p>****.****.****.{card.number.split('.')[3]}</p>
              <p>{card.name}</p>
              <p>{card.expiry}</p>
            </div>
          </section>

          <Sale sale={sale} />
          <Total sale={sale} />
        </>
      )}
    </div>
  )
}

export default Confirmation
