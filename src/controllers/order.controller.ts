import { Request, Response } from "express";
import restaurantOrdersService from "../services/order.service";

export const getRestaurantOrders = (req: Request, res: Response) => {
  const params = req.params;
  const restaurantId = parseInt(params.id);
  if (!restaurantId) {
    res.status(400).send("Bad Request: restaurantId é um campo obrigatório");
    return;
  }

  const restaurantOrders = restaurantOrdersService.find(restaurantId);
  if (!restaurantOrders.length) {
    res.status(404).send("Not Found: nenhum pedido encontrado!");
    return;
  }

  const response = {
    data: restaurantOrders,
  };
  res.send(response);
};
