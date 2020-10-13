import { FaRegCheckCircle } from 'react-icons/fa';
import styled from 'styled-components';

export const Container = styled.main`
  padding: 10px;
  margin: 0 auto;
  max-width: 800px;
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

export const Order = styled.div`
  width: 100%;
`;

export const Success = styled.div`
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
`;

export const SuccessIcon = styled(FaRegCheckCircle).attrs({
  color: '#ff7800',
  size: 50,
})``;

export const SuccessText = styled.strong`
  color: #ff7800;
  display: block;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  margin-top: 15px;
  text-align: center;
  text-transform: uppercase;
`;

export const Complement = styled.aside`
  margin-top: 20px;
  width: 100%;

  @media (min-width: 600px) {
    margin-top: 0;
    margin-left: 20px;
    max-width: 300px;
  }
`;

export const Box = styled.div`
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 29, 0.22);
  padding: 12px;
  width: 100%;
`;

export const Payment = styled.section``;

export const Products = styled.section`
  margin-top: 20px;
`;

export const ProductItem = styled.div`
  border-radius: 3px;
  border: 1px solid #eee;
  padding: 12px;
  width: 100%;

  display: flex;
  flex-direction: row;

  & + div {
    margin-top: 15px;
  }
`;

export const ProductImage = styled.img`
  width: 42px;
  height: 42px;
`;

export const ProductName = styled.div`
  color: #212122;
  font-size: 13px;
  line-height: 16px;
  margin-left: 10px;
`;

export const PaymentText = styled.p`
  color: #000;
  font-size: 14px;
  line-height: 17px;
  text-transform: uppercase;
`;
