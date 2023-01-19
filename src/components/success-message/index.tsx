import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const SuccessMessage: React.FC = () => {
  return (
    <Container>
      <ContainerIcon>
        <CheckIcon icon={faCheck} /> 
      </ContainerIcon>
      <Message>COMPRA EFETUADA COM SUCESSO</Message>
    </Container>
  )
};

const ContainerIcon = styled.div`
  border: 1px solid #FF7800;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 11px;
`

const CheckIcon = styled(FontAwesomeIcon)`
  height: 15px;
  width: 20px;
  color: #FF7800;
`

const Container = styled.div`
  margin: 20px 0;
`

const Img = styled.img``

const Message = styled.p`
  color: #FF7800;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  text-align: center;
`


export default SuccessMessage;