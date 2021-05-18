import styled from 'styled-components'
import px2vw from '../../utils/px2vw'

export const Container = styled.div`
  width: 100%;
  flex-direction: column;
  padding: ${px2vw(20)} ${px2vw(20)} ${px2vw(40)} ${px2vw(20)};
`

export const PaymentContainer = styled.div`
  width: 100%;
  background-color: #fff;
  padding: ${px2vw(20)} ${px2vw(20)} 0 ${px2vw(20)};
  margin-bottom: ${px2vw(40)};
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (min-width: 769px) {
    align-items: center;
  }
`

export const ContainerCard = styled.div`
  @media (min-width: 769px) {
    width: 50%;
  }
`

export const Form = styled.form`
  @media (min-width: 769px) {
    width: 50%;
  }
`

export const Row = styled.div`
  flex-direction: row;
  justify-content: space-between;
`
