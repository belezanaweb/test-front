/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { useDataContext } from '@/context/dataContext'
import { CreditCardSchema } from '@/utils/creditCardSchema'

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
  const { setFormData, setTabActive, setSubmitForm } = useDataContext()

  const form = useForm<z.infer<typeof CreditCardSchema>>({
    resolver: zodResolver(CreditCardSchema),
    defaultValues: {
      cardNumber: '',
      cardHolderName: '',
      expirationDate: '',
      cvv: '',
    },
  })

  useEffect(() => {
    setSubmitForm(() => form.handleSubmit(onSubmit))
    return () => setSubmitForm(null)
  }, [form, setSubmitForm])

  function onSubmit(values: z.infer<typeof CreditCardSchema>) {
    if (values) {
      setFormData(values)
    }
    setTabActive('confirmation')
  }

  return (
    <div className="h-auto bg-white rounded border border-[#CCC] px-3 py-4">
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
    </div>
  )
}
