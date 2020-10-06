import React from 'react'
import { useSelector } from 'react-redux'
import { StepsStyled, ItemStyled, DFlexExtended } from './styles'
import { ContainerStyled } from '../../styles/global'
import { RootState } from '../../redux'
import { IStepValues } from '../../redux/ducks/steps'

const Steps: React.FC = () => {
  const step = useSelector<RootState, IStepValues>((state) => {
    return state.stepReducer
  })
  return (
    <StepsStyled>
      <ContainerStyled>
        <DFlexExtended justifyContent="space-around" alignItems="center">
          <ItemStyled active={step.current === 1}>Sacola</ItemStyled>
          <ItemStyled active={step.current === 2}>Pagamento</ItemStyled>
          <ItemStyled active={step.current === 3}>Confirmação</ItemStyled>
        </DFlexExtended>
      </ContainerStyled>
    </StepsStyled>
  )
}

export default Steps
