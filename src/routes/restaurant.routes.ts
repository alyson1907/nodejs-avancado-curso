import { Router } from "express";
import {
  createRestaurantOrder,
  deleteRestaurantOrder,
  getRestaurantOrders,
  updateRestaurantOrder,
} from "../controllers/restaurant.controller";

const router = Router();
router.post("/restaurant/:id/orders", createRestaurantOrder);
router.get("/restaurant/:id/orders", getRestaurantOrders);
router.patch("/restaurant/:id/orders/:orderId", updateRestaurantOrder);
router.delete("/restaurant/:id/orders/:orderId", deleteRestaurantOrder);
export default router;
