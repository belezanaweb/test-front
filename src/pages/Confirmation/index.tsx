import { Card, ProductItem, Summary, Template, Typography } from "components";
import React from "react";
import { useTheme } from "styled-components";
import { ProductsList } from "./styles";
import { ConfirmationProps } from "./types";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Confirmation: React.FC<ConfirmationProps> = () => {
  const { colors } = useTheme();

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
            <ProductItem
              showPrice={false}
              data={{
                image:
                  "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png",
                description:
                  "LOréal Professionnel Expert Absolut Repair Cortex Lipidium",
                price: "299,00",
              }}
            />
            <ProductItem
              showPrice={false}
              data={{
                image:
                  "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png",
                description:
                  "LOréal Professionnel Expert Absolut Repair Cortex Lipidium",
                price: "299,00",
              }}
            />
            <ProductItem
              showPrice={false}
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
    </Template>
  );
};

export default Confirmation;
