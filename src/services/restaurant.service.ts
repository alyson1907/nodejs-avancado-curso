import { Restaurant } from "@prisma/client";
import { ParsedQs } from "qs";
import prisma from "../../prisma/prisma";
import { BadRequestError, NotFoundError } from "../error/errors";
import {
  CreateRestaurantRequestDTO,
  UpdateRestaurantRequestDTO,
} from "../types/restaurant";

const create = async (
  data: CreateRestaurantRequestDTO
): Promise<Restaurant> => {
  if (!data.name)
    throw new BadRequestError("Bad Request: restaurant name is required");

  const restaurant = await prisma.restaurant.findUnique({
    where: { name: data.name },
  });
  if (restaurant)
    throw new BadRequestError("Bad Request: restaurant already exists");

  return prisma.restaurant.create({ data });
};

// TODO Trocar ParsedQs por tipagem Omit<Restaurant, ...> em módulos futuros
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

  const restaurant = await prisma.restaurant.findUnique({
    where: { id: restaurantId },
  });
  if (!restaurant)
    throw new NotFoundError(
      "Not Found: the restaurant to update was not found"
    );

  const updated = await prisma.restaurant.update({
    where: { id: restaurant.id },
    data,
  });
  return updated;
};

const remove = async (restaurantId: string): Promise<Restaurant> => {
  if (!restaurantId)
    throw new BadRequestError("Bad Request: restaurantId is required");

  const restaurant = await prisma.restaurant.findUnique({
    where: { id: restaurantId },
  });
  if (!restaurant)
    throw new NotFoundError(
      "Not Found: the restaurant to remove was not found"
    );

  // Soft Delete
  const removed = await prisma.restaurant.update({
    where: { id: restaurant.id },
    data: {
      isDeleted: true,
    },
  });
  return removed;
};

const restaurantOrdersService = {
  create,
  findAll,
  update,
  remove,
};

export default restaurantOrdersService;
