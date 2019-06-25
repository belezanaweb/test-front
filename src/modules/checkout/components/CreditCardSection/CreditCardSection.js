import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled/macro'
import { Number, Cvc, Expiration } from 'react-credit-card-primitives'
import CheckoutSection from '../CheckoutSection'
import Field from '../../../../components/Field'
import Input from '../../../../components/Input'

function CreditCardSection ({ setCreditCard = () => undefined, ...props }) {
  const [state, setState] = useState({})
  const { cvc, exp, name, num } = state

  useEffect(() => {
    const isCreditCardValid =
      Object.keys(state)
        .reduce((acc, key) => [...acc, state[key]], [])
        .filter(Boolean).length === 4

    if (isCreditCardValid) {
      setCreditCard(state)
    }
  }, [setCreditCard, state])

  const setValue = field => value => setState({ ...state, [field]: value })
  const handleOnBlur = field => () => {
    if (state[field] === undefined) {
      setValue(field)(null)
    }
  }

  return (
    <CheckoutSection title="Cartão de Crédito" {...props}>
      <CreditCardSection.Container>
        <Number
          onChange={({ value, valid }) =>
            setValue('num')(valid ? value : num === undefined ? undefined : null)
          }
          render={({ getInputProps, valid }) => {
            const error =
              !valid && num !== undefined ? 'Número do cartão preenchido incorretamente.' : null

            return (
              <Field htmlFor="num" span={2} label="Número do cartão" error={error}>
                <Input
                  {...getInputProps()}
                  onBlur={handleOnBlur('num')}
                  id="num"
                  name="num"
                  data-testid="field-number"
                  hasErrors={!!error}
                />
              </Field>
            )
          }}
        />

        <Field
          htmlFor="name"
          span={2}
          label="Nome do Titular"
          error={name !== undefined && !name && 'Preenchimento obrigatório.'}
        >
          <Input
            type="text"
            id="name"
            name="name"
            data-testid="field-name"
            onChange={e => setValue('name')(e.target.value)}
            onBlur={handleOnBlur('name')}
            hasErrors={name !== undefined && !name}
          />
        </Field>

        <Expiration
          onChange={({ month, year, valid }) =>
            setValue('exp')(valid ? `${month}/${year}` : exp === undefined ? undefined : null)
          }
          render={({ getInputProps, valid, error }) => {
            let errorMsg

            switch (error) {
              case Expiration.ERROR_MONTHYEAR:
                errorMsg = !valid && 'Insira um mês e ano válido.'
                break
              case Expiration.ERROR_MONTH:
                errorMsg = !valid && 'Insira um mês válido.'
                break
              case Expiration.ERROR_YEAR:
                errorMsg = !valid && 'Insira um ano válido.'
                break
              case Expiration.ERROR_PAST_DATE:
                errorMsg = !valid && 'Insira uma data futura.'
                break
              default:
                errorMsg = exp !== undefined ? 'Preenchimento obrigatório.' : null
            }

            return (
              <Field htmlFor="exp" label="Validade (mês/ano)" error={errorMsg}>
                <Input
                  {...getInputProps()}
                  onBlur={handleOnBlur('exp')}
                  id="exp"
                  name="exp"
                  data-testid="field-exp"
                  hasErrors={!!errorMsg}
                />
              </Field>
            )
          }}
        />

        <Cvc
          onChange={({ value, valid }) =>
            setValue('cvc')(valid ? value : cvc === undefined ? undefined : null)
          }
          render={({ getInputProps, valid }) => {
            /* prettier-ignore */
            const error = !valid && cvc !== undefined
              ? 'Preenchimento obrigatório.'
              : null

            return (
              <Field htmlFor="cvc" label="CVV" error={error}>
                <Input
                  {...getInputProps()}
                  onBlur={handleOnBlur('cvc')}
                  id="cvc"
                  name="cvc"
                  data-testid="field-cvc"
                  hasErrors={!!error}
                />
              </Field>
            )
          }}
        />
      </CreditCardSection.Container>
    </CheckoutSection>
  )
}

CreditCardSection.propTypes = {
  setCreditCard: PropTypes.func
}

CreditCardSection.Container = styled.dl`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 9fr 8fr;
  margin-top: -1px;
  padding-bottom: 15px;
`

export default CreditCardSection
