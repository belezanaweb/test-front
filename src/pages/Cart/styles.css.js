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
  margin-top: 5px;

  @media (min-width: 800px) {
    width: 60%;
    margin-top: 0;
  }
`

export const ContainerTitle = styled.div`
  @media (min-width: 800px) {
    display: flex;
    justify-content: center;
  }
`

export const Title = styled.div`
  padding: 0 10px 0 10px;

  @media (min-width: 800px) {
    padding: 0;
    margin-left: 10px;
    width: 70%;
  }
`

export const CardTotal = styled.div`
  margin-top: 20px;

  @media (min-width: 800px) {
    width: 35%;
    margin-top: 0;
  }
`

export const ContainerButton = styled.div`
  margin-top: 20px;

  @media (min-width: 800px) {
    display: flex;
    justify-content: center;
  }
`

export const CustomButtom = styled.div`
  @media (min-width: 800px) {
    width: 30%;
  }
`
