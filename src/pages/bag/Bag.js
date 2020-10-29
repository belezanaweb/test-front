import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import Paper from '../../components/paper'
import ProductBox from '../../pageComponents/productBox'
import TotalProductBox from '../../pageComponents/totalProductBox'
import Button from '../../components/button'

import getBagProducts from './bag.service'
import LOAD_BAG from '../../store/actionTypes/bag'
import { CHANGE_POSITION } from '../../store/actionTypes/breadcrumb'

const Bag = ({ history }) => {
  const bag = useSelector((state) => state.bag)
  const dispatch = useDispatch()

  useEffect(() => {
    async function getProducts() {
      const data = await getBagProducts()
      dispatch({ type: LOAD_BAG, bag: data })
    }

    dispatch({
      type: CHANGE_POSITION,
      breadcrumbLabel: 'sacola'
    })

    getProducts()
  }, [dispatch])

  const goToPaymentPage = () => {
    history.push('/payment')
  }

  return (
    <>
      {bag && bag.items && bag.items.length > 0 && (
        <>
          <Paper title="Produtos" padding="12px 12px 13px 13px">
            <ProductBox products={bag.items} />
          </Paper>
          <TotalProductBox
            total={bag.total}
            discount={bag.discount}
            subTotal={bag.subTotal}
            shippingTotal={bag.shippingTotal}
          />
          <Button onClick={() => goToPaymentPage()}>Seguir para o pagamento</Button>
        </>
      )}
    </>
  )
}

Bag.defaultProps = {
  history: {}
}

Bag.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
}

export default Bag
