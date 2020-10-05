import styled, { css } from 'styled-components'
import { DFlexStyled } from '../../styles/global'

export const StepsStyled = styled('header')`
  background-color: ${(props) => props.theme.colors.bgContent};
  padding: 2rem 0;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);

  @media (max-width: 767px) {
    padding: 1.5rem 0;
  }
`

export const ItemStyled = styled.div<{ active: boolean }>`
  font-weight: bold;
  color: ${(props) => props.theme.colors.textDisabled};
  text-transform: uppercase;
  font-size: 1.4rem;
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      color: ${(props) => props.theme.colors.primary};
    `};
  @media (max-width: 767px) {
    font-size: 1rem;
  }
`

export const DFlexExtended = styled(DFlexStyled)`
  @media (max-width: 767px) {
    justify-content: space-between;
  }
`
