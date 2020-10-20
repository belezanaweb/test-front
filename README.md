# Rodrigo Godoy - Front-end

Para instalar o projeto, basta rodar no terminal

```
npm i
```

Para rodar no seu local, rode o comando

```
npm start
```

## Considerações
Em uma segunda versão, seria o ideal melhorar as verificações em pagamento, como por exemplo, não deixar que o usuário digite uma data inferior ao dia atual em data de validade do cartão. Também seria melhor utilizar o redux para não fazer três requisições na API, pensei em gravar no localStorage mas acredito que não teria muita segurança, já que o usuário poderia trocar os valores no localStorage, mesmo que a API na hora do pagamento bloqueie esse tipo de alteração, não seria muito bom deixar essa opção de qualquer maneira.

Comecei utilizando o Styled Components, porém ainda não tenho tanta familiaridade com ele, e acabaria acrescentando um tempo maior no prazo de entrega, e talvez o código não seguiria boas práticas.

Não criei os testes unitários, porque ainda estou estudando e aprendendo sobre e não tenho o conhecimento necessário para incluir bons testes (ainda).

Tentei ao máximo não utilizar bibliotecas e plugins externos apenas para o teste, assim posso mostrar melhor meus conhecimentos, mas acredito que em alguns momentos do projeto acelerariam o desenvolvimento, mas mesmo assim, colocaria com cautela é claro (rs).


