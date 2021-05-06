import {
  Button,
  Card,
  ProductItem,
  Summary,
  Template,
  Typography,
} from "components";
import React from "react";
import { Link } from "react-router-dom";
import { ProductsList } from "./styles";
import { CartProps } from "./types";

const Cart: React.FC<CartProps> = () => {
  return (
    <Template>
      <div>
        <Typography as="h2" bold gutterBottom>
          PRODUTOS
        </Typography>
        <Card>
          <ProductsList>
            <ProductItem
              data={{
                image:
                  "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png",
                description:
                  "LOréal Professionnel Expert Absolut Repair Cortex Lipidium",
                price: "299,00",
              }}
            />
            <ProductItem
              data={{
                image:
                  "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png",
                description:
                  "LOréal Professionnel Expert Absolut Repair Cortex Lipidium",
                price: "299,00",
              }}
            />
            <ProductItem
              data={{
                image:
                  "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png",
                description:
                  "LOréal Professionnel Expert Absolut Repair Cortex Lipidium",
                price: "299,00",
              }}
            />
          </ProductsList>
        </Card>
      </div>

      <Summary data={[]} />

      <Button as={Link} to="/payment">
        SERGUIR PARA O PAGAMENTO
      </Button>
    </Template>
  );
};

export default Cart;
