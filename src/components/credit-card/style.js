import styled from 'styled-components'

export const Container = styled.div`
  font-family: 'Arial';
  font-weight: bold;
  h1{
    text-transform: uppercase;
    color:#999;
    font-size: 0.7em;
    margin: 1em 1.5em 0;
  }
`;

export const Section = styled.section`
  padding:20px;
  font-size: 0.8em;
  color: #cdcdcd;
  box-shadow: 0 0 5px #aba8a8;
  background: #fff;
  padding: 5px;
  width:90%;
  margin: 5px auto;

  label{
    width:95%;
    margin:auto;
  }

  input{
    border:1px solid #e8e8e8;
    font-size:1.8em;
    box-shadow:none;
    width:95%;
    margin:0 auto;

    &.error{
      border:1px solid red
    }
  }

  p{
    margin:-10px 0 20px 15px;
  }

  form{
    div{
      display:flex;
      margin-top:0;
      p{
        font-size:0.8em;
      }
    }
  }
`

export const FormControl = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  color:red;

  &:last-child{
    padding:0 50px;
  }

  label{
    color: #cdcdcd;
  }

`;

export const FormControlFloat = styled.div`
  width: 100%;
  display: flex;
  flex-direction:column;
  color: red;
  padding: 0 0.5em;

  label{
    color: #cdcdcd;
  }

  &.push{
    width:50%;
  }
`;
