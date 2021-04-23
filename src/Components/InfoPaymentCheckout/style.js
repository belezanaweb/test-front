import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  border: 1px solid #ccc;
  margin: 5px;
  padding: 15px;

  @media (min-width: 800px) {
    width: 1024px;
  }

  div {
    display: flex;
    justify-content: space-between;
    color: #212122;

    &.discount {
      color: #ff7800;
    }

    &.total {
      font-weight: bold;
    }

    span {
      text-transform: uppercase;
    }

    & + div {
      margin-top: 9px;
    }
  }
`
