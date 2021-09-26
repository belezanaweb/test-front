import React from 'react'

/**
 * Assets
 */
import iconOk from '../../assets/iconOk.png'

/**
 * Styles
 */
import { ContainerFinishSuccess, Wrapper, Icon, IconWrapper, Message } from './styles'

const FinishSuccess = () => {
  return (
    <ContainerFinishSuccess>
      <Wrapper>
        <IconWrapper>
          <Icon src={iconOk} />
        </IconWrapper>
        <Message>PURCHASE SUCCESSFULLY</Message>
      </Wrapper>
    </ContainerFinishSuccess>
  )
}

export default FinishSuccess
