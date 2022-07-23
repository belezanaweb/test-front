import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  border: 1px solid #d4d4d4;
  padding: 15px;
  border-radius: 3px;
  margin-top: 26px;
  div {
    width: 100%;
    font-size: 0.875rem;
    color: #212122;
    display: flex;
    justify-content: space-between;
    p {
      text-transform: uppercase;
    }
    &:not(:last-child) {
      margin-bottom: 8px;
    }
    &:nth-child(3) {
      margin-bottom: 16px;
    }
  }
  .orange {
    color: #ff7800;
  }
  @media screen and (min-width: 1024px) {
    div {
      p {
        font-size: 1.2rem;
      }
    }
  }
`
