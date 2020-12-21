import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

import Button from '../components/Button'
import CreditCard from '../containers/CreditCard'
import Total from '../containers/Total'
import { save } from '../reducers/cards'

const Form = styled.form`
  display: grid;
  gap: 20px;
  padding: 10px;
`
const App = () => {
  const [saved, setSaved] = useState(false)
  const history = useHistory()
  const form = useForm()
  const dispatch = useDispatch()

  const { handleSubmit } = form

  const onSubmit = (data) => {
    setSaved(true)
    dispatch(save(data))
  }

  const { isLoading } = useSelector((e) => e.cards)
  useEffect(() => {
    if (saved && !isLoading) history.push('/checkout')
  }, [isLoading, saved, history])

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <CreditCard {...form} />
      <Total />
      <Button type="submit">Finalizar o pedido</Button>
    </Form>
  )
}

export default App
