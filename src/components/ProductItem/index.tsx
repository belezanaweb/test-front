import { Typography } from "components";
import React from "react";
import { Wrapper, Image, Content, Price } from "./styles";
import { ProductItemProps } from "./types";

const ProductItem: React.FC<ProductItemProps> = () => {
  return (
    <Wrapper>
      <Image>Img</Image>
      <Content>
        <Typography color="#212122">
          LOréal Professionnel Expert Absolut Repair Cortex Lipidium
        </Typography>
        <Price>R$ 299,00</Price>
      </Content>
    </Wrapper>
  );
};

export default ProductItem;
