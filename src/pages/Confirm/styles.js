import styled from 'styled-components'
import px2vw from '../../utils/px2vw'
import { FaRegCheckCircle } from '@react-icons/all-files/fa/FaRegCheckCircle'

export const Container = styled.div`
  width: 100%;
  flex-direction: column;
  padding: ${px2vw(20)} ${px2vw(20)} ${px2vw(40)} ${px2vw(20)};
`

export const BlockSucess = styled.div`
  align-items: center;
  flex-direction: column;
`

export const PaymentContainer = styled.div`
  width: 100%;
  background-color: #fff;
  padding: ${px2vw(20)} ${px2vw(20)} 0 ${px2vw(20)};
  margin-bottom: ${px2vw(40)};
  flex-direction: column;

  align-items: flex-start !important;

  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (min-width: 769px) {
    align-items: center;
  }

  padding-bottom: ${px2vw(20)};
`

export const SucessText = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  color: #ff7800;
  margin-bottom: ${px2vw(20)};
  margin-top: ${px2vw(20)};
`

export const ConfirmIcon = styled(FaRegCheckCircle)`
  color: #ff7800;
`
