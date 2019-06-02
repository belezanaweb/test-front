import styled from 'styled-components';
import colors from '../../../../configs/colors';
import metrics from '../../../../configs/metrics';

export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  width: 360px;
  justify-content: space-between;
  height: 40px;
  align-items: center;
  background-color: #FFFFFF;
  border-radius: ${metrics.borderRadius};
  box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
  padding: 0px 16px 0 21px;
  letter-spacing: 0px;
`;

export const Item = styled.div`
  display: block;
  color: ${props => props.active ? colors.primary : colors.graylight};
  font-weight: bold;
  font-size: ${metrics.fonts.size.small};
  line-height: 16px;
  text-transform: uppercase;
  font-family: 'Helvetica Neue';
  text-align: center;
`;
