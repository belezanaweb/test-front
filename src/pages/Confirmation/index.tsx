import { Card, ProductItem, Summary, Template, Typography } from "components";
import React from "react";
import { useTheme } from "styled-components";
import { ProductsList } from "./styles";
import { ConfirmationProps } from "./types";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useCart } from "hooks/Cart";

const Confirmation: React.FC<ConfirmationProps> = () => {
  const { colors } = useTheme();
  const { cart } = useCart();

  return (
    <Template>
      <div>
        <Typography color={colors.primary.main} bold align="center" as="h1">
          <div>
            <AiOutlineCheckCircle size="5rem" />
          </div>
          COMPRA EFETUADA COM SUCESSO
        </Typography>
      </div>

      <div>
        <Typography as="h2" bold gutterBottom>
          PAGAMENTO
        </Typography>
        <Card>
          <Typography color={colors.dark}>
            ****.****.****.1234
            <br />
            JOSÉ DA SILVA
            <br />
            05/2019
          </Typography>
        </Card>
      </div>

      <div>
        <Typography as="h2" bold gutterBottom>
          PRODUTOS
        </Typography>
        <Card>
          <ProductsList>
            {cart?.items.map((product) => (
              <ProductItem
                showPrice={false}
                key={product.sku}
                data={{
                  image: product.image.medium,
                  description: product.title,
                  price: product.price,
                }}
              />
            ))}
          </ProductsList>
        </Card>
      </div>

      <Summary {...cart} />
    </Template>
  );
};

export default Confirmation;
