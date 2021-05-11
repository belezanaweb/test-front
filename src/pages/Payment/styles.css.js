import styled from 'styled-components'
import colors from '../../utils/colors'

export const Container = styled.div`
  padding: 10px;
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

export const CardForm = styled.div`
  border-radius: 3px;
  background-color: ${colors.white};
  box-shadow: 1px 1px 5px 0 ${colors.shadow};
  padding: 12px 10px 0 12px;
  margin-top: 6px;
  display: flow-root;

  @media (min-width: 800px) {
    width: 55%;
    margin-top: 0;
  }
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

export const ContainerInput = styled.div`
  margin-bottom: 25px;
  width: 100%;
`

export const SideSideInput = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    flex: 1;
  }

  div:first-child {
    margin-right: 20px;
  }
`
