import React, { useCallback, useEffect, useState, useContext } from 'react'
import {
  validateCVV,
  validateCreditCard,
  validateHolderName,
  validateExpiryDate,
  validateField
} from '../../utils'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import { FormContext } from '../Context/FormContext'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  errorInput: {
    borderColor: 'red !important'
  },
  inputWrapper: {
    marginBottom: '25px',
    '& input': {
      boxSizing: 'border-box',
      height: '45px',
      width: '100%',
      borderRadius: '3px',
      backgroundColor: '#FFF',
      border: '1px solid #E7E7E7',
      boxShadow: 'inset 0 1px 2px 0 rgba(0,0,0,0.2)',
      padding: '13px',
      lineHeight: '45px',
      fontSize: '16px',
      color: '#212121',
      '&:focus': {
        border: '1px solid #A43287'
      },
      '&:focus-visible': {
        outline: '1px solid #A43287'
      },
      '&::placeholder': {
        color: '#E0E7EE',
        fontFamily: 'Helvetica Neue'
      }
    },
    '& label': {
      height: '14px',
      color: '#CCC',
      fontFamily: 'Helvetica Neue',
      fontSize: '12px',
      fontWeight: '700',
      lineHeight: '14px'
    }
  }
})

const Input = (props) => {
  const classes = useStyles()
  const formContext = useContext(FormContext)
  const { type = 'text', labelText, role } = props
  const [isFieldValid, setIsfieldValid] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = useCallback(
    (role = 'default', e) => {
      const roleValidators = {
        creditCard: validateCreditCard(e.target.value),
        holderName: validateHolderName(e.target.value),
        expiryDate: validateExpiryDate(e.target.value),
        cvv: validateCVV(e.target.value),
        default: validateField(e.target.value)
      }

      const isValid = roleValidators[role]
      const fieldName = Object.keys(formContext.formValidFields).find((item) => item === role)

      setIsfieldValid(isValid.status)
      setErrorMessage(isValid.errorMessage)
      formContext.setFormFieldsValues(e.target.value)
      formContext.setFormFieldsValues({
        ...formContext.formFieldsValues,
        [fieldName]: e.target.value
      })
    },
    [isFieldValid, formContext]
  )

  useEffect(() => {
    const fieldName = Object.keys(formContext.formValidFields).find((item) => item === role)
    formContext.setFormValidFields({
      ...formContext.formValidFields,
      [fieldName]: isFieldValid
    })
  }, [isFieldValid])

  return (
    <div className={classes.inputWrapper}>
      <label className={classes.customLabel}>{labelText}</label>
      <input
        className={isFieldValid ? classes.customInput : classes.errorInput}
        type={type}
        onChange={(e) => handleChange(role, e)}
      ></input>
      {!isFieldValid && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  )
}

export default Input
