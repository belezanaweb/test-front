import styled from 'styled-components'

export const Title = styled.h1`
    font-family: 'Arial';
    font-weight: bold;
    text-transform: uppercase;
    color:#999;
    font-size: 0.9em;
    margin: 1em 1.5em 0;
`

export const Container = styled.div`
  div{
    display:flex;
    align-items:center;
    flex-direction:column;
    padding-top:30px;

    .success, i{
      text-align:center;
      color:#fa6e39;
    }

    i{
      font-size:50px;
    }
  }
`;

export const Section = styled.section`
  box-shadow: 0 0 5px #aba8a8;
  background: #fff;
  padding: 20px;
  width:90%;
  margin: 5px auto;
  text-transform:uppercase;
  font-family:'Arial'
`;
