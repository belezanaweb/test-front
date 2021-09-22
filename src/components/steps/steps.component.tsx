import React, { FC } from 'react'
import { useLocation } from 'react-router'
import { StepsStyled, StepStyled } from './steps.style'

export const Steps: FC<{ children?: never }> = () => {
  const { pathname } = useLocation()

  /** In a real app, the steps probably wouldn't be links.
   * Since this is a demo, I'm making them clickable so
   * that y'all can naviage my app easily :)
   */
  return (
    <StepsStyled>
      <nav>
        <StepStyled to="/cart" active={pathname === '/cart'}>
          Sacola
        </StepStyled>
        <StepStyled to="/payment" active={pathname === '/payment'}>
          Pagamento
        </StepStyled>
        <StepStyled to="/confirm" active={pathname === '/confirm'}>
          Confirmação
        </StepStyled>
      </nav>
    </StepsStyled>
  )
}
