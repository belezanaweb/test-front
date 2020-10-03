import styled from 'styled-components';

const Title = styled.h1`
 font-size: 14px;
 color: #999;
 margin-bottom: 5px;
 line-height: 17px;
 text-transform: uppercase;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;

  @media(min-width: 769px){
    flex-direction: row;
    justify-content: space-between;
  }
`

const Products = styled.div`
  display: flex;
  flex-direction: column;

  @media(min-width: 769px){
    flex: 1;
    margin-right: 10px;
  }
`;

const List = styled.ul`
  padding: 12px;
  background: white;
  box-shadow:  1px 1px 5px 0 rgba(0,0,29,0.22);
  border-radius: 3px;
`;

const Product = styled.li`
  display: flex;
  flex-direction: row;
  list-style: none;
  border: 1px solid #EEE;
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 15px;

  &:last-child{
    margin-bottom: 0;
  }
`;

const Image = styled.img`
  margin-right: 10px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Description = styled.p`
  font-size: 13px;
  line-height: 16px;
`;

const Price = styled.p`
  margin-top: 15px;
  font-weight: bold;
  text-align: right;
  font-size: 14px;
`;

const Purchase = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #CCC;
  border-radius: 3px;
  @media(min-width: 769px){
    margin-top: 0;
  }
`;
const PurchaseInfo = styled.div`
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

const PurchaseDiscount = styled(PurchaseInfo)`
  p{
    color: #FF7800;
    margin-bottom: 16px;
  }
`;

const PurchaseTotal = styled(PurchaseInfo)`
  p{
    font-weight: bold;
    margin-bottom: 0;
  }
`;

export default {
  Title,
  Flex,
  Products,
  List,
  Product,
  Info,
  Image,
  Description,
  Price,
  Purchase,
  PurchaseInfo,
  PurchaseDiscount,
  PurchaseTotal
}