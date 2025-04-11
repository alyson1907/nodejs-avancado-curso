export type CreateOrderRequestDTO = {
  dishes: {
    dishName: string;
    amount: number;
    price: number;
  }[];
};

export type UpdateOrderRequestDTO = {
  status: string;
};
