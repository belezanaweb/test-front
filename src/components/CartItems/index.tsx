import styled from "styled-components";
import { useResizeDetector } from 'react-resize-detector';
import { Card } from "../../theme/styles";
import { CartItemsProps, CartThumbType } from "../../types";

export function CartItems({ items, isConfirmationOnly }: CartItemsProps) {
  const { width: componentWidth, ref } = useResizeDetector({
    handleHeight: false,
    refreshMode: 'debounce',
    refreshRate: 1000,
  });

  const isMobile = componentWidth && componentWidth < 400;

  const shortenProductName = (productName: string) => {
    if(productName.length >= 72) {
      return productName.split(' - ')[0];
    }

    return productName;
  }

  return (
    <Card ref={ref}>
      <ItemsList>
        {items?.map(item => (
          <Item isSmall={isConfirmationOnly} key={item.product.name}>
            <ItemThumb
              isSmall={isConfirmationOnly}
              src={isMobile ? item.product.imageObjects[0].small : item.product.imageObjects[0].large}
              loading="lazy"
            />
            <ItemContent>
              <ItemName>
                {isMobile ? shortenProductName(item.product.name) : item.product.name}
              </ItemName>
              {!isConfirmationOnly && (
                <ItemPrice>
                  {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(item.product.priceSpecification.price)}
                </ItemPrice>
              )}
            </ItemContent>
          </Item>
        ))}
      </ItemsList>
    </Card>
  );
}

const ItemsList = styled.ul``;

const Item = styled.li<CartThumbType>`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 3px;
  padding: ${({ isSmall }) => isSmall ? '11px' : '11px 10px 14px 10px'};

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  @media screen and (min-width: ${({ theme }) => theme.deviceSize.tabletMin}) {
    padding: 20px;
  }
`;

const ItemThumb = styled.img<CartThumbType>`
  width: ${({ isSmall }) => isSmall ? '42px' : '65px'};
  height: ${({ isSmall }) => isSmall ? '42px' : '65px'};
  margin-right: 11px;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.gray300};
    position: absolute;
    top: 0;
    left: 0;
  }

  &::after {
    content: "";
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='149' height='132'%3E%3Cpath d='M143.209,105.968c0,6.25-5.113,11.364-11.363,11.364H18.203c-6.25 0-11.363-5.113-11.363-11.364v-86.37c0-6.25,5.113-11.363 11.363-11.363h113.643c6.25,0,11.363,5.113,11.363,11.363V105.968z M18.203,17.326c-1.207,0-2.271,1.068-2.271,2.271v86.37c0,1.207,1.065 2.271,2.271,2.271h113.643c1.203,0,2.274-1.064 2.274-2.271v-86.37c0-1.203-1.071-2.271-2.274-2.271H18.203z M38.661,53.691c-7.529,0-13.641-6.108-13.641-13.635s6.112-13.638,13.641-13.638 c7.526,0,13.632,6.111,13.632,13.638S46.188,53.691,38.661,53.691z M125.025,99.15H25.02V85.51l22.73-22.724l11.363,11.36l36.365-36.361l29.547,29.547V99.15z'/%3E%3C/svg%3E");
    width: 25px;
    height: 20px;
    background-size: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (min-width: ${({ theme }) => theme.deviceSize.tabletMin}) {
    width: 100px;
    height: 100px;
    margin-right: 22px;
  }
`;

const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.deviceSize.tabletMin}) {
    flex-direction: row;
    align-items: center;
  }
`;

const ItemName = styled.p`
  color: ${({ theme }) => theme.colors.black400};
  font-size: 13px;
  line-height: 16px;
  font-weight: 300;

  @media screen and (min-width: ${({ theme }) => theme.deviceSize.tabletMin}) {
    font-size: 16px;
    line-height: 24px;
    max-width: 420px;
  }
`;

const ItemPrice = styled.span`
  color: ${({ theme }) => theme.colors.black400};
  font-size: 14px;
  line-height: 17px;
  font-weight: bold;
  display: block;
  text-align: right;

  @media screen and (min-width: ${({ theme }) => theme.deviceSize.tabletMin}) {
    font-size: 16px;
    line-height: 19px;
  }
`;
