import React from "react";
import { CartProps } from "./types";
import {
  Tamplate,
  AppBar,
  Tabs,
  TabItem,
  Content,
  Summary,
  ProductsList,
} from "./styles";
import { Button, Typography, Card, ProductItem, SummaryItem } from "components";

const Cart: React.FC<CartProps> = () => {
  return (
    <Tamplate>
      <AppBar>
        <Tabs>
          <TabItem>SACOLA</TabItem>
          <TabItem>PAGAMENTO</TabItem>
          <TabItem>CONFIRMAÇÃO</TabItem>
        </Tabs>
      </AppBar>

      <Content>
        <div>
          <Typography bold gutterBottom>
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
          <SummaryItem color="#212122" label="PRODUTOS" value="R$ 624,80" />
          <SummaryItem color="#212122" label="FRETE" value="R$ 5,30" />
          <SummaryItem color="#FF7800" label="DESCONTO" value="- R$ 30,00" />
          <SummaryItem color="#212122" bold label="TOTAL" value="R$ 600,10" />
        </Summary>

        <Button>SERGUIR PARA O PAGAMENTO</Button>
      </Content>
    </Tamplate>
  );
};

export default Cart;
