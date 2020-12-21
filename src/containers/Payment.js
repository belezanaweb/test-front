import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import Paper from '../components/Paper'

const Content = styled(Paper)`
  padding: var(--spacing);
`
const App = () => {
  const history = useHistory()

  const { data, isLoading } = useSelector((e) => e.cards)
  const { cardNumber, name, validDate } = data

  useEffect(() => {
    if (!isLoading && !cardNumber) history.push('/payment')
  }, [isLoading, cardNumber, history])

  return (
    <section>
      <h1>Pagamento</h1>
      <Content>
        <div>{cardNumber}</div>
        <div>{name}</div>
        <div>{validDate}</div>
      </Content>
    </section>
  )
}

export default App
