import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { useSelector, useDispatch } from 'react-redux'
import { CHANGE_POSITION } from '../../store/actionTypes/breadcrumb'

import Paper from '../../components/paper'
import ProductBox from '../../pageComponents/productBox'
import TotalProductBox from '../../pageComponents/totalProductBox'
import { ConfirmationInfo, ConfirmationMessage } from './confirmation.style'
import doneIcon from './assets/done-icon.png'

const Confirmation = ({ history }) => {
  const dispatch = useDispatch()

  const bag = useSelector((state) => state.bag)
  const creditCard = useSelector((state) => state.creditCard)

  const [creditCardNumber, setCreditCardNumber] = useState('')

  const hideCardNumber = (number) => {
    if (!number) return ''
    const blocks = number.split('.')
    const blockToBeHidden = blocks.slice(0, -1)
    const preparedBlocks = blockToBeHidden.map(() => '****')
    preparedBlocks.push(blocks[blocks.length - 1])
    return preparedBlocks.join('.')
  }

  useEffect(() => {
    if (!bag || !bag.items) {
      history.push('/')
    }
  }, [bag, history])

  useEffect(() => {
    dispatch({
      type: CHANGE_POSITION,
      breadcrumbLabel: 'confirmação'
    })
  }, [dispatch])

  useEffect(() => {
    if (!creditCard) {
      history.push('/')
    }
    setCreditCardNumber(hideCardNumber(creditCard.cardNumber))
  }, [creditCard, history])

  return (
    <>
      {bag && bag.items && bag.items.length > 0 && (
        <>
          <ConfirmationMessage>
            <img alt="ícone de confirmação" src={doneIcon} />
            <div>Compra efetuada com sucesso</div>
          </ConfirmationMessage>
          <Paper title="Pagamento" spacedTitle>
            <ConfirmationInfo>
              <div>{creditCardNumber}</div>
              <div>{creditCard.name}</div>
              <div>{creditCard.validDate}</div>
            </ConfirmationInfo>
          </Paper>
          <Paper title="Produtos" spacedTitle padding="12px 12px 13px 13px">
            <ProductBox products={bag.items} showPrice={false} />
          </Paper>
          <TotalProductBox
            total={bag.total}
            discount={bag.discount}
            subTotal={bag.subTotal}
            shippingTotal={bag.shippingTotal}
          />
        </>
      )}
    </>
  )
}

Confirmation.defaultProps = {
  history: {}
}

Confirmation.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
}

export default Confirmation
