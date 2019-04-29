import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 90px;
  border-radius: 3px;
  padding: 11px 10px 13px;
  border: 1px solid ${props => props.theme.color.grayLight};
  margin-bottom: 15px;
`;

export const ProductImage = styled.img`
  width: 65px;
  height: 65px;
  align-self: center;
`;

export const Info = styled.div`
  display: flex;
  margin-left: 10px;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductName = styled.p`
  font-size: 13px;
  line-height: 1.3;
  color: ${props => props.theme.color.black};
`;

export const ProductPrice = styled.p`
  font-size: 14px;
  font-weight: bold;
  align-self: flex-end;
  color: ${props => props.theme.color.black};
`;
