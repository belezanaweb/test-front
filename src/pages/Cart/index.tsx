import {
  Button,
  Card,
  AppBar,
  ProductItem,
  SummaryItem,
  Typography,
  Tabs,
  TabItem,
  Summary,
} from "components";
import React from "react";
import { useTheme } from "styled-components";
import { Content, ProductsList } from "./styles";
import { CartProps } from "./types";

const Cart: React.FC<CartProps> = () => {
  const { colors } = useTheme();

  return (
    <>
      <AppBar>
        <Tabs>
          <TabItem active>SACOLA</TabItem>
          <TabItem>PAGAMENTO</TabItem>
          <TabItem>CONFIRMAÇÃO</TabItem>
        </Tabs>
      </AppBar>

      <Content>
        <div>
          <Typography as="h2" bold gutterBottom>
            PRODUTOS
          </Typography>
          <Card>
            <ProductsList>
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </ProductsList>
          </Card>
        </div>

        <Summary>
          <SummaryItem color={colors.dark} label="PRODUTOS" value="R$ 624,80" />
          <SummaryItem color={colors.dark} label="FRETE" value="R$ 5,30" />
          <SummaryItem
            color={colors.primary.light}
            label="DESCONTO"
            value="- R$ 30,00"
          />
          <SummaryItem
            color={colors.dark}
            bold
            label="TOTAL"
            value="R$ 600,10"
          />
        </Summary>

        <Button>SERGUIR PARA O PAGAMENTO</Button>
      </Content>
    </>
  );
};

export default Cart;
