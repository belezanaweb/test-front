import styled from 'styled-components'; // eslint-disable-line import/no-extraneous-dependencies

const CardStyled = styled.div`
  border-radius: 3px;
  font-family: 'HelveticaNeueCyr';
  background-color: ${props => (props.transparent ? 'transparent' : '#fff')};
  padding: 12px;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 20px;
  border: ${props => (props.transparent ? '1px solid #CCC' : 'none')};
  box-shadow: ${props =>
    props.transparent ? 'none' : '1px 1px 5px 0 rgba(0, 0, 29, 0.22)'};
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export default CardStyled;
