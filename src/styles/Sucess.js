import styled from 'styled-components';

const Content = styled.div`
  flex: 1;
`;

const Done = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img{
    width: 39.5px;
    height: 39.5px;
    margin-top: 2px;
    margin-bottom: 11px;
  }

  p{
    color: #FF7800;
    font-size: 14px;
    font-weight: bold;
    line-height: 17px;
    text-transform: uppercase;
    margin-bottom: 20.4px
  }
`;

const CreditCard = styled.div`
  padding: 12px;
  background: white;
  box-shadow:  1px 1px 5px 0 rgba(0,0,29,0.22);
  border-radius: 3px;
  margin-bottom: 10px;
  @media(min-width: 769px){
    margin-right: 10px;
  }

  p{
    font-size: 14px;
    line-height: 17px;
  }
`;

export default {
  Content,
  Done,
  CreditCard
}
