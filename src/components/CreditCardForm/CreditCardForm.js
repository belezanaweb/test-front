import React from 'react'
import Input from '../Input/Input'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  creditCardForm: {
    width: '100%',
    padding: '12px 10px 0',
    margin: '0 auto',
    boxSizing: 'border-box',
    display: 'flex',
    '& form': {
      width: '100%'
    }
  },
  doubleColumn: {
    display: 'flex',
    flexWrap: 'wrap',
    '& div:first-child': {
      width: '55%',
      marginRight: '5%'
    },
    '& div:last-child': {
      width: '40%'
    }
  }
})

const CreditCardForm = (props) => {
  const classes = useStyles()
  const { disableSubmit } = props

  return (
    <div className={classes.creditCardForm} data-testid="CreditCardForm">
      <form>
        <Input labelText="Número do Cartão" type="number" role="creditCard" />

        <Input labelText="Nome do Titular" type="text" role="holderName" />

        <div className={classes.doubleColumn}>
          <Input labelText="CVV" type="number" role="cvv" />
          <Input labelText="Validade (mês/ano)" type="text" role="expiryDate" />
        </div>
      </form>
    </div>
  )
}

export default CreditCardForm
