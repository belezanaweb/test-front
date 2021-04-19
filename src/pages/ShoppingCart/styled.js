import styled from 'styled-components'
import { colors } from '../../assets/styled/tokens'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.grayBackground};
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  align-items: center;
`

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  min-height: 325px;
  overflow: auto;
  background-color: ${colors.white};
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  border-radius: 3px;
  margin-top: 5px;
  margin-bottom: 20px;
  align-items: center;

  @media screen and (max-device-width: 375px) {
    width: 341px;
  }
`
