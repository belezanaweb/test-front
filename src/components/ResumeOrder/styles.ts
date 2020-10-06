import styled, { css } from 'styled-components'
import { DFlexStyled } from '../../styles/global'

export const ResumeOrderStyled = styled.div`
  border-radius: 3px;
  border: 1px solid #ccc;
  padding: ${(props) => props.theme.spacing};
  margin-bottom: ${(props) => props.theme.spacing};
`

interface DFlexExtendsProps {
  bold?: boolean
  textColor?: string
}
export const DFlexExtended = styled(DFlexStyled)<DFlexExtendsProps>`
  ${(props) =>
    props.bold &&
    css`
      font-weight: bold;
    `};

  color: ${(props) => (props.textColor ? props.textColor : props.theme.colors.text)};
  text-transform: uppercase;
  font-size: 1.1rem;
  &:not(:last-child) {
    margin-bottom: ${(props) => props.theme.spacing};
  }
`
