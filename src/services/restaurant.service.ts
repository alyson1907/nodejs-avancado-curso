import { Restaurant } from "@prisma/client";
import { ParsedQs } from "qs";
import prisma from "../../prisma/prisma";
import { BadRequestError, NotFoundError } from "../error/error";
import {
  CreateRestaurantRequestDTO,
  UpdateRestaurantRequestDTO,
} from "../types/restaurant";

const create = async (
  data: CreateRestaurantRequestDTO
): Promise<Restaurant> => {
  if (!data.name)
    throw new BadRequestError("Bad Request: name é um campo obrigatório");

  const restaurant = await prisma.restaurant.findUnique({
    where: { name: data.name },
  });

  if (restaurant)
    throw new BadRequestError("Bad Request: o restaurante já existe");

  return prisma.restaurant.create({ data });
};

const findAll = async (filters: ParsedQs): Promise<Restaurant[]> => {
  const restaurants = await prisma.restaurant.findMany({ where: filters });
  if (!restaurants.length)
    throw new NotFoundError("Not Found: nenhum restaurante encontrado");
  return restaurants;
};

const update = async (
  restaurantId: string,
  data: UpdateRestaurantRequestDTO
): Promise<Restaurant> => {
  if (!restaurantId)
    throw new BadRequestError("Bad Request: restaurantId é obrigatório");

  const restaurant = await prisma.restaurant.findUnique({
    where: { id: restaurantId },
  });
  if (!restaurant)
    throw new NotFoundError("Not Found: restaurante não encontrado");

  const updated = await prisma.restaurant.update({
    where: { id: restaurant.id },
    data,
  });
  return updated;
};

const remove = async (restaurantId: string): Promise<Restaurant> => {
  if (!restaurantId)
    throw new BadRequestError("Bad Request: restaurantId é obrigatório");

  const restaurant = await prisma.restaurant.findUnique({
    where: { id: restaurantId },
  });
  if (!restaurant)
    throw new NotFoundError("Not Found: restaurante não encontrado");

  const removed = await prisma.restaurant.update({
    where: { id: restaurant.id },
    data: {
      isDeleted: true,
    },
  });
  return removed;
};

const restaurantService = {
  create,
  findAll,
  update,
  remove,
};

export default restaurantService;
