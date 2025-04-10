import { NextFunction, Request, Response } from "express";
import restaurantService from "../services/restaurant.service";
import {
  CreateRestaurantRequestDTO,
  UpdateRestaurantRequestDTO,
} from "../types/restaurant";

export const createRestaurant = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data: CreateRestaurantRequestDTO = req.body;
    const created = await restaurantService.create(data);
    const response = {
      data: created,
    };
    res.status(201).send(response);
  } catch (error) {
    next(error);
  }
};

export const getRestaurants = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const filters = req.query;
    const found = await restaurantService.findAll(filters);
    const response = {
      data: found,
    };
    res.send(response);
  } catch (error) {
    next(error);
  }
};

export const updateRestaurant = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const restaurantId = req.params.id;
    const data: UpdateRestaurantRequestDTO = req.body;
    const updated = await restaurantService.update(restaurantId, data);
    const response = {
      data: updated,
    };
    res.send(response);
  } catch (error) {
    next(error);
  }
};

export const deleteRestaurant = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const restaurantId = req.params.id;
    const removed = await restaurantService.remove(restaurantId);
    res.send(`Restaurante de id ${removed.id} removido com sucesso!`);
  } catch (error) {
    next(error);
  }
};
