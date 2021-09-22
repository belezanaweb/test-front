import { Card, Summary, Title, Button, Input } from 'components'
import { Link } from 'react-router-dom'
import React, { FC, useMemo, useState } from 'react'
import { PaymentForm } from './payment.style'

interface IPaymentsForm {
  number?: string;
  name?: string;
  expDate?: string;
  cvv?: string;
}

export const Payment: FC<{ children?: never }> = () => {
  const [values, setValues] =
    useState <
    IPaymentsForm >
    {
      number: '',
      name: '',
      expDate: '',
      cvv: ''
    }

  const handleCardChange = (value: string) => {
    switch (true) {
      case value.length === 16: {
        const clean = value.replace(/\./g, '')
        const str = [
          clean.substr(0, 4),
          clean.substr(4, 4),
          clean.substr(8, 4),
          clean.substr(12, 4)
        ].join('.')
        setValues({ ...values, number: str })
        break
      }
      case value.length >= '____.____.____.____'.length:
        return
      default:
        const clean = value.replace(/[^0-9.]/g, '')
        setValues({ ...values, number: clean })
    }
  }

  const handleExpDateChange = (value: string) => {
    switch (true) {
      case value.length === 6: {
        const clean = value.replace(/\//g, '')
        const str = [clean.substr(0, 2), clean.substr(2, 4)].join('/')
        setValues({ ...values, expDate: str })
        break
      }
      case value.length >= '__/____'.length:
        return
      default:
        const clean = value.replace(/[^0-9.]/g, '')
        setValues({ ...values, expDate: clean })
    }
  }

  const inputs = useMemo(
    () => [
      {
        value: values.number,
        label: 'Número do cartão:',
        placeholder: '____.____.____.____',
        isValid: values.number?.length === '____.____.____.____'.length,
        handleChange: (value: string) => handleCardChange(value),
        className: 'full'
      },
      {
        value: values.name,
        label: 'Nome do Titular:',
        placeholder: 'Como no cartão',
        isValid: values.name?.includes(' ') ?? false,
        handleChange: (value: string) => setValues({ ...values, name: value }),
        className: 'full'
      },
      {
        value: values.expDate,
        label: 'Validade (mês/ano):',
        placeholder: '__/____',
        isValid: values.expDate?.length === 7,
        handleChange: (value: string) => handleExpDateChange(value)
      },
      {
        value: values.cvv,
        label: 'CVV:',
        placeholder: '___',
        isValid: values.cvv?.length === 3,
        handleChange: (value: string) => setValues({ ...values, cvv: value })
      }
    ],
    [values]
  )

  const buttonEnabled = useMemo(
    () =>
      Object.values(inputs).reduce < boolean > ((prev, current) => prev && current.isValid, true),
    [values]
  )

  return (
    <>
      <Title>Cartão de Crédito</Title>
      <Card>
        <PaymentForm>
          {inputs.map((item) => (
            <Input {...item} key={item.label} />
          ))}
        </PaymentForm>
      </Card>
      <Summary />
      <Button as={Link} to="/confirm" disabled={!buttonEnabled}>
        Finalizar o pedido
      </Button>
    </>
  )
}
