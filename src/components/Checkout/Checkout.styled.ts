import styled from 'styled-components'
import { ContainerStyled } from '../../shared/Container/Container.styled'

export const CheckoutCardContainer = styled(ContainerStyled)`
  display: flex;
  gap: 20px;
  flex-direction: column;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    align-items: start;
    flex-direction: row;
  }
`

export const CheckoutCardContent = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  flex: 1;
`

export const CheckoutCardDetails = styled.div`
  flex: 1;
  margin-left: -8px;
  margin-right: -8px;
  background-color: #fff;
  padding: 25px 12px;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    margin-right: 0;
    margin-left: 0;
    border: 1px solid ${(props) => props.theme.colors.gray[100]};
    border-radius: 4px;
    max-width: 410px;
  }
`

export const CheckoutCardDetailsContainer = styled(ContainerStyled)`
  display: flex;
  gap: 25px;
  flex-direction: column;
`

export const CheckoutCardForm = styled.form`
  display: grid;
  gap: 15px;
`

export const CheckoutCardFormControl = styled.div`
  display: flex;
  width: 100%;
  gap: 15px;
`

export const CheckoutResume = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  span {
    color: ${(props) => props.theme.colors.gray[400]};
  }
`

export const CheckoutResumeTitle = styled.h2`
  margin-bottom: 0;
`
