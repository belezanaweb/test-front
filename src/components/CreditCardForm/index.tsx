import { Card } from 'components/Card'
import * as S from './styles'
import { Input } from 'components/Input'
import { Controller, useFormContext } from 'react-hook-form'

export const CreditCardForm = () => {
  const { control } = useFormContext()

  return (
    <Card title="Cartão de crédito">
      <S.Container>
        <Controller
          control={control}
          name="cardNumber"
          render={({ field, fieldState }) => (
            <Input
              label="Número"
              mask="9999 9999 9999 9999"
              placeholder="0000 0000 0000 0000"
              error={fieldState.error?.message}
              onChange={field.onChange}
            />
          )}
        />

        <Controller
          control={control}
          name="cardName"
          render={({ field, fieldState }) => (
            <Input
              label="Nome do titular do cartão"
              placeholder="Nome impresso no cartão"
              error={fieldState.error?.message}
              onChange={field.onChange}
            />
          )}
        />

        <S.InputGroup>
          <Controller
            control={control}
            name="cardExpiration"
            render={({ field, fieldState }) => (
              <Input
                label="Data de validade"
                mask="99/99"
                placeholder="MM/AA"
                error={fieldState.error?.message}
                onChange={field.onChange}
              />
            )}
          />

          <Controller
            control={control}
            name="cardCvv"
            render={({ field, fieldState }) => (
              <Input
                label="Código CVV"
                mask="999"
                placeholder="000"
                error={fieldState.error?.message}
                onChange={field.onChange}
              />
            )}
          />
        </S.InputGroup>
      </S.Container>
    </Card>
  )
}
