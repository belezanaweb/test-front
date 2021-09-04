import styled from 'styled-components'

export const Container = styled.div`
  padding: 15px;
  margin: 20px 0;
  border: 1px solid #ccc;
  border-radius: 3px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span + span {
      display: block;
      margin-bottom: 9px;
    }

    strong {
      margin-top: 9px;
    }
  }

  .discount {
    color: var(--primary);
  }
`
