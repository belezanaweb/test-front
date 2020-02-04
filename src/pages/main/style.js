import styled from "styled-components";

export const Container = styled.div``;

export const Produtos = styled.div`
  padding: 0px 10px 0 10px;
`;

export const List = styled.ul`
  padding: 10px;
  background: #ffffff;
  li {
    display: flex;
    border: solid 1px #ccc;
    border-radius: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    justify-content: space-between;
  }
`;

export const DetalhesProdutos = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 12px;
    text-align: justify;
    padding: 5px;
  }
  span {
    text-align: end;
    margin-right: 5px;
    font-weight: bold;
    font-size: 14px;
  }
`;

export const Titulo = styled.h3`
  color: #999999;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 13px;
`;

export const ListaTotal = styled.ul`
  display: flex;
  border: solid 1px #ccc;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 10px;
  li {
    justify-content: space-between;
    display: flex;
    font-size: 13px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;

export const ContainerTotal = styled.div`
  padding: 0px 10px 0 10px;
  margin-top: 10px;
`;

export const Desconto = styled.li`
  span {
    color: #ff7800;
  }
`;

export const Total = styled.li`
  font-weight: 800;
`;
