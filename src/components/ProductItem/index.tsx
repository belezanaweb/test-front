import { Typography } from "components";
import React from "react";
import { Wrapper, Image, Content, Price } from "./styles";
import { ProductItemProps } from "./types";

const ProductItem: React.FC<ProductItemProps> = ({
  data: { price, description, image },
  showPrice = true,
  ...rest
}: ProductItemProps) => {
  return (
    <Wrapper {...rest}>
      <Image alt="imagem" src={image} />
      <Content>
        <Typography color="#212122">{description}</Typography>
        {showPrice && price && <Price>R$ {price}</Price>}
      </Content>
    </Wrapper>
  );
};

export default ProductItem;
