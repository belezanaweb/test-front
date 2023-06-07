## Getting Started

Esta aplicação básica consiste na simulação de um carrinho de e-commerce. Ela consome um endpoint que simula um pedido e faz as etapas de simulação de uma compra.

Antes de rodar o projeto, você precisará criar um arquivo chamado `.env` na raiz do repositório. O arquivo deve conter a variável de ambiente `SERVICE_CART_URL` e o seu valor deve ser o endpoint disponibilizado para este desafio.

Ponto importante: a aplicação utiliza o algoritmo de Luhn para validação do número do cartão de crédito. Você precisará inserir o padrão válido para avançar nesta etapa. Alguns exemplos válidos que você pode utilizar:
- 4111 1111 1111 1111
- 5105 1051 0510 5100

Utilize esta aplicação prioritariamente em dispositivos móveis ou simuladores. Infelizmente não houve tempo hábil para adequar a aplicação de forma satisfatória para desktops.

Veja a aplicação em produção [clicanco aqui](https://beleza-na-web-challenge.vercel.app/).

### Para rodar em modo de desenvolvimento:

```bash
make dev
```
### Para buildar a imagem de produção e rodar o projeto:

```bash
make start
```
