import { Router } from "express";
import {
  createRestaurant,
  deleteRestaurant,
  getRestaurants,
  updateRestaurant,
} from "../controllers/restaurant.controller";

const router = Router();

/**
 * @swagger
 * /restaurant:
 *   post:
 *     summary: Cria um novo restaurante
 *     tags: [Restaurantes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome do restaurante
 *               description:
 *                 type: string
 *                 nullable: true
 *                 description: Descrição do restaurante
 *             required:
 *               - name
 *     responses:
 *       201:
 *         description: Restaurante criado com sucesso
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
 *                       description: ID único do restaurante criado
 *                     name:
 *                       type: string
 *                       description: Nome do restaurante
 *                     description:
 *                       type: string
 *                       nullable: true
 *                       description: Descrição do restaurante
 *                     isDeleted:
 *                       type: boolean
 *                       description: Indica se o restaurante está marcado como deletado
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       description: Data de criação do restaurante
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       description: Data da última atualização do restaurante
 */
router.post("/restaurant", createRestaurant);
/**
 * @swagger
 * /restaurant:
 *   get:
 *     summary: Lista restaurantes com base em filtros opcionais
 *     tags: [Restaurantes]
 *     parameters:
 *       - name: name
 *         in: query
 *         required: false
 *         description: Nome do restaurante para filtrar
 *         schema:
 *           type: string
 *       - name: description
 *         in: query
 *         required: false
 *         description: Descrição do restaurante para filtrar
 *         schema:
 *           type: string
 *       - name: isDeleted
 *         in: query
 *         required: false
 *         description: Filtra restaurantes marcados como deletados
 *         schema:
 *           type: boolean
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome do restaurante
 *               description:
 *                 type: string
 *                 nullable: true
 *                 description: Descrição do restaurante
 *     responses:
 *       200:
 *         description: Lista de restaurantes retornada com sucesso
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
 *                         description: ID único do restaurante
 *                       name:
 *                         type: string
 *                         description: Nome do restaurante
 *                       description:
 *                         type: string
 *                         nullable: true
 *                         description: Descrição do restaurante
 *                       isDeleted:
 *                         type: boolean
 *                         description: Indica se o restaurante está marcado como deletado
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         description: Data de criação do restaurante
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         description: Data da última atualização do restaurante
 */
router.get("/restaurant", getRestaurants);
/**
 * @swagger
 * /restaurant/{id}:
 *   patch:
 *     summary: Atualiza as informações de um restaurante específico
 *     tags: [Restaurantes]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do restaurante a ser atualizado
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *                 description: Nova descrição do restaurante
 *     responses:
 *       200:
 *         description: Restaurante atualizado com sucesso
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
 *                       description: ID único do restaurante
 *                     name:
 *                       type: string
 *                       description: Nome do restaurante
 *                     description:
 *                       type: string
 *                       description: Descrição atualizada do restaurante
 *                     isDeleted:
 *                       type: boolean
 *                       description: Indica se o restaurante está marcado como deletado
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       description: Data de criação do restaurante
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       description: Data da última atualização do restaurante
 */
router.patch("/restaurant/:id", updateRestaurant);
/**
 * @swagger
 * /restaurant/{id}:
 *   delete:
 *     summary: Remove um restaurante específico
 *     tags: [Restaurantes]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do restaurante a ser removido
 *         schema:
 *           type: string
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *                 description: Descrição adicional (não necessária para exclusão)
 *     responses:
 *       200:
 *         description: Restaurante removido com sucesso
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: Restaurant 67805e32b411c6d255fec757 was removed
 */
router.delete("/restaurant/:id", deleteRestaurant);
export default router;
