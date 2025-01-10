import OrderStatus from "./enum/order-status.enum";

export type CreateOrderRequestDTO = {
  // TODO trocar por Omit<Dishes, 'id', 'createdAt', ...>[] em módulos futuros
  dishes: {
    dishName: string;
    amount: number;
    price: number;
  }[];
};

export type UpdateOrderRequestDTO = {
  status: OrderStatus;
};
