import styled, { css } from 'styled-components';

interface SummaryItemProps {
  highlight?: boolean;
  bolder?: boolean;
}

export const Container = styled.main`
  padding: 10px;
  margin: 0 auto;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const Products = styled.ul`
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  padding: 12px;
  width: 100%;
`;

export const ProductItem = styled.li`
  border: 1px solid #eee;
  border-radius: 3px;
  padding: 12px;

  display: flex;
  flex-direction: row;
`;

export const ProductInfo = styled.div`
  margin-left: 12px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductImage = styled.img`
  width: 65px;
  height: 65px;
`;

export const ProductName = styled.strong`
  font-size: 13px;
  text-align: left;
`;

export const ProductValue = styled.div`
  text-align: right;
  font-size: 14px;
  font-weight: 700;
  text-align: right;
`;

export const Summary = styled.aside`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-top: 20px;
  padding: 12px;
  width: 100%;

  @media (min-width: 600px) {
    margin-top: 0;
    margin-left: 20px;
    max-width: 300px;
  }
`;

export const SummaryItem = styled.p<SummaryItemProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & + p:not(:last-child) {
    margin-top: 10px;
  }
  &:last-child {
    font-weight: 700;
    margin-top: 16px;
  }

  ${props =>
    props.highlight &&
    css`
      &,
      span {
        color: #ff7800;
      }
    `}
`;

export const SummaryItemText = styled.span`
  font-size: 14px;
  text-align: left;
  text-transform: uppercase;
`;

export const SummaryItemValue = styled.span`
  font-size: 14px;
  text-align: right;
  text-transform: uppercase;
`;

export const Title = styled.h2`
  color: #999;
  font-family: 'Helvetica Neue';
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  margin: 10px;
  text-transform: uppercase;
`;
