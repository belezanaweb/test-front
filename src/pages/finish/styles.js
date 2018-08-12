import styled from 'styled-components'

export const Container = styled.section`
  padding: 14px 10px;

  @media (min-width: 960px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

export const Wrapper = styled.div`
  @media (min-width: 960px) {
    width: 36%;
    padding-top: 22px;
    margin-top: -118px;
  }
`
