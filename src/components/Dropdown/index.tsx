import { Body } from '@styled-icons/boxicons-regular'
import React from 'react'
import { useState } from 'react'
import { useCustomTheme } from '../../hooks/useTheme'
import * as S from './styles'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { customTheme, handleCustomTheme } = useCustomTheme()
  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Icon onClick={() => setIsOpen(!isOpen)}>
        <Body
          color={
            customTheme === 'dark' || customTheme === 'highContrast'
              ? 'white'
              : 'black'
          }
        />
      </S.Icon>

      <S.Content aria-hidden={!isOpen}>
        <S.Text>ACESSIBILIDADE</S.Text>
        <S.Button onClick={() => handleCustomTheme('light')}>
          Tema Padrão
        </S.Button>
        <S.Button onClick={() => handleCustomTheme('dark')}>
          Tema escuro
        </S.Button>
        <S.Button onClick={() => handleCustomTheme('highContrast')}>
          Alto contraste
        </S.Button>
        <S.Button onClick={() => handleCustomTheme('big')}>
          Aumentar fontes
        </S.Button>
        <S.CloseButton as={'button'} onClick={() => setIsOpen(!isOpen)}>
          Fechar
        </S.CloseButton>
      </S.Content>
    </S.Wrapper>
  )
}
export default Dropdown
