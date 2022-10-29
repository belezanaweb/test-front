import React, { useEffect } from 'react'
import requestAPI from '../../utils/requestAPI'

import NavBar from '../../components/NavBar'
import Card from '../../components/Card'

import { Container } from './styles'

const Kart = () => {
  useEffect(() => {
    requestAPI({ url: 'http://www.mocky.io/v2/5b15c4923100004a006f3c07' }).then((resp) =>
      console.log(resp.data)
    )
  }, [])

  return (
    <div>
      <NavBar actualStep={'sacola'} />
      <Container>
        <h1>produtos</h1>
        <Card>
          <p>test</p>
        </Card>
      </Container>
    </div>
  )
}

export default Kart
