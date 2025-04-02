# Restaurant Orders API

Esta é uma API backend desenvolvida para fins educativos utilizando **Node.js** e **TypeScript**.

Seu principal objetivo é simular o gerenciamento pedidos de um restaurante, oferecendo uma experiência de acompanhamento de status em tempo real com **WebSockets**.

A API permite que clientes realizem seus pedidos nos restaurantes e acompanhem o status da entrega, enquanto os restaurantes têm controle sobre a atualização dos status dos pedidos.

## Sumário

- [Instalação e Execução](#instalação-e-execução)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Uso](#uso)
- [Estrutura de Status de Pedidos](#estrutura-de-status-de-pedidos)
- [Contribuição](#contribuição)

## Instalação e Execução

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/restaurant-orders-api.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd restaurant-orders-api
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Configure as variáveis de ambiente:

   - Crie um arquivo `.env` com as variáveis necessárias, como chave secreta JWT, configurações do banco de dados, etc.

5. Inicie o servidor:
   ```bash
   npm start
   ```

## Funcionalidades

### Endpoints da API

Abaixo estão exemplos de alguns endpoints e requisições suportadas pela API. Uma lista completa pode ser consultada na documentação Swagger que pode ser acessada pelo navegador na rota `/api-docs`

- **POST `/api/restaurant/:id/orders`**

  - Cria um novo pedido para o restaurante com o `id` especificado.
  - **Requisição:** informações do pedido no corpo (JSON).
  - **Resposta:** detalhes do pedido criado.

- **WebSocket `/api/client/order/:id`**

  - Acompanha o status de um pedido em tempo real através de WebSockets.
  - Status possíveis:
    - `CREATED`: Pedido criado.
    - `IN_PROGRESS`: Pedido em preparo.
    - `OUT_FOR_DELIVERY`: Pedido saiu para entrega.
    - `FINISHED`: Pedido entregue.
    - `CANCELED`: Pedido cancelado.

- **POST `/api/restaurant`**

  - Cadastro de novo restaurante no sistema.
  - **Requisição:** nome e descrição no corpo (JSON).
  - **Resposta:** confirmação da criação do restaurante.

- **PATCH `/api/restaurant/:id`**
  - Atualiza informações de um restaurante em específico.
  - **Requisição:** novas informações no corpo (JSON).
  - **Resposta:** confirmação de atualização das informações de um restaurante

## Tecnologias Utilizadas (verificar)

- **Node.js**
- **TypeScript**
- **Express** (criação de rotas e controle de requisições HTTP)
- **WebSockets** (acompanhamento de pedidos em tempo real)

## Uso

### Exemplos de Requisição

#### Criar Pedido

```http
POST /api/restaurant/1/orders
Content-Type: application/json
Authorization: Bearer jwt_token

{
  "dishes": [
    {
      "dishName": "donut",
      "amount": 2,
      "price": 5.99
    },
    {
      "dishName": "croissant de queijo",
      "amount": 5,
      "price": 19.99
    }
  ]
}
```
