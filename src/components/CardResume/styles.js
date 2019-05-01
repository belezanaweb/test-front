import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 20px 0 20px;
  border-radius: 3px;
  flex-direction: column;
  padding: 14px 12px 11.5px;
  border: 1px solid ${props => props.theme.color.grayMedium};
`;

export const Info = styled.div`
  display: flex;
  margin-bottom: 9px;
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoBottom = styled(Info)`
  margin-top: 7px;
  margin-bottom: 0px;
`;

export const Text = styled.p`
  font-size: 14px;
  color: ${props => props.color ? props.theme.color[props.color] : props.theme.color.black};
  font-weight: ${props => props.bold ? props.bold : 'normal'}
`;

export const Value = styled(Text)``;
