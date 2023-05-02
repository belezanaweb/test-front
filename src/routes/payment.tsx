import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { PatternFormat } from 'react-number-format'
import { Controller, useForm } from 'react-hook-form'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import { Paper } from '@/components/ui/paper'

import { CheckoutSummary } from '@/components/checkout-summary'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { delay, validateCartExpirationDate } from '@/lib/utils'
import { useCartItems } from '@/hooks/use-cart-items'
import { useCheckoutStore } from '@/store/use-checkout'

const formSchema = z.object({
  cartNumber: z.string().length(16, 'Insira um número de cartão válido'),
  cartOwnerName: z.string().min(4, 'Insira um nome válido'),
  cartExpirationDate: z
    .preprocess(
      (val) => String(val).replace(/_/g, ''),
      z.string().length(7, 'Insira uma data válida')
    )
    .refine(
      (val) => {
        return validateCartExpirationDate(val)
      },
      {
        message: 'Insira uma data válida'
      }
    ),
  cartCVV: z.optional(z.string().length(3, 'Insira um CVV válido'))
})

const defaultValues = {
  cartNumber: '',
  cartOwnerName: '',
  cartExpirationDate: '',
  cartCVV: undefined
}

export type PaymentFormProps = z.infer<typeof formSchema>

export const PaymentPage = () => {
  const store = useCheckoutStore()
  const { data: cartData } = useCartItems()
  const navigate = useNavigate()
  const cartNumberRef = useRef<HTMLInputElement | null>(null)
  const {
    register,
    handleSubmit,
    control,
    formState: { isDirty, isSubmitting, isValid, errors }
  } = useForm<PaymentFormProps>({
    mode: 'all',
    resolver: zodResolver(formSchema),
    defaultValues
  })

  useEffect(() => {
    cartNumberRef?.current?.focus()
  }, [])

  const onSubmit = async (data: PaymentFormProps) => {
    await delay()

    if (cartData?.id) {
      store.setCartId(cartData.id)
    }

    store.setPaymentData(data)
    navigate('/confirmation')
  }

  return (
    <form
      className="grid sm:grid-cols-2 lg:grid-cols-3 space-y-5 sm:space-y-0"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Paper className="col-span-1 lg:col-span-2" title="Cartão de Crédito">
        <div className="flex flex-col gap-10 py-6">
          <div className="flex flex-col gap-5">
            <fieldset>
              <Label htmlFor="cartNumber">Número</Label>
              <Controller
                name="cartNumber"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <PatternFormat
                    name={field.name}
                    onValueChange={(values) => field.onChange(values.value)}
                    onBlur={field.onBlur}
                    getInputRef={cartNumberRef}
                    customInput={Input}
                    isError={!!errors.cartNumber}
                    errorMessage={errors.cartNumber?.message}
                    type="text"
                    id="cartNumber"
                    placeholder="0000 0000 0000 0000"
                    format="#### #### #### ####"
                    mask="_"
                  />
                )}
              />
            </fieldset>
            <fieldset>
              <Label
                htmlFor="cartOwnerName"
                className="block mb-[5px] text-sm font-medium text-gray-dark"
              >
                Nome do titular do cartão
              </Label>
              <Controller
                name="cartOwnerName"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Input
                    {...field}
                    type="text"
                    id="cartOwnerName"
                    placeholder="Nome impresso no cartão"
                    isError={!!errors.cartOwnerName}
                    errorMessage={errors.cartOwnerName?.message}
                  />
                )}
              />
            </fieldset>
            <div className="flex gap-4">
              <fieldset>
                <Label
                  htmlFor="cartExpirationDate"
                  className="block mb-[5px] text-sm font-medium text-gray-dark"
                >
                  Data de validade
                </Label>
                <Controller
                  name="cartExpirationDate"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <PatternFormat
                      name={field.name}
                      onValueChange={(values) => field.onChange(values.formattedValue)}
                      onBlur={field.onBlur}
                      customInput={Input}
                      type="text"
                      id="cartExpirationDate"
                      placeholder="MM/AAAA"
                      format="##/####"
                      mask="_"
                      required
                      isError={!!errors.cartExpirationDate}
                      errorMessage={errors.cartExpirationDate?.message}
                    />
                  )}
                />
              </fieldset>
              <fieldset>
                <Label
                  htmlFor="cartCVV"
                  className="block mb-[5px] text-sm font-medium text-gray-dark"
                >
                  Código CVV:
                </Label>
                <Input
                  {...register('cartCVV')}
                  type="text"
                  id="cartCVV"
                  placeholder="000"
                  maxLength={3}
                  required
                  isError={!!errors.cartCVV}
                  errorMessage={errors.cartCVV?.message}
                />
              </fieldset>
            </div>
          </div>
        </div>
      </Paper>
      <CheckoutSummary
        handleNextStep={
          <Button type="submit" isLoading={isSubmitting} disabled={!isDirty || !isValid}>
            Finalizar pedido
          </Button>
        }
      />
    </form>
  )
}
