import styled from 'styled-components';
import colors from '../../../configs/colors';
import checkImg from '../../../assets/images/check.png';

export const CheckIcon = styled.div`
  width: 39.5px;
  height: 39.5px;
  border: 2px ${colors.primary} solid;
  border-radius: 20px;
  position: relative;
  &:after{
    position: absolute;
    content: " ";
    background-image: url(${checkImg});
    background-repeat: no-repeat;
    background-position: 50%;
    width: 100%;
    height: 39px;
  }
`;