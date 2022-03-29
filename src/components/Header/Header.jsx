import React from 'react'
import * as S from './Header.styled'

const Header = ({ page }) => {
  const pages = ['SACOLA', 'PAGAMENTO', 'CONFIRMAÇÃO']
  return (
    <S.StepBar data-testid="header">
      <S.StepUl>
        {pages.map((currentPage, index) => {
          return (
            <S.StepItem key={currentPage} $page={index === page}>
              <p>{currentPage}</p>
            </S.StepItem>
          )
        })}
      </S.StepUl>
    </S.StepBar>
  )
}

export default Header
