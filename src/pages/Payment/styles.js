import styled from 'styled-components'

export const PayContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`

export const Title = styled.span`
  padding: 0px 10px 5px 10px;
  font-weight: bold;
  color: #999;
  margin-bottom: 1px;
`

export const CardContainer = styled.div`
  background-color: #fff;
  padding: 10px;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
`
export const PageSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    position: relative;
  }
`
