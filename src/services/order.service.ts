import { Order } from "@prisma/client";
import { ParsedQs } from "qs";
import prisma from "../../prisma/prisma";
import { BadRequestError, NotFoundError } from "../error/error";
import { CreateOrderRequestDTO, UpdateOrderRequestDTO } from "../types/order";

const create = async (
  restaurantId: string,
  data: CreateOrderRequestDTO
): Promise<Order> => {
  const { dishes } = data;
  if (!restaurantId || !dishes)
    throw new BadRequestError(
      "Bad Request: campos restaurantId e dishes são obrigatórios"
    );

  const restaurant = await prisma.restaurant.findUnique({
    where: { id: restaurantId },
  });
  if (!restaurant)
    throw new BadRequestError(
      "Bad Request: restaurante para criar o pedido não encontrado!"
    );

  const created = await prisma.order.create({
    data: {
      restaurantId,
      dishes: {
        create: dishes,
      },
    },
    include: {
      dishes: true,
    },
  });

  return created;
};

const findAll = async (filters: ParsedQs): Promise<Order[]> => {
  const found = await prisma.order.findMany({
    where: filters,
    include: {
      dishes: true,
    },
  });

  if (!found.length)
    throw new NotFoundError("Not Found: nenhum prato foi encontrado!");

  return found;
};

const update = async (
  orderId: string,
  data: UpdateOrderRequestDTO
): Promise<Order> => {
  if (!orderId) throw new BadRequestError("Bad Request: orderId é obrigatório");

  const { status: newStatus } = data;
  const validOrderStatus = [
    "CREATED",
    "IN_PROGRESS",
    "OUT_FOR_DELIVERY",
    "FINISHED",
    "CANCELLED",
  ];
  const isValidStatus = validOrderStatus.includes(newStatus);
  if (!isValidStatus)
    throw new BadRequestError("Bad Request: novo status de pedido invalido!");

  const order = await prisma.order.findUnique({
    where: { id: orderId },
  });
  if (!order)
    throw new NotFoundError(
      "Bad Request: pedido para ser atualizado inexistente!"
    );

  const updated = await prisma.order.update({
    where: { id: order.id },
    data: {
      status: newStatus,
    },
    include: {
      dishes: true,
    },
  });

  return updated;
};

const restaurantOrdersService = {
  create,
  findAll,
  update,
};

export default restaurantOrdersService;
