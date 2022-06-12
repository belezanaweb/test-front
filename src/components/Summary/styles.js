import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  border: 1px solid #d4d4d4;
  padding: 15px;

  div {
    width: 100%;
    font-size: 0.875rem;
    color: #212122;
    display: flex;
    justify-content: space-between;

    &:not(:last-child) {
      margin-bottom: 8px;
    }

    &:nth-child(3) {
      margin-bottom: 16px;
    }
  }
`

export const Discount = styled.div`
  p {
    color: #ff7800;
  }
`
export const Total = styled.div`
  p {
    font-weight: 800;
  }
`
