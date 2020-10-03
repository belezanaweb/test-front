import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #CCC;
  border-radius: 3px;
  @media(min-width: 769px){
    margin-top: 0;
  }
`;
export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
`;

export const Discount = styled(Info)`
  p{
    color: #FF7800;
    margin-bottom: 16px;
  }
`;

export const Total = styled(Info)`
  p{
    font-weight: bold;
    margin-bottom: 0;
  }
`;

export default {
  Container,
  Info,
  Discount,
  Total
}