import React from 'react'
import { useNavigate } from 'react-router-dom'

import { NotFound, NotFoundTitle } from './Page404.styled'
import { Button } from '../../shared'

export const Page404: React.FC = () => {
  const navigate = useNavigate()

  return (
    <NotFound>
      <NotFoundTitle>
        <strong>Ops!</strong> Não encontramos essa página.
      </NotFoundTitle>
      <Button onClick={() => navigate('/')}>
        Ir para carrinho
      </Button>
    </NotFound>
  )
}
