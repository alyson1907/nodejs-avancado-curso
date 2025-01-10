import { NextFunction, Request, Response } from "express";
import restaurantsService from "../services/restaurant.service";
import {
  CreateRestaurantRequestDTO,
  UpdateRestaurantRequestDTO,
} from "../types/restaurant/restaurant";

export const createRestaurant = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data: CreateRestaurantRequestDTO = req.body;
    const created = await restaurantsService.create(data);
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
    const found = await restaurantsService.findAll(req.query);
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
    const updated = await restaurantsService.update(restaurantId, data);
    const response = {
      data: updated,
    };
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
};

export const deleteRestaurant = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const restaurantId = req.params.id;
  const deleted = await restaurantsService.remove(restaurantId);
  res.status(200).send(`Restaurant ${restaurantId} was removed`);
};
