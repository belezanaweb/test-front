import { Typography } from "components";
import React from "react";
import { Wrapper, Image, Content, Price } from "./styles";
import { ProductItemProps } from "./types";

const ProductItem: React.FC<ProductItemProps> = () => {
  return (
    <Wrapper>
      <Image
        alt="imagem"
        src="https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png"
      />
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
