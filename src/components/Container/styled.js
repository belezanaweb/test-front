import styled from 'styled-components'

/* container página */
export const Container = styled.div`
  width: 800px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0px 10px 20px;

  @media(min-width: 500px) {
      display: flex;
      justify-content: center;
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: center;
  }
    
  }
`
