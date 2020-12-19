import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import style from './cart.module.css'

import Sale from '../../components/sale/Sale'
import SaleService from '../../services/SaleService'
import { fillSale } from '../../states/actions'

const Cart = () => {
  const [sale, setSale] = useState()

  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    SaleService.loadData()
      .then((saleData) => {
        setSale(saleData.data)
        dispatch(fillSale(saleData.data))
      })
      .catch(() => showLoadDataError())
  }, [dispatch])

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
