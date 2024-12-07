const orders = [
  {
    restaurantId: 1,
    orders: [
      {
        id: 1,
        dish: "spaghetti",
        amount: 2,
        totalPrice: 19.9,
      },
      {
        id: 2,
        dish: "pizza margherita",
        amount: 1,
        totalPrice: 12.5,
      },
    ],
  },
  {
    restaurantId: 2,
    orders: [
      {
        id: 3,
        dish: "sushi platter",
        amount: 3,
        totalPrice: 45.0,
      },
      {
        id: 4,
        dish: "tempura",
        amount: 2,
        totalPrice: 25.5,
      },
    ],
  },
  {
    restaurantId: 3,
    orders: [
      {
        id: 5,
        dish: "burger deluxe",
        amount: 4,
        totalPrice: 48.0,
      },
      {
        id: 6,
        dish: "fries",
        amount: 4,
        totalPrice: 12.0,
      },
    ],
  },
];

const create = (restaurantId: number, order: Record<string, any>) => {
  // ...código para criação de um pedido, verificação se restaurante e produtos existe. etc.
  const createdOrder = {
    id: Math.floor(Math.random() * 10000),
    ...order,
  };
  const response = {
    restaurantId,
    orders: [createdOrder],
  };
  return response;
};

const find = (restaurantId: number) => {
  return orders.filter((order) => order.restaurantId === restaurantId);
};

const update = (
  restaurantId: number,
  orderId: number,
  updateInfo: Record<string, any>
) => {
  // ...código para criação de um pedido, verificação se restaurante e produtos existe. etc.
  const updatedOrder = {
    id: orderId,
    ...updateInfo,
  };
  const response = {
    restaurantId,
    orders: [updatedOrder],
  };
  return response;
};

const remove = (restaurantId: number, orderId: number) => {
  return `Removed order ${orderId} from restaurant ${restaurantId}`;
};

const restaurantOrdersService = {
  create,
  find,
  update,
  remove,
};

export default restaurantOrdersService;
