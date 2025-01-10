import { Restaurant } from "@prisma/client";
import { ParsedQs } from "qs";
import prisma from "../../prisma/prisma";
import { BadRequestError, NotFoundError } from "../error/errors";
import {
  CreateRestaurantRequestDTO,
  UpdateRestaurantRequestDTO,
} from "../types/restaurant/restaurant";

const create = (data: CreateRestaurantRequestDTO): Promise<Restaurant> => {
  if (!data.name)
    throw new BadRequestError("Bad Request: restaurant name is required");
  return prisma.restaurant.create({ data });
};

const findAll = async (filters: ParsedQs): Promise<Restaurant[]> => {
  const restaurants = await prisma.restaurant.findMany({ where: filters });
  if (!restaurants.length)
    throw new NotFoundError("Not Found: no restaurants were found");
  return restaurants;
};

const update = async (
  restaurantId: string,
  data: UpdateRestaurantRequestDTO
): Promise<Restaurant> => {
  if (!restaurantId)
    throw new BadRequestError("Bad Request: restaurantId is required");
  const updated = await prisma.restaurant.update({
    where: { id: restaurantId },
    data,
  });
  if (!updated)
    throw new NotFoundError(
      "Not Found: the restaurant to update was not found"
    );
  return updated;
};

const remove = async (restaurantId: string): Promise<Restaurant> => {
  if (!restaurantId)
    throw new BadRequestError("Bad Request: restaurantId is required");

  // Soft Delete
  const removed = await prisma.restaurant.update({
    where: { id: restaurantId },
    data: {
      isDeleted: true,
    },
  });
  if (!removed)
    throw new NotFoundError(
      "Not Found: the restaurant to remove was not found"
    );
  return removed;
};

const restaurantOrdersService = {
  create,
  findAll,
  update,
  remove,
};

export default restaurantOrdersService;
