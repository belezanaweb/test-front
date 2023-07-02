import React, { ReactNode } from 'react'
import { Form, FormWrapper, Input, InputFullWidth, InputHalfWidth } from './styles'
import Text from '../Text'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import useMask from '../../utils/maskUtil'
import useFormStore from '../../store/useFormStore'
import MainContent from '../MainContent'

const formSchema = z.object({
  cardNumber: z
    .string()
    .nonempty('insira um número de cartão válido')
    .min(19, 'insira um número de cartão válido'),
  cardOwner: z.string().nonempty('insira um nome válido'),
  expirationDate: z.string().nonempty('insira uma data válida').min(5, 'insira uma data válida'),
  securityNumber: z.string().nonempty('insira um cvv válido').min(3, 'insira um cvv válido')
})

export type FormProps = z.infer<typeof formSchema>

type PaymentFormProps = {
  onSubmit: (data: FormProps) => void,
  children: ReactNode
}

const PaymentForm = ({ onSubmit, children }: PaymentFormProps) => {
  const formState = useFormStore((state) => state.form)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardNumber: formState.cardNumber,
      cardOwner: formState.cardOwner,
      expirationDate: formState.expirationDate,
      securityNumber: formState.securityNumber
    }
  })
  const cardNumberMask = useMask('cardNumber')
  const cardExpMask = useMask('cardExpDate')

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <MainContent title="Cartão de crédito">
        <FormWrapper>
          <InputFullWidth>
            <label htmlFor="cardNumber">
              <Text fontSize="medium" color="black" fontWeight="normal">
                Número
              </Text>
            </label>
            <Input
              {...register('cardNumber')}
              type="text"
              id="cardNumber"
              placeholder="0000 0000 0000 0000"
              maxLength={19}
              error={!!errors.cardNumber?.message}
              onChange={(event: any) => {
                event.target.value = cardNumberMask(event.target.value)
              }}
            ></Input>
            {errors.cardNumber?.message && (
              <Text color="red" fontSize="small" fontWeight="normal">
                {errors.cardNumber.message}
              </Text>
            )}
          </InputFullWidth>
          <InputFullWidth>
            <label htmlFor="cardOwner">
              <Text fontSize="medium" color="black" fontWeight="normal">
                Nome do titular do cartão
              </Text>
            </label>
            <Input
              {...register('cardOwner')}
              type="text"
              id="cardOwner"
              placeholder="Nome impresso no cartão"
              error={!!errors.cardOwner?.message}
            ></Input>
            {errors.cardOwner?.message && (
              <Text color="red" fontSize="small" fontWeight="normal">
                {errors.cardOwner.message}
              </Text>
            )}
          </InputFullWidth>
          <InputHalfWidth position="right">
            <label htmlFor="expirationDate">
              <Text fontSize="medium" color="black" fontWeight="normal">
                Data de validade
              </Text>
            </label>
            <Input
              {...register('expirationDate')}
              type="text"
              id="expirationDate"
              placeholder="MM/AA"
              maxLength={5}
              error={!!errors.expirationDate?.message}
              onChange={(event: any) => {
                event.target.value = cardExpMask(event.target.value)
              }}
            ></Input>
            {errors.expirationDate?.message && (
              <Text color="red" fontSize="small" fontWeight="normal">
                {errors.expirationDate.message}
              </Text>
            )}
          </InputHalfWidth>
          <InputHalfWidth position="left">
            <label htmlFor="securityNumber">
              <Text fontSize="medium" color="black" fontWeight="normal">
                Código CVV:
              </Text>
            </label>
            <Input
              {...register('securityNumber')}
              type="text"
              id="securityNumber"
              placeholder="000"
              maxLength={3}
              error={!!errors.securityNumber?.message}
            ></Input>
            {errors.securityNumber?.message && (
              <Text color="red" fontSize="small" fontWeight="normal">
                {errors.securityNumber.message}
              </Text>
            )}
          </InputHalfWidth>
        </FormWrapper>
      </MainContent>
      {children}
    </Form>
  )
}

export default PaymentForm
