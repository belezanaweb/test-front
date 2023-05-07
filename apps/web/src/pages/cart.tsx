import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Tabs, useTabs } from 'ui'
import { CartInfo, CartTab, ConfirmationTab, PaymentTab } from '@/components'
import { useMemo } from 'react'

const validationSchema = z.object({
  cardNumber: z.string().min(16, { message: 'insira um número de cartão válido' }),
  name: z.string().min(1, { message: 'insira um nome válido' }),
  dueDate: z.string().min(4, { message: 'insira uma data válida' }),
  cvv: z.string().min(3, { message: 'insira um cvv válido' })
})

export default function Cart() {
  const tabs = useTabs({ tabKey: 'cart' })
  const methods = useForm({ resolver: zodResolver(validationSchema), mode: 'onTouched' })
  const isSuccessPayment = tabs.tabKey === 'confirmation'

  const tabsTriggersList = useMemo(
    () => [
      {
        key: 'cart',
        content: 'Sacola',
        isDisabled: isSuccessPayment
      },
      {
        key: 'payment',
        content: 'Pagamento',
        isDisabled: isSuccessPayment
      },
      {
        key: 'confirmation',
        content: 'Confirmação',
        isDisabled: !isSuccessPayment
      }
    ],
    [isSuccessPayment]
  )

  return (
    <>
      <Tabs.Root {...tabs}>
        <Tabs.List>
          {tabsTriggersList.map((tab) => (
            <Tabs.Trigger
              key={tab.key}
              className="md:p-4 md:text-base"
              tabKey={tab.key}
              isDisabled={tab.isDisabled}
            >
              {tab.content}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        <div className="flex flex-col md:m-auto md:max-w-4xl md:flex-row md:justify-between md:gap-6">
          <FormProvider {...methods}>
            <div className="w-full bg-neutral-400 px-2 py-5 md:bg-transparent md:py-10">
              <Tabs.Content tabKey="cart">
                <CartTab />
              </Tabs.Content>
              <Tabs.Content tabKey="payment">
                <PaymentTab />
              </Tabs.Content>
              <Tabs.Content tabKey="confirmation">
                <ConfirmationTab />
              </Tabs.Content>
            </div>
            <CartInfo.Root>
              <CartInfo.Data />
              <CartInfo.Submit />
            </CartInfo.Root>
          </FormProvider>
        </div>
      </Tabs.Root>
    </>
  )
}
