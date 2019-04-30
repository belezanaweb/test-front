import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 40px;
  background: ${props => props.theme.color.white};
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
`;

export const TitleStep = styled.p`
  flex-grow: 1;
  line-height: 3.3;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: ${props => props.active ? props.theme.color.orange : props.theme.color.grayMedium};
`;
