import { Request, Response } from "express";

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

export const getRestaurantOrders = async (req: Request, res: Response) => {
  const params = req.params;
  const restaurantId = parseInt(params.id);
  if (!restaurantId) {
    res.status(400).send("Bad Request: restaurantId is required");
    return;
  }
  const restaurantOrders = orders.filter(
    (order) => order.restaurantId === restaurantId
  );
  if (!restaurantOrders.length) {
    res
      .status(404)
      .send(`Not Found: no orders for restaurant ${restaurantId} were found`);
    return;
  }

  const response = {
    data: restaurantOrders,
  };
  res.send(response);
};
