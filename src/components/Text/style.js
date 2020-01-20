import styled from 'styled-components'; // eslint-disable-line import/no-extraneous-dependencies

const TextStyled = styled.p`
  font-size: ${props => (props.size ? props.size : '13px')};
  color: ${props => (props.color ? props.color : 'black')};
  text-align: ${props => (props.center ? 'center' : 'left')};
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'initial')};
  letter-spacing: 0.93px;
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
  font-family: 'HelveticaNeueCyr';
  margin: ${props => (props.margin ? props.margin : '0')};
  font-style: normal;
`;

export default TextStyled;
