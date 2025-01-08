import { Router } from "express";
import {
  createRestaurantOrder,
  deleteRestaurantOrder,
  getRestaurantOrders,
  updateRestaurantOrder,
} from "../controllers/order.controller";

const router = Router();

/**
 * @swagger
 * /api/restaurant/{id}/orders:
 *   post:
 *     summary: Cria um novo pedido para um restaurante específico
 *     tags: [Pedidos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do restaurante
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               order:
 *                 type: object
 *                 properties:
 *                   dish:
 *                     type: string
 *                     description: Nome do prato
 *                   amount:
 *                     type: integer
 *                     description: Quantidade de itens
 *                   totalPrice:
 *                     type: number
 *                     format: float
 *                     description: Preço total do pedido
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID do pedido criado
 *                 order:
 *                   type: object
 *                   properties:
 *                     dish:
 *                       type: string
 *                       description: Nome do prato
 *                     amount:
 *                       type: integer
 *                       description: Quantidade de itens
 *                     totalPrice:
 *                       type: number
 *                       format: float
 *                       description: Preço total do pedido
 */
router.post("/restaurant/:id/orders", createRestaurantOrder);
/**
 * @swagger
 * /api/restaurant/{id}/orders:
 *   get:
 *     summary: Lista todos os pedidos de um restaurante específico
 *     tags: [Pedidos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do restaurante
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de pedidos retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       restaurantId:
 *                         type: integer
 *                         description: ID do restaurante
 *                       orders:
 *                         type: array
 *                         description: Lista de pedidos do restaurante
 *                         items:
 *                           type: object
 *                           properties:
 *                             id:
 *                               type: integer
 *                               description: ID do pedido
 *                             dish:
 *                               type: string
 *                               description: Nome do prato
 *                             amount:
 *                               type: integer
 *                               description: Quantidade de itens
 *                             totalPrice:
 *                               type: number
 *                               format: float
 *                               description: Preço total do pedido
 */
router.get("/restaurant/:id/orders", getRestaurantOrders);
/**
 * @swagger
 * /api/restaurant/{id}/orders/{orderId}:
 *   patch:
 *     summary: Atualiza um pedido específico para um restaurante
 *     tags: [Pedidos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do restaurante
 *         schema:
 *           type: integer
 *       - name: orderId
 *         in: path
 *         required: true
 *         description: ID do pedido
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               order:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID do pedido a ser atualizado
 *                   dish:
 *                     type: string
 *                     description: Nome do prato
 *                   amount:
 *                     type: integer
 *                     description: Quantidade de itens
 *                   totalPrice:
 *                     type: number
 *                     format: float
 *                     description: Preço total do pedido
 *     responses:
 *       200:
 *         description: Pedido atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 restaurantId:
 *                   type: integer
 *                   description: ID do restaurante associado
 *                 orders:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: ID do pedido
 *                       order:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                             description: ID do pedido atualizado
 *                           dish:
 *                             type: string
 *                             description: Nome do prato
 *                           amount:
 *                             type: integer
 *                             description: Quantidade de itens
 *                           totalPrice:
 *                             type: number
 *                             format: float
 *                             description: Preço total do pedido
 */
router.patch("/restaurant/:id/orders/:orderId", updateRestaurantOrder);

/**
 * @swagger
 * /api/restaurant/{id}/orders/{orderId}:
 *   delete:
 *     summary: Remove um pedido específico de um restaurante
 *     tags: [Pedidos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do restaurante
 *         schema:
 *           type: integer
 *       - name: orderId
 *         in: path
 *         required: true
 *         description: ID do pedido a ser removido
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pedido removido com sucesso
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "Removed order 123 from restaurant 1"
 */
router.delete("/restaurant/:id/orders/:orderId", deleteRestaurantOrder);
export default router;
