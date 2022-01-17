import React, { useContext } from 'react'
import { createUseStyles } from 'react-jss'
import { FormContext } from '../../components/Context/FormContext'
import HeaderText from '../HeaderText/HeaderText'
import Card from '../Card/Card'

const useStyles = createUseStyles({
  paymentSummary: {
    textTransform: 'uppercase',
    width: '100%',
    minWidth: '320px',
    maxWidth: '600px',
    margin: '0 auto'
  },
  summaryRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '26px',
    textTransform: 'uppercase'
  },
  discount: {
    color: '#FF6C00'
  },
  total: {
    marginTop: '10px',
    fontWeight: 'bold'
  }
})

const PaymentSummary = () => {
  const classes = useStyles()
  const formContext = useContext(FormContext)

  const renderSummaryRows = () => {
    return (
      <>
        <div className={classes.summaryRow}>
          <span>{`****.****.****.${formContext.formFieldsValues.creditCard.slice(12)}`}</span>
        </div>
        <div className={classes.summaryRow}>
          <span>{formContext.formFieldsValues.holderName}</span>
        </div>
        <div className={classes.summaryRow}>
          <span>{formContext.formFieldsValues.expiryDate}</span>
        </div>
      </>
    )
  }

  return (
    <>
      <HeaderText>Pagamento</HeaderText>
      <div className={classes.paymentSummary}>
        <Card>{renderSummaryRows()}</Card>
      </div>
    </>
  )
}

export default PaymentSummary
