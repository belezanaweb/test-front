import styled from 'styled-components'

export const Container = styled.div`
  padding: 10px;
`

export const ContainerInfos = styled.div`
  @media (min-width: 800px) {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
`

export const Infos = styled.div`
  @media (min-width: 800px) {
    display: flex;
    width: 70%;
    justify-content: space-between;
  }
`

export const CardProducts = styled.div`
  margin-top: 15px;

  @media (min-width: 800px) {
    width: 75%;
    margin-top: 0;
  }
`

export const PaymentCard = styled.div`
  margin-top: 20px;

  @media (min-width: 800px) {
    margin-top: 0;
  }
`

export const Title = styled.div`
  padding: 0 10px 0 10px;
  margin-bottom: 5px;

  @media (min-width: 800px) {
    width: 20%;
  }
`

export const CardTotal = styled.div`
  margin-top: 20px;

  @media (min-width: 800px) {
    width: 35%;
    margin-top: 23px;
  }
`
