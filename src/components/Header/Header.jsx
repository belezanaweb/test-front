import React from 'react'
import * as H from './Header.styled'

const Header = ({ page }) => {
  const pages = ['SACOLA', 'PAGAMENTO', 'CONFIRMAÇÃO']
  return (
    <H.StepBar>
      <H.StepUl>
        {pages.map((currentPage, index) => {
          return (
            <H.StepItem key={currentPage} $page={index === page}>
              {currentPage}
            </H.StepItem>
          )
        })}
      </H.StepUl>
    </H.StepBar>
  )
}

export default Header
