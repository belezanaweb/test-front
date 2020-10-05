import React from 'react'
import { useSelector } from 'react-redux'
import { StepsStyled, ItemStyled, DFlexExtended } from './styles'
import { ContainerStyled } from '../../styles/global'
import { RootState } from '../../redux'

const Steps: React.FC = () => {
  const step = useSelector<RootState, number>((state) => {
    return state.stepReducer
  })
  return (
    <StepsStyled>
      <ContainerStyled>
        <DFlexExtended justifyContent="space-around" alignItems="center">
          <ItemStyled active={step === 1}>Sacola</ItemStyled>
          <ItemStyled active={step === 2}>Pagamento</ItemStyled>
          <ItemStyled active={step === 3}>Confirmação</ItemStyled>
        </DFlexExtended>
      </ContainerStyled>
    </StepsStyled>
  )
}

export default Steps
