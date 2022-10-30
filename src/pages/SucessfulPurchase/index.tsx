import React from "react";
import PriceCartContainer from "../../components/PriceCartContainer";
import ProductsCartContainer from "../../components/ProductsCartContainer";
import { useCart } from "../../contexts/cart";
import CheckIcon from "@mui/icons-material/Check";
import {
  CreditCardContainerData,
  CreditCardContentData,
  Container,
  IconRoundedBorder,
  TitleContainer,
} from "./styles";

const SucessfulPurchase = () => {
  const { cart } = useCart();

  return (
    <Container>
      <TitleContainer>
        <IconRoundedBorder>
          <CheckIcon />
        </IconRoundedBorder>
        <h1>COMPRA EFETUADA COM SUCESSO</h1>
      </TitleContainer>
      <CreditCardContainerData>
        <h2>PAGAMENTO</h2>
        <CreditCardContentData>
          <p>{cart.paymentData?.creditCardNumber}</p>
          <p>{cart.paymentData?.ownerName}</p>
          <p>{cart.paymentData?.validateDate}</p>
        </CreditCardContentData>
      </CreditCardContainerData>
      <ProductsCartContainer items={cart.items} useSmallForm={true} />
      <PriceCartContainer
        discount={cart.discount}
        shippingTotal={cart.shippingTotal}
        subTotal={cart.subTotal}
        total={cart.total}
      />
    </Container>
  );
};

export default SucessfulPurchase;
