import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import style from './cart.module.css'

import Sale from '../../components/sale/Sale'
import SaleService from '../../services/SaleService'
import { saveSale } from '../../states/actions'
import Total from '../../components/total/Total'

const Cart = () => {

  const sale = useSelector((state) => {
    return state.saleState.sale
  })
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    if (!sale)
    SaleService.loadData()
      .then((saleData) => {
        dispatch(saveSale(saleData.data))
      })
      .catch(() => showLoadDataError())
  }, [sale, dispatch])

  const showLoadDataError = () => {
    Swal.fire({
      icon: 'error',
      title: 'Ops!',
      text: 'Não foi possível recuperar os dados da sua compra, tente novamente mais tarde.',
      confirmButtonColor: '#ff6c00',
      confirmButtonText: 'Fechar'
    })
  }

  const handleGoToPayment = () => {
    history.push('/payment')
  }

  if (sale) {
    return (
      <div>
        <Sale sale={sale} />
        <Total sale={sale} />
        <section className={style.cta}>
          <button className={style.ctaButton} onClick={handleGoToPayment}>
            Seguir para o pagamento
          </button>
        </section>
      </div>
    )
  }
  return <h3 className={style.loadMessage}>Carregando...</h3>
}

export default Cart
