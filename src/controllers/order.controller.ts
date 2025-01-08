import { Request, Response } from "express";
import restaurantOrdersService from "../services/order.service";

export const createRestaurantOrder = async (req: Request, res: Response) => {
  const params = req.params;
  const order = req.body;
  const restaurantId = parseInt(params.id);
  if (!restaurantId) {
    res.status(400).send("Bad Request: restaurantId is required");
    return;
  }
  const created = restaurantOrdersService.create(restaurantId, order);
  res.status(201).send(created);
};

export const getRestaurantOrders = async (req: Request, res: Response) => {
  const params = req.params;
  const restaurantId = parseInt(params.id);
  if (!restaurantId) {
    res.status(400).send("Bad Request: restaurantId is required");
    return;
  }
  const restaurantOrders = await restaurantOrdersService.find(restaurantId);
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

export const updateRestaurantOrder = async (req: Request, res: Response) => {
  const params = req.params;
  const updateInfo = req.body;
  const restaurantId = parseInt(params.id);
  const orderId = parseInt(params.orderId);
  if (!restaurantId || !orderId) {
    res.status(400).send("Bad Request: restaurantId and orderId is required");
    return;
  }

  const updated = restaurantOrdersService.update(
    restaurantId,
    orderId,
    updateInfo
  );
  res.status(200).send(updated);
};

export const deleteRestaurantOrder = async (req: Request, res: Response) => {
  const params = req.params;
  const updateInfo = req.body;
  const restaurantId = parseInt(params.id);
  const orderId = parseInt(params.orderId);
  if (!restaurantId || !orderId) {
    res.status(400).send("Bad Request: restaurantId and orderId is required");
    return;
  }
  const deleted = restaurantOrdersService.remove(restaurantId, orderId);
  res.status(200).send(deleted);
};
