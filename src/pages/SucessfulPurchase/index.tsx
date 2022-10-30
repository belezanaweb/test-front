import React from "react";
import PriceCartContainer from "../../components/PriceCartContainer";
import ProductsCartContainer from "../../components/ProductsCartContainer";
import { useCart } from "../../contexts/cart";
import CheckIcon from "@mui/icons-material/Check";
import {
  CreditCardContainerData,
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
        <p>
          <span>{cart.paymentData?.creditCardNumber}</span>
          <span>{cart.paymentData?.ownerName}</span>
          <span>{cart.paymentData?.validateDate}</span>
        </p>
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
