import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

import style from './cart.module.css'

import Sale from '../../components/sale/Sale'
import SaleService from '../../services/SaleService'

const Cart = () => {
  const [sale, setSale] = useState(null)

  //Hook executed after component is rendered, used here for load data
  useEffect(() => {
    SaleService.loadData()
      .then((saleData) => setSale(saleData.data))
      .catch(() =>
        Swal.fire({
          icon:'error',
          title:'Ops!',
          text:'Não foi possível recuperar os dados da sua compra, tente novamente mais tarde.',
          confirmButtonColor: '#ff6c00',
          confirmButtonText: 'Fechar',
        })
      )
  }, [])

  if (sale) {
    return (
      <div>
        <Sale sale={sale} />
        <section className={style.cta}>
          <button className={style.ctaButton}>Seguir para o pagamento</button>
        </section>
      </div>
    )
  }
  return <h3 className={style.loadMessage}>Carregando...</h3>
}

export default Cart
