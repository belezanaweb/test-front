import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Button from '../../components/Button/Button'
import { useHistory } from 'react-router-dom'

const Bag = () => {
  const history = useHistory()

  return (
    <>
      <NavBar active="/" />

      <Button
        onClick={() => {
          history.push('/payment')
        }}
        label="SEGUIR PARA O PAGAMENTO"
      />
    </>
  )
}

export default Bag
