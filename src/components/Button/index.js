import styled from 'styled-components'
import px2vw from '../../utils/px2vw'

const Button = styled.button`
  border-radius: 3px;
  background-color: #ff6c00;
  box-shadow: inset 0 -3px 0 0 #d45a00, 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  margin-top: ${px2vw(30)};

  padding: ${px2vw(30)} ${px2vw(20)};

  border: none;

  &:hover {
    background-color: #d45a00;
  }

  font-weight: bold;
  color: #fff;
  text-transform: uppercase;

  font-size: ${px2vw(40)};

  @media (min-width: 768px) {
    font-size: ${px2vw(30)};
  }

  @media (min-width: 1024px) and (max-width: 1440px) {
    font-size: ${px2vw(22)};
  }

  @media (min-width: 1440px) {
    font-size: 30px;
  }
`

export default Button
