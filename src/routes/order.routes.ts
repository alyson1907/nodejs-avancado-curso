import { Router } from "express";
import { getRestaurantOrders } from "../controllers/order.controller";

const router = Router();
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
export default router;
