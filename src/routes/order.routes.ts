import { Router } from "express";
import {
  createRestaurantOrder,
  getOrder,
  updateOrder,
} from "../controllers/order.controller";

const router = Router();

/**
 * @swagger
 * /restaurant/{id}/orders:
 *   post:
 *     summary: Cria um novo pedido para um restaurante específico
 *     tags: [Pedidos]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do restaurante onde o pedido será criado
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               dishes:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     dishName:
 *                       type: string
 *                       description: Nome do prato
 *                     amount:
 *                       type: integer
 *                       description: Quantidade do prato
 *                     price:
 *                       type: number
 *                       format: float
 *                       description: Preço do prato
 *     responses:
 *       200:
 *         description: Pedido criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       description: ID do pedido
 *                     restaurantId:
 *                       type: string
 *                       description: ID do restaurante associado ao pedido
 *                     status:
 *                       type: string
 *                       description: Status do pedido
 *                       example: CREATED
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       description: Data de criação do pedido
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       description: Data da última atualização do pedido
 *                     dishes:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                             description: ID do prato no pedido
 *                           orderId:
 *                             type: string
 *                             description: ID do pedido associado ao prato
 *                           dishName:
 *                             type: string
 *                             description: Nome do prato
 *                           amount:
 *                             type: integer
 *                             description: Quantidade do prato
 *                           price:
 *                             type: number
 *                             format: float
 *                             description: Preço do prato
 *                           createdAt:
 *                             type: string
 *                             format: date-time
 *                             description: Data de criação do prato
 *                           updatedAt:
 *                             type: string
 *                             format: date-time
 *                             description: Data da última atualização do prato
 */
router.post("/restaurant/:id/orders", createRestaurantOrder);
/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Obtém todos os pedidos existentes
 *     tags: [Pedidos]
 *     parameters:
 *       - name: restaurantId
 *         in: query
 *         required: false
 *         description: Filtra pedidos pelo ID do restaurante
 *         schema:
 *           type: string
 *       - name: status
 *         in: query
 *         required: false
 *         description: Filtra pedidos pelo status
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de pedidos obtida com sucesso
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
 *                       id:
 *                         type: string
 *                         description: ID do pedido
 *                       restaurantId:
 *                         type: string
 *                         description: ID do restaurante associado ao pedido
 *                       status:
 *                         type: string
 *                         description: Status do pedido
 *                         example: CREATED
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         description: Data de criação do pedido
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         description: Data da última atualização do pedido
 *                       dishes:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             id:
 *                               type: string
 *                               description: ID do prato no pedido
 *                             orderId:
 *                               type: string
 *                               description: ID do pedido associado ao prato
 *                             dishName:
 *                               type: string
 *                               description: Nome do prato
 *                             amount:
 *                               type: integer
 *                               description: Quantidade do prato
 *                             price:
 *                               type: number
 *                               format: float
 *                               description: Preço do prato
 *                             createdAt:
 *                               type: string
 *                               format: date-time
 *                               description: Data de criação do prato
 *                             updatedAt:
 *                               type: string
 *                               format: date-time
 *                               description: Data da última atualização do prato
 */
router.get("/orders", getOrder);
/**
 * @swagger
 * /orders/{orderId}:
 *   patch:
 *     summary: Atualiza o status de um pedido específico
 *     tags: [Pedidos]
 *     parameters:
 *       - name: orderId
 *         in: path
 *         required: true
 *         description: ID do pedido a ser atualizado
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       description: Dados para atualizar o status do pedido
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 description: Novo status do pedido
 *                 example: IN_PROGRESS
 *     responses:
 *       200:
 *         description: Pedido atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       description: ID do pedido atualizado
 *                     restaurantId:
 *                       type: string
 *                       description: ID do restaurante associado ao pedido
 *                     status:
 *                       type: string
 *                       description: Novo status do pedido
 *                       example: IN_PROGRESS
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       description: Data de criação do pedido
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       description: Data da última atualização do pedido
 *                     dishes:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                             description: ID do prato no pedido
 *                           orderId:
 *                             type: string
 *                             description: ID do pedido associado ao prato
 *                           dishName:
 *                             type: string
 *                             description: Nome do prato
 *                           amount:
 *                             type: integer
 *                             description: Quantidade do prato
 *                           price:
 *                             type: number
 *                             format: float
 *                             description: Preço do prato
 *                           createdAt:
 *                             type: string
 *                             format: date-time
 *                             description: Data de criação do prato
 *                           updatedAt:
 *                             type: string
 *                             format: date-time
 *                             description: Data da última atualização do prato
 */
router.patch("/orders/:orderId", updateOrder);

export default router;
