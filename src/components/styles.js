import styled from 'styled-components'
import * as palette from './../styles/variables'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 18px 12px;
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 29, 0.22);
  flex-direction: column;
  background-color: ${palette.BACKGROUND_CONTAINERS};
  @media (min-width: 900px) {
    width: 100%;
  }
`

export const PageContainer = styled.div`
  @media (min-width: 900px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`

export const SideContainer = styled.div`
  @media (min-width: 900px) {
    margin: 0 10px 10px 10px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    width: 60%;
  }
`
