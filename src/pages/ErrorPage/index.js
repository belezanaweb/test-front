import React, { useEffect, useState } from 'react'
import imageError from '../../assets/images/error-page.png'
import { Button } from '../../components/Button'
import { useParams, useLocation } from 'react-router-dom'

import {
  Container,
  StyledImg,
  StyledError,
  StyledErrorMessage,
  StyledErrorMessageSub
} from './styled'

const ErrorPage = () => {
  const { code } = useParams()
  const location = useLocation()

  const [pathlink, setPathlink] = useState('/')
  const [codeError, setCodeError] = useState({
    code: 404,
    message: 'Ops... não encontramos a página',
    messageSub:
      'A página que você procura foi removida, mudou de endereço ou está temporariamente indisponível.'
  })

  const handleErrorCode = () => {
    switch (code) {
      case '400':
        return {
          code: 400,
          message: 'Ops! não foi possível exibir o que deveria estar aqui',
          messageSub: 'Verifique sua conexão com a internet e tente novamente.'
        }
      case '401':
        return {
          code: 401,
          message: 'Parece que você não tem permissão para acessar',
          messageSub: 'Verifique os seus dados e tente fazer o login novamente.'
        }
      case '403':
        return {
          code: 403,
          message: 'Ops, parece que você não tem autorização para estar aqui',
          messageSub: 'Volte para a página inicial e continue usando o Leankeep.'
        }
      case '408':
        return {
          code: 408,
          message: 'O servidor demorou demais para nos responder',
          messageSub: 'Recarregue a página e tente novamente.'
        }
      case '410':
        return {
          code: 410,
          message: 'Parece que o que você procura não está mais aqui.',
          messageSub: ''
        }
      case '500':
        return {
          code: 500,
          message: 'As coisas estão um pouco instáveis aqui',
          messageSub:
            'Mas não se preocupe, nosso time foi automaticamente notificado e está trabalhando para corrigir esse erro. Tente mais tarde.'
        }
      default:
        return {
          code: 404,
          message: 'Ops... não encontramos a página',
          messageSub:
            'A página que você procura foi removida, mudou de endereço ou está temporariamente indisponível.'
        }
    }
  }

  useEffect(() => {
    if (location.search) {
      const urlLink = location.search.split('?')[1]
      const regex = new RegExp('^(http|https)://')

      if (regex.test(urlLink)) {
        setPathlink(urlLink)
      }
    }
    setCodeError(handleErrorCode())
    // eslint-disable-next-line
  }, [code, location.search])

  return (
    <Container>
      <StyledImg src={imageError}></StyledImg>
      <StyledError>Erro {codeError.code}</StyledError>
      <StyledErrorMessage>{codeError.message}</StyledErrorMessage>
      <StyledErrorMessageSub>{codeError.messageSub}</StyledErrorMessageSub>
      {pathlink !== '/' ? (
        <Button link={pathlink} text="Voltar" />
      ) : (
        <Button link={pathlink} text="Voltar à página inicial" />
      )}
    </Container>
  )
}

export { ErrorPage }
