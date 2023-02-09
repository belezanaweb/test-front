import { Controller, Control } from "react-hook-form"
import { PatternFormat } from 'react-number-format'
import { ErrorMessage } from '@hookform/error-message'
import './style.scss'

export function CreditCardInput({ control }: { control: Control<any>}) {
  return (
    <fieldset>
      <legend>Cartão de crédito</legend>
      <div className='cred-card-inputs'>
        <label className="cred-card-number">
          Número
          <Controller 
            control={control}
            name="creditCardNumber"
            rules={{ required: 'insira um número de cartão válido' }}
            render={({ field: { onChange, name, value }, formState: { errors } }) => (
              <>
                <PatternFormat
                  className={errors?.creditCardNumber && 'input-error'}
                  aria-invalid={errors?.creditCardNumber ? "true" : "false"}
                  format="#### #### #### ####"
                  placeholder='0000 0000 0000 0000'
                  name={name}
                  value={value}
                  onChange={onChange}
                />
                <ErrorMessage
                  errors={errors}
                  name={name}
                  render={({ message }) => <p role="alert" className="error-message">{message}</p>}
                />
              </>
            )}
          />
        </label>
        <label className="name">
          Nome do titular do cartão
          <Controller 
            control={control}
            name="name"
            rules={{ required: 'insira um nome válido' }}
            render={({ field: { onChange, name, value }, formState: { errors } }) => (
              <>
                <input 
                  className={errors?.name && 'input-error'}
                  aria-invalid={errors?.name ? "true" : "false"}
                  type='text' 
                  placeholder='Nome impresso no cartão' 
                  name={name}
                  value={value || ''}
                  onChange={onChange}
                />
                <ErrorMessage
                  errors={errors}
                  name={name}
                  render={({ message }) => <p role="alert" className="error-message">{message}</p>}
                />
              </>
            )}
          />
        </label>
        <label>
          Data de validade
          <Controller 
            control={control}
            name="expirationDate"
            rules={{ required: 'insira uma data válida' }}
            render={({ field: { onChange, name, value }, formState: { errors } }) => (
              <>
                <PatternFormat
                  className={errors?.expirationDate && 'input-error'}
                  aria-invalid={errors?.expirationDate ? "true" : "false"}
                  format="##/##"
                  placeholder='MM/AA'
                  name={name}
                  value={value}
                  onChange={onChange}
                />
                <ErrorMessage
                  errors={errors}
                  name={name}
                  render={({ message }) => <p role="alert" className="error-message">{message}</p>}
                />
              </>
            )}
          />
        </label>
        <label>
          Código CVV:
          <Controller 
            control={control}
            name="cvvCode"
            rules={{ required: 'insira um cvv válido' }}
            render={({ field: { onChange, name, value }, formState: { errors } }) => (
              <>
                <PatternFormat
                  className={errors?.cvvCode && 'input-error'}
                  aria-invalid={errors?.cvvCode ? "true" : "false"}
                  format="###"
                  placeholder='000'
                  name={name}
                  value={value}
                  onChange={onChange}
                />
                <ErrorMessage
                  errors={errors}
                  name={name}
                  render={({ message }) => <p role="alert" className="error-message">{message}</p>}
                />
              </>
            )}
          />
        </label>
      </div>
    </fieldset>
  )
}
