import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  padding: 13px;
  background-color: #fff;
  border-radius: 3px;
  margin-bottom: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  div {
    width: 100%;
    font-size: 0.875rem;
    color: #212122;
    display: flex;
    justify-content: space-between;
    p {
      text-transform: uppercase;
    }
  }
  @media screen and (min-width: 1024px) {
    div {
      p {
        font-size: 1.2rem;
      }
    }
  }
`
