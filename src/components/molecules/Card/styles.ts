import styled from 'styled-components'

export const CardContent = styled.section`
  margin: 0.75rem 0 0 0;

  @media (min-width: 767px) {
    width: 783px;
  }

  div.content {
    background-color: #fafafa;
    margin: 0.5rem 0.5rem 1rem 0.5rem;
    padding: 0.5rem;
    border-radius: 3px;
    box-shadow: 0px 0px 5px 2px #d9d9d9;
    max-width: 753px;
  }

  div.content p {
    font-family: 'Helvetica 45 Light', sans-serif;
  }
`
