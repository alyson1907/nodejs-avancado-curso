import { Order } from "@prisma/client";
import { ParsedQs } from "qs";
import prisma from "../../prisma/prisma";
import { BadRequestError, NotFoundError } from "../error/errors";
import OrderStatus from "../types/enum/order-status.enum";
import { CreateOrderRequestDTO, UpdateOrderRequestDTO } from "../types/order";

const create = async (
  restaurantId: string,
  data: CreateOrderRequestDTO
): Promise<Order> => {
  const { dishes } = data;
  if (!restaurantId || !dishes)
    throw new BadRequestError(
      "Bad Request: restaurantId and dishes are required"
    );

  const restaurant = await prisma.restaurant.findUnique({
    where: { id: restaurantId },
  });
  if (!restaurant)
    throw new NotFoundError(
      `Not Found: the restaurant ${restaurantId} to create an order was not found`
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
  if (!found.length) throw new NotFoundError(`Not Found: no orders were found`);
  return found;
};

const update = async (
  orderId: string,
  data: UpdateOrderRequestDTO
): Promise<Order> => {
  const { status: newStatus } = data;
  if (!orderId) throw new NotFoundError("Not Found: orderId is required");

  const validOrderStatus = Object.values(OrderStatus);
  const isValidStatus = validOrderStatus.includes(newStatus);
  if (!isValidStatus)
    throw new BadRequestError(
      `Bad Request: invalid order status change. Please provide one of the following: ${validOrderStatus}`
    );

  const order = await prisma.order.findUnique({
    where: { id: orderId },
  });
  if (!order)
    throw new NotFoundError(`Not Found: no order ${orderId} was found `);

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
