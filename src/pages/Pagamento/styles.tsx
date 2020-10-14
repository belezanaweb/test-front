import styled from 'styled-components';
import BaseButton from '../../components/Button';

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

export const Complement = styled.aside`
  margin-top: 20px;
  width: 100%;

  @media (min-width: 600px) {
    margin-top: 0;
    margin-left: 20px;
    max-width: 300px;
  }
`;

export const Title = styled.h2`
  color: #999;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  margin: 10px;
  text-transform: uppercase;
`;

export const Button = styled(BaseButton)`
  margin-top: 20px;
  width: 100%;
`;

export const CreditCard = styled.section`
  width: 100%;

  form > div + div {
    margin-top: 8px;
  }
`;

export const InputGroup = styled.div`
  margin-top: 8px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > div {
    margin: 0;

    &:first-child {
      width: 60%;
      margin-right: 10px;
    }
  }
`;
