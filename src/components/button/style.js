import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  display:flex;
  a{
    width:93%;
    text-decoration:none;
    margin: 0 auto 20px;
  }

  .disable-link{
    pointer-events:none
  }
`;

export const Button = styled.button.attrs({
  type: (props => (props.type === 'submit' ? 'submit' : 'button'))
  })`
  background-color: ${props => (props.disabled ? '#ccc' : '#fa6e39')};
  font-size: 1.5em;
  text-transform: uppercase;
  font-family: 'Arial';
  border-radius: 5px;
  box-shadow: 0 5px 0px ${props => (props.disabled ? '#ccc' : '#fa6e39')};
  padding: 18px;
  font-weight: bold;
  border: none;
  width: 100%;
  color:#fff;

  &.diabled{

  }

  &:hover, &:link{
    background-color: #d45c2f;
    box-shadow: 0 5px 0px #d45c2f;
    border: none;
  }

`;
