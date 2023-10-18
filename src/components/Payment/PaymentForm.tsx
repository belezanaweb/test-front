/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import cardAnimationData from '@/assets/credit_card.json'
import confirmationAnimationData from '@/assets/payment_sucessful.json'
import { useDataContext } from '@/context/dataContext'
import { CreditCardSchema } from '@/utils/creditCardSchema'

import { LottieComponent } from '../Lottie'
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from '../ui/form'
import { Input } from '../ui/input'

export const PaymentForm = () => {
  const { setFormData, setTabActive, setSubmitForm, setIsFormValid } =
    useDataContext()
  const [isLoading, setIsLoading] = useState(false)
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false)

  const form = useForm<z.infer<typeof CreditCardSchema>>({
    resolver: zodResolver(CreditCardSchema),
    defaultValues: {
      cardNumber: '',
      cardHolderName: '',
      expirationDate: '',
      cvv: '',
    },
  })

  const { formState } = form

  useEffect(() => {
    setSubmitForm(() => form.handleSubmit(onSubmit))
    return () => setSubmitForm(null)
  }, [form, setSubmitForm])

  useEffect(() => {
    setIsFormValid(formState.isDirty && formState.isValid)
  }, [formState, setIsFormValid])

  function onSubmit(values: z.infer<typeof CreditCardSchema>) {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsPaymentSuccessful(true)
      setFormData(values)
      setTimeout(() => {
        setIsPaymentSuccessful(false)
        setTabActive('confirmation')
      }, 2000)
    }, 2000)
  }

  return (
    <div className="h-auto bg-white rounded border border-[#CCC] px-3 py-4">
      {isLoading ? (
        <div className="flex justify-center items-center h-full">
          <LottieComponent animationData={cardAnimationData} />
        </div>
      ) : isPaymentSuccessful ? (
        <div className="flex flex-col justify-center items-center h-full">
          <LottieComponent animationData={confirmationAnimationData} />
        </div>
      ) : (
        <>
          <h1 className="text-xl">Cartão de crédito</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="cardNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Número</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        mask="cardNumber"
                        onChangeCapture={field.onChange}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cardHolderName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome do titular do cartão</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Nome impresso no cartão"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-row gap-4">
                <FormField
                  control={form.control}
                  name="expirationDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Data de validade</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          mask="validateCardData"
                          placeholder="MM/AA"
                          onChangeCapture={field.onChange}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="cvv"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Código CVV:</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="000"
                          mask="cvv"
                          maxLength={3}
                          onChangeCapture={field.onChange}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </form>
          </Form>
        </>
      )}
    </div>
  )
}
