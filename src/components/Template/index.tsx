import { AppBar, TabItem, Tabs } from "components";
import React from "react";
import { useRouteMatch } from "react-router";
import { Content } from "./styles";
import { TemplateProps } from "./types";

const Template: React.FC<TemplateProps> = ({ children }: TemplateProps) => {
  const { url } = useRouteMatch();

  return (
    <>
      <AppBar>
        <Tabs>
          <TabItem active={url === "/cart"}>SACOLA</TabItem>
          <TabItem active={url === "/payment"}>PAGAMENTO</TabItem>
          <TabItem active={url === "/confirmation"}>CONFIRMAÇÃO</TabItem>
        </Tabs>
      </AppBar>

      <Content>{children}</Content>
    </>
  );
};

export default Template;
