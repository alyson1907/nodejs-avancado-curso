import { NextFunction, Request, Response } from "express";
import restaurantOrdersService from "../services/order.service";
import { CreateOrderRequestDTO, UpdateOrderRequestDTO } from "../types/order";

export const createRestaurantOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const restaurantId = req.params.id;
    const data: CreateOrderRequestDTO = req.body;
    const created = await restaurantOrdersService.create(restaurantId, data);
    const response = {
      data: created,
    };
    res.status(201).send(response);
  } catch (error) {
    next(error);
  }
};

export const getOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const restaurantOrders = await restaurantOrdersService.findAll(req.query);
    const response = {
      data: restaurantOrders,
    };
    res.send(response);
  } catch (error) {
    next(error);
  }
};

export const updateOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const orderId = req.params.orderId;
    const data: UpdateOrderRequestDTO = req.body;
    const updated = await restaurantOrdersService.update(orderId, data);
    const response = {
      data: updated,
    };
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};
